import { Mail } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { X } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center pt-12 lg:pt-16 bg-[#000000]">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <TopFooter />
        <MiddleFooter />
      </div>
      <BottomFooter />
    </footer>
  );
};

const TopFooter = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:justify-between">
      <TopLeft />
      <TopRight />
    </div>
  );
};
const TopLeft = () => {
  return (
    <div className="lg:mb-0 mb-12">
      <img className="cursor-pointer" src="logowhite.svg" alt="" />
      <p className="text-[12px] mt-4 text-[#d9d9d9]">© 2024 Zona.</p>
    </div>
  );
};

const TopRight = () => {
  const Array1 = [
    "Interior Design",
    "Architecture",
    "Landscape Design",
    "Consultation",
  ];
  const Array2 = [
    "About us",
    "Projects",
    "Services",
    "Blogs",
    "FAQ",
    "Contact us",
  ];
  const Array3 = ["Privacy Policy", "Terms & Conditions", "License"];
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2 gap-y-8 mb-4 lg:mb-0 gap-x-12 lg:gap-36">
      <div>
        <h2 className="text-[#d9d9d9] mb-2">What We Do</h2>
        {Array1.map((item) => (
          <div>
            <p className="text-[#999999] hover:text-white duration-300 transition-all cursor-pointer pb-[2px]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[#d9d9d9] mb-2">Pages</h2>
        {Array2.map((item) => (
          <div>
            <p className="text-[#999999] hover:text-white duration-300 transition-all  cursor-pointer pb-[2px]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[#d9d9d9] mb-2">Resources</h2>
        {Array3.map((item) => (
          <div>
            <p className="text-[#999999] hover:text-white duration-200 transition-all   cursor-pointer pb-[2px]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MiddleFooter = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-16 lg:gap-48  mt-16 mb-14 lg:mb-24">
      <div className=" lg:flex lg:flex-row grid grid-cols-2 gap-8">
        <MidLeft />
      </div>
      <MidRight />
    </div>
  );
};
const BottomFooter = () => {
  return (
    <div className="w-full border-t border-t-[#999] py-4 lg:py-6 flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <div className="flex justify-between items-center">
          <p className="text-[#999] text-[12px]">
            Designed by Nixar. Powered by Webflow.
          </p>
          <SocialsFooter />
        </div>
      </div>
    </div>
  );
};

const MidLeft = () => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 items-center">
          <img src="coffee.svg" alt="" />
          <p className="text-white text-[14px]">Office</p>
        </div>
        <p className="text-[#999999] text-[14px] max-w-[200px]">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 items-center">
          <img src="coffee.svg" alt="" />
          <p className="text-white text-[14px]">Email</p>
        </div>
        <p className="text-[#999999] text-[14px]">info@example.io</p>
      </div>
      <div className="flex flex-col gap-2 lg:ml-8 ">
        <div className="flex gap-2 items-center">
          <img src="coffee.svg" alt="" />
          <p className="text-white text-[14px]">Phone</p>
        </div>
        <p className="text-[#999999] text-[14px]">+(378) 555-0108</p>
      </div>
    </>
  );
};
const MidRight = () => {
  return (
    <div className="flex flex-col">
      <p className="text-white">Subscribe for morme updates!</p>
      <p className="text-white text-[14px]">
        Stay updated with our latest design insights by entering your email
        below.
      </p>
      <div className="flex justify-between w-full border-b border-b-[#999] mt-4 items-center">
        <div className="flex gap-2 items-center  w-full">
          <Mail color="#999" size={20} />
          <input
            className=" bg-transparent  outline-none py-2 text-[#999]"
            type="text"
            placeholder="Enter your email here..."
          />
        </div>
        <ArrowUp className="rotate-45 cursor-pointer" size={20} color="#999" />
      </div>
    </div>
  );
};

const SocialsFooter = () => {
  const SocialArray = [
    <X size={20} color="white" />,
    <Facebook size={20} color="white" />,
    <Youtube size={20} color="white" />,
    <Instagram size={20} color="white" />,
  ];
  return (
    <div className="flex gap-4 cursor-pointer items-center">
      {SocialArray.map((item) => (
        <p className="hover:translate-x-1 duration-500  transition-all">
          {item}
        </p>
      ))}
    </div>
  );
};
export { Footer };
