import Wrapper from "@/components/Wrapper";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useScroll, useTransform } from "framer-motion";
import Div from "@/components/Div";
import { data } from "@/utils/data";

const contact = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
  return (
    <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      {/* <motion.img className="sec-4-p-e-1 rellax" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-4-p-e-2 rellax" style={{ y: y2 }} src={pe2} /> */}
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Client Says
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
          <Carousel
            className="clientCarousel"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            // showIndicators={false}
          >
            {/* SLIDE START */}
            {data.map((item) => (
              <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                <div className="mb-[25px]">
                  <img
                    src={item.image}
                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                  />
                  <div className="font-bold">{item.name}</div>
                  <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                    {item.country}
                  </div>
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  {item.review}
                </div>
              </div>
            ))}
            ;{/* SLIDE END */}
          </Carousel>
        </Div>
        {/* CAROUSEL END */}
      </Wrapper>
    </div>
  );
};

export default contact;
