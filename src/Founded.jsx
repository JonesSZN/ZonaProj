import { ArrowUp } from "lucide-react";

const Founded = () => {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col-reverse gap-8 lg:gap-16">
          <Left />
          <RightImage />
        </div>
      </div>
    </section>
  );
};
const Left = () => {
  return (
    <div className="flex flex-col gap-8">
      <LeftTopText />
      <MidContentLeftContainer />
    </div>
  );
};

const MidContentLeftContainer = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-4">
      <MiddleLeftFounded />
      <RightContent />
    </div>
  );
};

const LeftTopText = () => {
  return (
    <div>
      <p className="lg:text-[36px] text-[24px] max-w-[400px] lg:max-w-[850px]  text-black">
        From concept to creation how our dedication shapes architectural marvels
      </p>
    </div>
  );
};
const RightContent = () => {
  const RightArray = [
    "From the earlist conceptaul sketches to the final touches on a completed project, every step of our journey has been marked by a commitment to pushing the limits of creativity and craftsmanship.",
    "Over the years, we've had the privilege of working on a diverse array of projects, each presenting its own unique set of challenges and opportunities.",
  ];
  return (
    <div className="flex flex-col gap-6 lg:gap-44">
      <div className="flex flex-col gap-2">
        {RightArray.map((text) => (
          <p className="text-[#333] max-w-[350px] lg:max-w-[520px]">{text}</p>
        ))}
      </div>
      <div className="flex items-center group gap-2">
        <a className="text-[12px]" href="/">
          About us
        </a>
        <ArrowUp
          className="group-hover:translate-x-1 cursor-pointer duration-500 rotate-45 transition-all"
          size={20}
        />
      </div>
    </div>
  );
};
const RightImage = () => {
  return (
    <div className="">
      <img className="rounded-lg lg:max-w-[400px]" src="Triangle.jpg" alt="" />
    </div>
  );
};

const MiddleLeftFounded = () => {
  const LeftObject = [
    {
      title: "Founded",
      year: "2008",
    },
    {
      title: "Projects Completed",
      year: "194+",
    },
  ];
  return (
    <div className="lg:flex lg:flex-col flex flex-row gap-36 lg:gap-8">
      {LeftObject.map((item) => (
        <div className="flex flex-col">
          <p className="lg:text-[14px] text-[12px]">{item.title}</p>
          <p className="lg:text-[28px] text-[24px]">{item.year}</p>
        </div>
      ))}
    </div>
  );
};

export { Founded };
