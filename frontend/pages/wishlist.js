import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/firebase/auth";
import { useDispatch } from "react-redux";
import Wish from "@/components/Wish";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { addToCart } from "@/store/cartSlice";

const wishlist = () => {


  const deleteButton = () => {
    toast.error("Wishlist Item Deleted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [wishLists, setWishLists] = useState([]);
  const [deleted, setdeleted] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useAuth();

  useEffect(() => {
    if (!!authUser) {
      fetchWishLists(authUser.uid);
    }
  }, [authUser, deleted]);

  useEffect(() => {
    if (deleted) {
      fetchWishLists(authUser.uid);
    }
  }, [deleted]);

  const fetchWishLists = async (uid) => {
    try {
      const q = query(collection(db, "wishlist"), where("owner", "==", uid));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((wish) => {
        data.push({ ...wish.data(), id: wish.id });
      });

      setWishLists(data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const deleteWishList = async (docId) => {
    try {
      await deleteDoc(doc(db, "wishlist", docId));
      fetchWishLists(authUser.uid);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const updateWishList = async (e, docId) => {
    try {
      const wishListRef = doc(db, "wishlist", docId);
      await updateDoc(wishListRef, {
        selectedSize: e.target.value,
      });
      fetchWishLists(authUser.uid);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return (
    <Wrapper>
      <ToastContainer></ToastContainer>

      {!authUser && (
        <div className="flex-[2]   flex flex-col items-center pb-[50px] mt-28 md:mt-20">
          <img
            src="/assets/empty-wishlist.png"
            className="w-[300px] md:w-[400px] opacity-90 "
          ></img>
          <span className="text-xl font-bold mt-8">Please Login</span>
          <span className="text-center mt-4">
            Login to view items in your wishlist.
            <br />
          </span>
          <Link
            href="/login"
            className="py-4 px-28 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Login
          </Link>
        </div>
      )}
      {authUser && (
        <>
          {wishLists?.length < 1 && (
            <>
              <div className="flex-[2]   flex flex-col items-center pb-[50px] mt-28 md:mt-20">
                <img
                  src="/assets/empty-wishlist.png"
                  className="w-[300px] md:w-[400px] opacity-90 "
                ></img>
                <span className="text-xl opacity-80 font-bold mt-8">
                  Your wishlist is empty
                </span>
                <span className="text-center mt-4">
                  Looks like you have not added anything in your wishlist.
                  <br />
                  Go ahead and explore top categories.
                </span>
                <Link
                  href="/"
                  className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                >
                  Browse Home
                </Link>
              </div>
            </>
          )}
        </>
      )}

      {wishLists?.length > 0 && (
        <div className="">
          <section className=" md:py-20">
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Wishlist
              </div>
            </div>

            <section className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Wishlist Items</div>

                {wishLists?.map((item) => (
                  <Wish
                    key={item.id}
                    data={item}
                    deleteWishList={deleteWishList}
                    setdeleted={setdeleted}
                    updateWishList={updateWishList}
                    addToCart={addToCart}
                    dispatch={dispatch}
                    deleteButton={deleteButton}
                  ></Wish>
                ))}
              </div>
            </section>
          </section>
        </div>
      )}
    </Wrapper>
  );
};

export default wishlist;
