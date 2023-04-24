import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { useSelector } from "react-redux";

import { auth } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const provider = new GoogleAuthProvider();

const login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { authUser, isLoading } = useAuth();
  const { cartItems } = useSelector((state) => state.cart);

  const router = useRouter();

  console.log(cartItems, "cartItems");

  useEffect(() => {
    console.log(isLoading, "isloading");
    console.log(authUser, "authUser");

    if (!isLoading && authUser) {
      if (cartItems.length > 0) {
        console.log("log here in cart items");
        router.push("/cart");
      } else {
        router.push("/");
      }
    }
  }, [authUser, isLoading]);

  const loginHandler = async () => {
    if (!email || !password) {
      return;
    }
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user, "user");
    } catch (error) {
      console.error(error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user, "user google");
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return isLoading || (!isLoading && authUser) ? (
    <Loader></Loader>
  ) : (
    <main className="flex :h-[100vh] font-urbanist md:-mt-10">
      <div className="w-full  p-8 md:p-14 flex items-center justify-center ">
        <div className="p-8 w-[600px] justify-center text-center  ">
          <h1 className="text-[34px] md:text-[40px] font-semibold">Login</h1>
          <p className="mt-6 ml-1">
            Don't have an account ?{" "}
            <Link
              href="/register"
              className="underline hover:text-blue-400 cursor-pointer"
            >
              Sign Up
            </Link>
          </p>

          <div
            className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
            onClick={signInWithGoogle}
          >
            <FcGoogle size={22} />
            <span className="font-medium text-black group-hover:text-white">
              Login with Google
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col text-left">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col text-left ">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-black text-white w-full md:w-[50%] py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 "
              onClick={loginHandler}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default login;
