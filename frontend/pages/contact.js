import React from "react";
import Wrapper from "@/components/Wrapper";
import Div from "@/components/Div";
import Form from "@/components/Form";

const contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
    >
      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Lets Talk
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </div>
        </Div>
        {/* SECTION HEADING END */}

        <Form></Form>
      </Wrapper>
    </div>
  );
};

export default contact;
