import logo from "../img/LogoSm_Opacity.png";

export const Header = () => {
  return (
    <div className="p-1 border-s w-full rounded-bl rounded-br shadow">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 relative">
        <div className="flex-1 flex justify-between items-center mix-blend-screen">
          <a href="#" className="text-4xl text-cyan-400 font-extrabold">
            <img src={logo} alt="logo" />
          </a>
        </div>

        {/* checkbox musi być przed label, żeby peer-checked działał */}
        <input className="peer hidden" type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer z-20">
          <svg
            className="fill-current text-cyan-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div
          className="
            hidden peer-checked:flex md:flex
            flex-col md:flex-row
            w-full md:w-auto
            absolute md:relative
            top-full md:top-auto
            left-0 md:left-auto
            bg-none md:bg-transparent
            z-10
            md:items-center
          "
        >
          <nav className="w-full">
            <ul className="flex flex-col md:flex-row items-center justify-between text-base text-cyan-600 pt-4 md:pt-0 gap-3 md:gap-0 pb-4 md:pb-0">
              <li className="w-full md:w-auto px-4 md:px-0">
                <div className="-skew-x-12 rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
                  <a
                    href="#"
                    className="block text-center rounded-md bg-[#122130] text-cyan-500 px-2 py-2 md:p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                  >
                    Cennik
                  </a>
                </div>
              </li>
              <li className="w-full md:w-auto px-4 md:px-0">
                <div className="-skew-x-12 md:ml-3 rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
                  <a
                    href="#"
                    className="block text-center rounded-md bg-[#122130] text-white px-2 py-2 md:p-4"
                  >
                    Galeria
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
