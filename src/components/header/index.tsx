import { Link, useLocation } from "react-router";
import { links } from "./links";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu responsivo
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`z-40 w-full h-[10dvh] fixed ${
        scroll ? "bg-black-normal transition-colors delay-200" : "bg-transparent"
      }`}
    >
      <div className="w-full h-full max-w-[1440px] mx-auto flex items-center justify-between text-white-light px-4">
        <div>
          <Link to="/">
              <h1 className="text-3xl font-roboto font-bold">Dev Vilela</h1>
          </Link>
        </div>
       
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 font-bold text-lg">
            {links.map((link, index) => (
              <li
                key={index}
                className={`hover hover:text-red-normal ${
                  location.pathname === link.url ? "text-red-normal" : ""
                }`}
              >
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-menuResponsivo text-white-light flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-4xl focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className={`hover:text-red-normal ${
                    location.pathname === link.url ? "text-red-normal" : ""
                  }`}
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
