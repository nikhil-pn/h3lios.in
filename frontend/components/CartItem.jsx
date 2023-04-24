import { useAuth } from "@/firebase/auth";
import { db } from "@/firebase/firebase";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";

import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  console.log(data, "data");
  const [todos, setTodos] = useState([]);

  const p = data.attributes;
  // const p =
  console.log(todos, "todos");

  // console.log(p, "p data");

  //fireStore

  // fetching item form fireStore

  const fetchCartItems = async (uid) => {
    try {
      // Create a Firestore query to fetch all the todos for the user with the given ID.
      const q = query(collection(db, "cart"), where("owner", "==", uid));

      // Execute the query and get a snapshot of the results.
      const querySnapshot = await getDocs(q);

      // Extract the data from each todo document and add it to the data array.
      let data = [];
      querySnapshot.forEach((item) => {
        data.push({ ...item.data(), id: item.id });
      });
      setTodos(data);
    } catch (error) {
      console.error(error, "Error");
    }
  };

  //adding item to fireStore
  const { authUser } = useAuth();
  console.log(authUser, "authUser");
  const addItemsToFireStore = async () => {
    try {
      const docRef = await addDoc(collection(db, "cart"), {
        owner: authUser.uid,
        content: p,
      });

      console.log(docRef.id, "doc id");
      fetchCartItems(authUser.uid);
    } catch (error) {
      console.error(error, "Error firestore");
    }
  };
  const dispatch = useDispatch();
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* {todos && <h1>{todos?.[0].content.name}</h1>} */}
          <div>
            {todos.length > 0 ? (
              <ul>
                {todos.map((todo) => (
                  <li key={todo.content.id}>{todo.content.name}</li>
                ))}
              </ul>
            ) : (
              <p>No items to display</p>
            )}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP:&#36; {p.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      disabled={!item.enabled ? true : false}
                      value={item.size}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Qauntity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
          <button onClick={addItemsToFireStore}>add to fire store</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
