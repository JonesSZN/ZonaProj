import { ArrowUp } from "lucide-react";

const Service = () => {
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <Top />
        <Cards />
        <Callus />
        <Logos />
      </div>
    </section>
  );
};

const Cards = () => {
  const CardObject = [
    {
      image: "logo8.svg",
      Design: "Interior Design",
      text: "From concept to completion, we'll transform your vision into reality, creating beautiful, functional interiors.",
    },
    {
      image: "logo9.svg",
      Design: "Architecture",
      text: "Innovative designs to meticulous planning, we'll craft spaces that inspire and endure, tailored to your vision.",
    },
    {
      image: "logo7.svg",
      Design: "Landscape Design",
      text: "Lush gardens to serene retreats, we'll create environments that harmoinze with nature and enhance your lifestyle.",
    },
  ];
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-6  ">
      {CardObject.map((item) => (
        <div className="border hover:bg-[#f6f1e9] duration-300 transition-all cursor-pointer border-[0,0,0,0.4] rounded-md p-10">
          <img className="mb-48" src={item.image} alt="" />
          <h2 className="text-[22px] text-[#000000]">{item.Design}</h2>
          <p className="text-[#333]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

const Logos = () => {
  const LogoArray = [
    "service1.svg",
    "service4.svg",
    "service6.svg",
    "service3.svg",
    "service2.svg",
    "service5.svg",
  ];
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2 mt-12 gap-16 lg:w-auto w-full lg:gap-[120px]">
      {LogoArray.map((item) => (
        <>
          <img src={item} alt="" />
        </>
      ))}
    </div>
  );
};

const Callus = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className=" mt-4 lg:max-w-[500px] max-w-[340px] text-center">
        <span className="text-[#999]">
          Do you have any project on your mind? Call Us:
        </span>{" "}
        +(378) 555-0108
      </p>
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex justify-between mb-6 items-end">
      <div>
        <TopLeft />
      </div>

      <TopRight />
    </div>
  );
};

const TopLeft = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img src="Black.svg" alt="" />
        <p className="text-[#333] text-[14px]">WHAT WE DO</p>
      </div>
      <p className="text-[36px] text-black font-semibold">Our Services</p>
    </>
  );
};
const TopRight = () => {
  return (
    <>
      <div className="flex gap-2 cursor-pointer group">
        <p className="text-[12px] text-[#333]">View All</p>
        <ArrowUp
          className="rotate-45 group-hover:translate-x-1 duration-500 transition-all"
          size={20}
        />
      </div>
    </>
  );
};

export { Service };
