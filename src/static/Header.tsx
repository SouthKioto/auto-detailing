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
                  <a href="#" className="md:p-4 py-3 px-0 block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="md:p-4 py-3 px-0 block">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#" className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
