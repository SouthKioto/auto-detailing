import logo from "../img/LogoSm_Opacity.png";

export const Header = () => {
  return (
    <>
      <div className="p-4 border-s w-full rounded-bl rounded-br shadow">
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4">
          <div className="flex-1 flex justify-between items-center mix-blend-screen">
            <a href="#" className="text-4xl text-gray-400 font-extrabold">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <label className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-gray-600 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden md:flex md:items-center md:w-auto w-full">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
                <li>
                  <div className="-skew-x-12 rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
                    <a
                      href="#"
                      className="block rounded-md bg-[#122130] text-white px-2 py-2 md:p-4"
                    >
                      Cennik
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
