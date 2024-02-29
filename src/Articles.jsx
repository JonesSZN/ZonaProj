const Articles = () => {
  const ArticleObject = [
    {
      image: "kitchen1.jpg",
      tag: "Innovation",
      text: "Designing for wellness how interior design impacts mental and emotion health",
      read: "5 min read",
      date: "Feb 14,2024",
    },
    {
      image: "livingroom.jpg",
      tag: "Interiors",
      text: "The beauty of minimalism simplifying your space for a calm, clutter-free home",
      read: "6 min read",
      date: "Feb 14,2024",
    },
    {
      image: "office.jpg",
      tag: "Creativity",
      text: "From concept to completion navigating the architectural design process for your dream home",
      read: "8 min read",
      date: "Feb 14,2024",
    },
  ];
  return (
    <section className="w-full flex justify-center py-24">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <Top />
        <div className="lg:flex lg:flex-row flex flex-col gap-6">
          {ArticleObject.map((item) => (
            <div className=" h-full rounded-md group  cursor-pointer lg:w-1/2 border border-[0,0,0,0.5]">
              <div className="relative  overflow-hidden  ">
                <img
                  className=" w-full group-hover:scale-105 duration-500  rounded-t-md h-[220px] object-cover"
                  src={item.image}
                  alt=""
                />
                <button className="absolute py-2 px-3 text-[12px] font-semibold bg-white rounded-md cursor-pointer top-3 right-3">
                  {item.tag}
                </button>
              </div>

              <div className="p-6 flex flex-col h-1/2 gap-8  lg:gap-40">
                <p className="text-[22px]  text-[#000] ">{item.text}</p>
                <div className="flex justify-between text-[12px] cursor-pointer text-[#333333] items-center">
                  <p>{item.read}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Top = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <img src="black.svg" alt="" />
        <p className="text-[14px] text-[#333]">NEWS</p>
      </div>
      <p className="text-[34px] text-black font-semibold">Latest Articles</p>
    </div>
  );
};

export { Articles };
