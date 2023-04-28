import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";

import Link from "next/link";

const Wish = ({
  data,
  deleteWishList,
  updateWishList,
  addToCart,
  dispatch,
}) => {
  const p = data?.attributes;

  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p?.thumbnail?.data?.attributes?.url}
          alt="product"
          width={120}
          height={120}
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p?.name}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p?.subtitle}
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            <div className="flex justify-between">
              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 md:hidden">
                MRP:&#36; {p?.price}
              </div>

              {clicked && (
                <Link href="/cart">
                  <BsCartCheckFill className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"></BsCartCheckFill>
                </Link>
              )}

              {!clicked && (
                <MdAddShoppingCart
                  className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                  onClick={() => {
                    setClicked(true);
                    dispatch(
                      addToCart({
                        id: data.productId,
                        attributes: data.attributes,
                        selectedSize: data.selectedSize,
                        oneQuantityPrice: data.oneQuantityPrice,
                      })
                    );
                  }}
                ></MdAddShoppingCart>
              )}
            </div>
          </div>
        </div>

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p?.subtitle}
        </div>
        <div className="text-sm font-bold text-black/[0.5] hidden md:block">
          MRP:&#36; {p?.price}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateWishList(e, data.id)}
              >
                {p?.size?.data?.map((item, i) => {
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
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <RiDeleteBin6Line
              onClick={() => {
                deleteWishList(data.id);
              }}
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
