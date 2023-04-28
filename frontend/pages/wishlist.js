import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Wish from "@/components/Wish";
import {
  addDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { addToCart, addToWishList } from "@/store/cartSlice";

const wishlist = () => {
  const { wishListItems } = useSelector((state) => state.cart);
  console.log(wishListItems, "wishListItems");
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
      {!authUser && (
        <div className="flex-[2]   flex flex-col items-center pb-[50px] mt-28 md:mt-20">
          <img src="/assets/wishlist1.png" className="w-48 opacity-90 "></img>
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

      <div>
        <section className=" md:py-20">
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Wishlist
            </div>
          </div>

          <section className="flex flex-col lg:flex-row gap-12 py-10">
            <div className="flex-[2]">
              <div className="text-lg font-bold">Wishlist Items</div>

              {wishLists?.map((item, index) => (
                <Wish
                  key={item.id}
                  data={item}
                  deleteWishList={deleteWishList}
                  setdeleted={setdeleted}
                  updateWishList={updateWishList}
                  addToCart={addToCart}
                  dispatch={dispatch}
                ></Wish>
              ))}
            </div>
          </section>
        </section>
      </div>
    </Wrapper>
  );
};

export default wishlist;
