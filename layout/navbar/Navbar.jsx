import React from "react";
import Image from "next/image";
import logo from "../../public/logoWhite.png";
import facebook2 from "../../public/facebook2.png";
import Link from "next/link";
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
      <div className="navbar-end text-white flex gap-4">
        <Link href="/">
          <a target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
        </Link>
        <Link href="/">
          <a target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
