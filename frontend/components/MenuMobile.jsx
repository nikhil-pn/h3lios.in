import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Account", url: "/account" },
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
}) => {
  return (
    <>
      <div className="">
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
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
            {/* <button className="bg-green-400 px-4 py-2 rounded-md">Log In</button> */}
            <button id="button" className=" bg-green-400 px-8 rounded-lg py-2 font-urbanist text-lg">Log In</button>
            <button id="button" className="font-urbanist px-8 rounded-lg py-2 bg-black text-white text-lg">Sign Up</button>
          </section>
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
