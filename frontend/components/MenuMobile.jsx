import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  // { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Categories", subMenu: true },
  { id: 3, name: "About", url: "/about" },
  { id: 4, name: "Client", url: "/client" },
  { id: 5, name: "Contact", url: "/contact" },
  { id: 6, name: "Wishlist", url: "/wishlist" },
  { id: 7, name: "Cart", url: "/cart" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
  authUser,
  signOut,
  setLogOut,
}) => {
  return (
    <>
      <div className="">
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
          {authUser && (
            <section
              key="3i"
              className="grid h-20 justify-center place-content-center mt-10"
            >
              <h1 className=" text-2xl/3 opacity-90 ">
                Welcome back {authUser?.username}
              </h1>
            </section>
          )}

          {data.map((item) => {
            return (
              <>
                <React.Fragment key={item.id}>
                  {!!item?.subMenu ? (
                    <li
                      className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                      onClick={() => setShowCatMenu(!showCatMenu)}
                    >
                      <section className="flex justify-between items-center">
                        {item.name}
                        <BsChevronDown size={14} />
                      </section>

                      {showCatMenu && (
                        <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                          {categories?.map(({ attributes: c, id }) => {
                            return (
                              <Link
                                key={id}
                                href={`/category/${c.slug}`}
                                onClick={() => {
                                  setShowCatMenu(false);
                                  setMobileMenu(false);
                                }}
                              >
                                <li className="py-4 px-8 border-t flex justify-between">
                                  {c.name}
                                  <span className="opacity-50 text-sm">
                                    {" "}
                                    {`(${c.products.data.length})`}
                                  </span>
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="py-4 px-5 border-b">
                      <Link
                        href={item?.url}
                        onClick={() => setMobileMenu(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              </>
            );
          })}
          <section className="flex mx-auto my-auto gap-4 font-bold">
            {!authUser && (
              <>
                <Link href="/login">
                  <button
                    id="button"
                    onClick={() => setMobileMenu(false)}
                    className="bg-black font-normal text-white w-[150px] py-4 mt-10 rounded-sm transition-transform hover:bg-black/[0.8] active:scale-90"
                  >
                    Log In
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    id="button"
                    onClick={() => setMobileMenu(false)}
                    className="bg-black font-normal text-white w-[150px] py-4 mt-10 rounded-sm transition-transform hover:bg-black/[0.8] active:scale-90"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            {authUser && (
              <button
                id="button"
                className="bg-black font-normal text-white w-[150px] py-4 mt-10 rounded-sm transition-transform hover:bg-black/[0.8] active:scale-90"
                onClick={() => {
                  setMobileMenu(false);
                  setLogOut(true);
                  signOut();
                }}
              >
                Logout
              </button>
            )}
          </section>
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
