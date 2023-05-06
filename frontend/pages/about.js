import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div
      id="contact"
      className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
    >
      <Wrapper>
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Behind the Brand
          </div>

          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            If you're interested in shopping on{" "}
            <Link href="https://fiverr.com/h3liosdesign" target="_blank">
              <span className="text-green-400 cursor-pointer">Fiverr.com</span>
            </Link>
            , be sure to check out our page! We offer a variety of high-quality
            products and services that are sure to meet your needs.
          </div>
        </Div>
        {/* SECTION HEADING END */}

        <Link target="_blank" href="https://www.fiverr.com/h3liosdesign">
          <img
            className="hover:scale-105 duration-200"
            src="/assets/533shots_so.png"
          ></img>
          {/* <img src="/assets/fiverrhomepage.webp"></img> */}
        </Link>
        <Div className=" mt-10 relative mb-10   ">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 text-[#111111]">
            What's Next
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            H3lios.in is gearing up to enter the exciting world of blockchain
            technology later this year. We are committed to leveraging this
            cutting-edge technology. Stay tuned for more updates as we continue
            to make progress towards our launch!
          </div>
        </Div>
        <img
          className="hover:scale-105 duration-200"
          src="/assets/511shots_so.png"
        ></img>

        <Div className=" mt-10 relative mb-10 ">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 text-[#111111]">
            Connect With Us
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            We would love for you to connect with us on our social media handles
            and stay up-to-date with the latest news and updates from H3lios.in.
            Follow us on
            <Link href="https://instagram.com/h3liosdesign" target="_blank">
              <span className="text-blue-500 cursor-pointer"> Instagram</span>
            </Link>{" "}
            to join our community and be a part of the conversation.
          </div>
        </Div>
        <Link href="https://instagram.com/h3liosdesign" target="_blank">
          <img
            className="hover:scale-105 duration-200"
            src="/assets/713shots_so.png"
          ></img>
        </Link>

        <Div className=" mt-10 mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 text-[#111111]">
            Part of the journey is the End
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            It is with heavy hearts that we announce the closure of our YouTube
            channel & Affiliate services, Ntec Phone, on June 10, 2020. We are
            deeply grateful for the overwhelming support and love that our
            community has shown us over the years. It has been an incredible
            journey, and we could not have done it without you. Thank you for
            being a part of the Ntec Phone family, and we hope that our content
            has brought value to your shopping experience.
          </div>
        </Div>
        <section className="flex justify-center items-center w-full">
          <div className=" bg w-full">
            <div className=" md:w-[500px] w-full bg-black mx-auto hover:scale-105 duration-200">
              <motion.video loop autoPlay muted playsInline>
                <source src="/assets/ntecend.mp4" type="video/mp4" />
              </motion.video>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default about;
