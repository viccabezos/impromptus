import React from "react";
import Image from "next/image";
import logo from "../../public/logoWhite.png";

function Navbar() {
  const navigation = [
    { title: "Acceuil", path: "/" },
    { title: "Introduction", path: "/buillon" },
    { title: "Chanter", path: "/chanter" },
    { title: "QA", path: "/" },
  ];

  return (
    <div
      data-theme="mytheme"
      className="w-full navbar bg-primary sticky top-0 z-50"
    >
      <div className="">
        <div className="dropdown">
          <label
            tabindex="0"
            className="btn btn-ghost lg:hidden text-white mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* phone navbar */}
          <ul
            tabindex="0"
            className="menu mt-2 dropdown-content shadow bg-primary w-96 text-white "
          >
            {navigation.map((link, idx) => (
              <li key={link.idx} className="hover-bordered hover-text-bold">
                <a href={link.path}>{link.title} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-5 items-center flex">
          <Image src={logo} alt="logo" width={100} height={30} />
        </div>
      </div>
      {/* full screen navBar */}
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal">
          {navigation.map((link, idx) => (
            <li key={link.idx}>
              <a href={link.path}>{link.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
