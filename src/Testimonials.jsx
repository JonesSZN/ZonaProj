import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <Top />
        <div className="lg:flex lg:flex-row gap-8 ">
          <LeftCards />
          <RightCards />
        </div>
      </div>
    </section>
  );
};
const Top = () => {
  return (
    <div className="flex justify-between max-w-[1250px] mb-4 items-end">
      <TopLeft />
      <TopRight />
    </div>
  );
};

const TopLeft = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img src="black.svg" alt="" />
        <p className="text-[#333333] text-[14px]">TESTIMONIALS</p>
      </div>
      <p className="text-[36px] text-black">Clients Review</p>
    </div>
  );
};
const TopRight = () => {
  return (
    <div className="flex gap-4 cursor-pointer items-center">
      <ArrowLeft />
      <ArrowRight />
    </div>
  );
};
const LeftCards = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-4 lg:gap-4">
      <img
        className="rounded-md lg:w-[314px] object-cover h-[370px]"
        src="woman1.jpg"
        alt=""
      />
      <div className="bg-[#f6f1e9] lg:w-[334px] lg:h-[370px] rounded-md p-5">
        <h2 className="text-[14px] lg:mb-16 font-semibold text-[#000000]">
          "Urban Living"
        </h2>
        <p className="lg:text-[16px] text-[14px] text-[#333333] mb-[40px] font-semibold max-w-[300px]">
          Their landscape design team is incredibly talented and brought my
          backyard vision to life in ways I never thought possible. Thank you
          for creating a beautiful sanctuary for me to enjoy!
        </p>

        <p className="font-semibold">Cameron Williamson</p>
        <p className="text-[12px] text-[#333]">Georgia, USA</p>
      </div>
    </div>
  );
};
const RightCards = () => {
  return (
    <div className="lg:flex lg:flex-row  hidden gap-4">
      <img className="rounded-md w-[314px] h-[370px]" src="guy1.jpg" alt="" />
      <div className="bg-[#f6f1e9] w-[334px] h-[370px] rounded-md p-5">
        <h2 className="text-[14px] mb-16 font-semibold text-black">
          "Urban Living"
        </h2>
        <p className="text-[16px] mb-[40px] font-semibold max-w-[300px]">
          Their landscape design team is incredibly talented and brought my
          backyard vision to life in ways I never thought possible. Thank you
          for creating a beautiful sanctuary for me to enjoy!
        </p>

        <p className="font-semibold">Cameron Williamson</p>
        <p className="text-[12px] text-[#333]">Georgia, USA</p>
      </div>
    </div>
  );
};

export { Testimonials };
