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
            We love hearing from our customers! If you have any questions or
            would like to place a custom order, please don't hesitate to get in
            touch with us. You can drop us an enquiry or message using our
            contact form, and we'll get back to you as soon as possible. We are
            committed to providing excellent customer service and look forward
            to the opportunity to serve you!
          </div>
        </Div>
        {/* SECTION HEADING END */}

        <Form></Form>
      </Wrapper>
    </div>
  );
};

export default contact;
