
import { Link, useLocation } from "react-router";
import { links } from "./links";
import { useEffect, useState } from "react";


export default function Header() {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();



    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 50);
          };
          window.addEventListener('scroll', onScroll);
          return () => {
            window.removeEventListener('scroll', onScroll);
          };
    }, []);




 return (
   <header className={`z-40 w-full h-[10dvh] fixed  ${scroll ? "bg-black-normal transition-colors delay-200" : "bg-transparent"}`} >
        <div className="w-full h-full max-w-[1440px] mx-auto flex items-center justify-between text-white-light">
           
                <div>
                    <h1 className="text-3xl font-roboto font-bold">
                        Dev Vilela
                    </h1>
                </div>

                <nav>
                    <ul className="flex gap-4 font-bold text-lg">
                        {links.map((link, index) => (
                            <li key={index} className={`hover hover:text-red-normal ${
                                location.pathname === link.url ? "text-red-normal" : ""
                            }`}>
                                <Link to={link.url}>
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