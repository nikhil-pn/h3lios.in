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
  // const [delete, setDelete] = useState(false);
  const [deleted, setdeleted] = useState(false);

  // const mainArray = wishLists

  // const uniqueArray = wishLists?.reduce((acc, obj)=>{
  //   if(!acc.find((item)=> item.productId === obj.productId)){
  //     acc.push(obj)
  //   }
  //   return acc;
  // },[])

  // console.log(uniqueArray, "uniqueArray");



  // console.log(newArray, "newarray");

  const dispatch = useDispatch();

  const { authUser } = useAuth();
 
  console.log(wishLists.length, "wishlist length");

  // dispatch(addToWishList({
  //   wishlistNumber : wishLists.length
  // }))

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
      // Create a Firestore query to fetch all the todos for the user with the given ID.
      const q = query(collection(db, "wishlist"), where("owner", "==", uid));

      // Execute the query and get a snapshot of the results.
      const querySnapshot = await getDocs(q);

      // Extract the data from each todo document and add it to the data array.
      let data = [];
      querySnapshot.forEach((wish) => {
        data.push({ ...wish.data(), id: wish.id });
      });

      // Set the todos state with the data array.
      setWishLists(data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };
  const deleteWishList = async (docId) => {
    try {
      // Delete the todo document with the given ID from the "todos" collection in Firestore.
      await deleteDoc(doc(db, "wishlist", docId));

      // After deleting the todo, fetch all todos for the current user and update the state with the new data.
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
