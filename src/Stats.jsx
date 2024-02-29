const Stats = () => {
  const StatsObject = [
    {
      number: "194 +",
      text1: "Project Completed",
      text2:
        "From residential developments to commercial complexes a diverse range of sectors.",
    },
    {
      number: "14",
      text1: "Years of Experience",
      text2:
        "We have been dedicated to shaping spaces that inspire, innovate, and endure.",
    },
    {
      number: "98%",
      text1: "Clients satisfaction",
      text2:
        "Our ability to consistently deliver exceptional results that exceed.",
    },
  ];
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <TopText />
        <div className="lg:flex lg:flex-row flex flex-col">
          {StatsObject.map((item) => (
            <div className="rounded-md p-8 border border-[0,0,0,0.4]">
              <h2 className="text-[46px] text-black text-semibold">
                {item.number}
              </h2>
              <p>{item.text1}</p>
              <p className="mt-4 text-[#333333]">{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TopText = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img src="Black.svg" alt="" />
        <p className="text-[14px] text-[#333]">FACTS</p>
      </div>
      <p className="text-semibold text-[36px] mb-4">Our Key Stats</p>
    </div>
  );
};

export { Stats };
