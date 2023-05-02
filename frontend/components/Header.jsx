import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";

import MenuMobile from "./MenuMobile";
import Search from "./Search";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import ProfileMenu from "./ProfileMenu";

import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { authUser, isLoading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !authUser) {
      if (logOut) {
        router.push("/login");
      }
    }
  }, [authUser, isLoading]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <>
      <header
        className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform divide-gray-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setMobileMenu(false)}
            className="transition-transform active:scale-95"
          >
            <img
              src="/assets/h3liosSvg.svg"
              alt="main logo"
              className="w-[80px] md:w-[120px]"
            />
          </Link>
          <Menu
            categories={categories}
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
          ></Menu>

          {mobileMenu && (
            <MenuMobile
              categories={categories}
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              setMobileMenu={setMobileMenu}
              authUser={authUser}
              signOut={signOut}
              setLogOut={setLogOut}
            ></MenuMobile>
          )}

          <div className="flex items-center  text-black">
            {/* search function start */}

            <section
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90"
              onClick={() => setShowSearch(true)}
            >
              <button className="">
                <AiOutlineSearch className="text-[19px] md:text-[24px] " />
              </button>
            </section>
            {/* search function End */}
            {/* Icon start */}
            <Link href="/wishlist">
              <section className="w-8 hidden  md:flex md:w-12 h-8 md:h-12 rounded-full  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform active:scale-90">
                <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
              </section>
            </Link>
            {/* Icon End */}
            {/* Icon start */}
            <Link href="/cart">
              <section className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <BsCart className="text-[15px] md:text-[20px] transition-transform active:scale-90" />
                {cartItems.length > 0 && (
                  <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[14px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    {cartItems.length}
                  </div>
                )}
              </section>
            </Link>

            {authUser ? (
              <></>
            ) : (
              <>
                <Link href="/login">
                  <li className="hidden md:flex px-1 h-10 font-medium text-black justify-center items-center  font-urbanist mr-2 transition-transform active:scale-90">
                    Login
                  </li>
                </Link>
                <Link href="/register">
                  <li className=" hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-black rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90">
                    Sign Up
                  </li>
                </Link>
              </>
            )}

            {authUser && (
              <section
                onClick={() => {
                  setShowProfileMenu(true);
                }}
                className={`w-8 flex ${
                  authUser?.photo ? "" : "hidden"
                } md:flex md:w-12 h-8 md:h-12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative transition-transform  active:scale-90`}
              >
                {authUser?.photo ? (
                  <div className="w-[70%]">
                    <img
                      referrerpolicy="no-referrer"
                      className="rounded-full"
                      alt="photo"
                      src={authUser?.photo}
                    />
                  </div>
                ) : (
                  <>
                    <h1>{authUser?.username}</h1>
                  </>
                )}
              </section>
            )}

            <ProfileMenu
              showProfileMenu={showProfileMenu}
              setShowProfileMenu={setShowProfileMenu}
              signOut={signOut}
              setLogOut={setLogOut}
            ></ProfileMenu>

            {/* Mobile icon start */}
            <section className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              {mobileMenu ? (
                <VscChromeClose
                  className="text-[16px]"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <BiMenuAltRight
                  className="text-[20px]"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </section>
            {/* Mobile icon End */}
          </div>
        </Wrapper>
      </header>
      {showSearch && <Search setShowSearch={setShowSearch}></Search>}
    </>
  );
};

export default Header;
