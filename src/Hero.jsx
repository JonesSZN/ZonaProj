import { ArrowUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-[#f6f1e9] flex justify-center py-12 lg:pt-32">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col ">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
};
const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      <HeroLeftTopText />
      <img
        className="max-w-[350px] lg:block hidden mt-12 rounded-lg object-cover"
        src="lobby.jpg"
        alt=""
      />
    </div>
  );
};
const HeroRight = () => {
  return (
    <div className="lg:w-1/2 flex flex-col gap-4 lg:p-0 py-8">
      <img className="w-full rounded-lg" src="Window.jpg" alt="" />
      <div className="flex items-center gap-4 justify-end">
        <p className="text-[#333] text-[14px]">Architectural Excellence</p>
        <div className="w-28 h-[1px] bg-black"></div>
      </div>
    </div>
  );
};

const HeroLeftTopText = () => {
  return (
    <>
      <p className="text-black lg:max-w-[600px]  font-bold text-[34px] lg:text-[54px]">
        Your home, your style begin your design adventure
      </p>
      <p className="text-[#333] max-w-[550px] lg:text-[16px] text-[14px]">
        A fusion of modern aesthetics and classical precision, capturing the
        essence of architectural excellence.
      </p>
      <button className="border text-[12px] flex items-center gap-2 max-w-[155px] text-[#333]  hover:bg-black duration-300 transition-all bg-transparent hover:text-white border-black rounded-full cursor-pointer py-[14px] px-[26px]">
        Our Projects <ArrowUp className="rotate-45" size={20} />
      </button>
    </>
  );
};
export { Hero };
