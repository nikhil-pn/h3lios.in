import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/*           
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div> */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                H3LIOS.IN
              </div>
              <Link href="/about">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/client">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Client
                </div>
              </Link>

              <Link href="/wishlist">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Wishlist
                </div>
              </Link>

              <Link href="/cart">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Cart
                </div>
              </Link>
              <Link href="/contact">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Contact Us
                </div>
              </Link>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Explore Categories
              </div>
              <Link href="/category/ai-services">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Ai Services
                </div>
              </Link>
              <Link href="/category/programming-and-tech">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Programming & Tech
                </div>
              </Link>
              <Link href="/category/youtube-essentials">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Youtube Essentials
                </div>
              </Link>
              <Link href="/category/graphics-and-design">
                <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                  Graphics & Design
                </div>
              </Link>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://instagram.com/h3liosdesign", "_blank");
            }}
          >
            <FaInstagram size={20} />
          </div>

          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://youtube.com/ntecphones", "_blank");
            }}
          >
            <FaYoutube size={20} />
          </div>

          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://twitter.com/NikhilEth", "_blank");
            }}
          >
            <FaTwitter size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 H3lios.in, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
