import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const navigation = [
    { title: "Accueil", path: "/" },
    { title: "Répertoire Impromptus 2022", path: "/chanter-saison-2022" },
    { title: "Répertoire Entre Amis", path: "/chanter-entre-amis" },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="drawer" data-theme="mytheme">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="w-full navbar bg-primary lg:justify-center ">
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/* <div className="flex-1 px-2 mx-2 text-white "></div> */}
            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal text-white">
                {navigation.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="text-lg ">
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className=" ">
                  <Link href="https://www.facebook.com/chanteursimpromptus">
                    <a target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current "
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Component {...pageProps} />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-white">
            {navigation.map((link, index) => (
              <li key={index}>
                <a href={link.path} className="text-lg ">
                  {link.title}
                </a>
              </li>
            ))}
            <div className="p-4">
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
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyApp;
