import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-center py-3 bg-[#f6f1e9]">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <Nav />
      </div>
    </header>
  );
};
const Nav = () => {
  return (
    <nav className="w-full flex justify-between font-semibold items-center">
      <NavLeft />

      <NavRight />
    </nav>
  );
};

const NavLeft = () => {
  return <img src="Logo.svg" alt="" />;
};

const NavRight = () => {
  const Array = ["About", "Projects", "Services", "Blogs", "Reviews"];
  return (
    <ul className="flex items-center  text-[12px] text-[#000] gap-14 cursor-pointer">
      {Array.map((text) => (
        <li className="hidden lg:block">{text}</li>
      ))}

      <button className="border hidden lg:block hover:bg-black duration-300 transition-all bg-transparent hover:text-white border-black rounded-full cursor-pointer py-[10px] px-[26px]">
        Get in Touch
      </button>
      <Menu className="lg:hidden" />
    </ul>
  );
};

export { Header };
