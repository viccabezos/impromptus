import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logoWhite.png";

function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { title: "Acceuil", path: "/" },
    { title: "Introduction", path: "/buillon" },
    { title: "Chanter", path: "/chanter" },
    { title: "QA", path: "/" },
  ];
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-700`;
  return (
    <header data-theme="mytheme">
      <nav className="items-center bg-primary py-5 px-4 mx-auto sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <Image src={logo} alt="logo" width={100} height={30} />
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="dropdown order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0 duration-700 ">
            {navigation.map((item, idx) => (
              <li className="text-white hover:font-bold" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar2;
