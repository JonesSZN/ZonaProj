const Explore = () => {
  return (
    <section className="w-full bg-[#f6f1e9] flex justify-center py-24">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <TopDiv />
        <div className="lg:flex lg:flex-row flex flex-col gap-6 lg:gap-14 ">
          <LeftCards />
          <RightCards />
        </div>
      </div>
    </section>
  );
};

const RightCards = () => {
  const CardObject2 = [
    {
      image: "Plants.jpg",
      Year: "Los Angeles, CA / 2023",
      Park: "Azure Waters Apartments",
    },
    {
      image: "Building.jpg",
      Year: "New York, USA / 2023",
      Park: "Tranquil Haven Residence",
    },
  ];

  return (
    <div className="lg:flex lg:flex-col flex flex-col gap-4 lg:w-1/2  lg:gap-6 lg:justify-between ">
      {CardObject2.map((item) => (
        <div className="flex flex-col cursor-pointer overflow-hidden rounded-lg group relative  gap-4">
          <img
            className="rounded-lg object-cover hover:scale-105 duration-500 transition-all h-[240px]  lg:h-[340px]  "
            src={item.image}
            alt=""
          />
          <button className="absolute bg-[#ffffff4d] flex items-center opacity-0 gap-2 group-hover:opacity-100 group-hover:text-black  duration-500 transition-all rounded-full py-[10px] px-7 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="rounded-full w-[10px] h-[10px] bg-black"></div>
            View Project
          </button>

          <div>
            <p className="text-[12px] text-[#333]">{item.Year}</p>
            <p className="text-black font-semibold text-[18px]">{item.Park}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const LeftCards = () => {
  const CardObject1 = [
    {
      image: "Windows2.jpg",
      Year: "Dallas, USA / 2023",
      Park: "Harmony Park Residence",
    },
  ];

  return (
    <>
      {CardObject1.map((item) => (
        <div className="flex lg:w-1/2 overflow-hidden rounded-lg group cursor-pointer relative flex-col gap-4">
          <img
            className="lg:h-[800px] hover:scale-105 duration-500 transition-all rounded-lg object-cover"
            src={item.image}
            alt=""
          />
          <button className="absolute bg-[#ffffff4d] flex items-center opacity-0 gap-2 group-hover:opacity-100 group-hover:text-black duration-500 transition-all rounded-full py-[10px] px-7 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="rounded-full w-[10px] h-[10px] bg-black"></div>
            View Project
          </button>
          <div>
            <p className="text-[12px] text-[#333]">{item.Year}</p>
            <p className="text-black font-semibold text-[18px]">{item.Park}</p>
          </div>
        </div>
      ))}
    </>
  );
};
const TopDiv = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img src="black.svg" alt="" />
        <p className="text-[#333] ">EXPLORE</p>
      </div>
      <p className="text-black mb-4 font-semibold text-[36px]">Our Projects</p>
    </>
  );
};
export { Explore };
