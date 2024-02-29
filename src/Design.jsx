const Design = () => {
  const Buttons = [
    "Interior Design",
    "Architecture",
    "Landscape Design",
    "Consultation",
  ];
  return (
    <section className="w-full flex justify-center py-24">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="relative ">
          <img
            className="  object-cover rounded-md h-[378px] lg:h-auto"
            src="Pyramid.jpg"
            alt=""
          />
          <div className="flex flex-col lg:gap-32 gap-12 absolute lg:top-20 lg:left-20 top-20 left-5 ">
            <div className="flex flex-col gap-4">
              <p className="text-white text-[18px] lg:text-[32px] max-w-[650px] font-bold">
                Enhance your property's curb appeal with stunning landscape
                design
              </p>
              <p className="text-white lg:text-[16px] text-[12px] max-w-[320px]  lg:max-w-[400px] font-semibold">
                Contact us today for expert design solutions that elevate your
                interiors, enhance your landscape, and bring your vision to
                life.
              </p>
            </div>
            <div className="lg:flex lg:flex-row grid grid-cols-2 lg:w-auto w-[75%] gap-2">
              {Buttons.map((item) => (
                <button className="lg:text-[12px] text-[10px] hover hover:border-white duration-500 transition-all border border-transparent py-2 px-[22px] lg:py-[10px] lg:px-[26px] bg-[#ffffff33] rounded-full text-white">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Design };
