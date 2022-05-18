import React from "react";
import Image from "next/image";
import logo from "../../public/logoWhite.png";
import Link from "next/link";
import packagejson from "../../package.json";
function Footer() {
  return (
    <footer
      data-theme="mytheme"
      className="footer footer-center bg-primary text-white p-5"
    >
      <div className="">
        <Image src={logo} alt="logo" width={200} height={50} />
        <p className="font-bold ">Les chanteurs impromptus d'Hossegor 2021</p>
        <p></p>
        <p>Copyright © 2022 - All rights reserved- {packagejson.author}</p>
        <p>Version {packagejson.version}</p>
      </div>

      <Link href="https://www.facebook.com/chanteursimpromptus">
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
    </footer>
  );
}

export default Footer;
