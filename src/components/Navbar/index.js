import Navbar_Links from "./data";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bofa-logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [NavbarPosition, setNavbarPosition] = useState(0);
  const [is_NavFixed, setNavFixed] = useState("notFixed");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setNavbarPosition(currentPosition);
      if (NavbarPosition > 120) {
        setNavFixed("navFixed");
      } else {
        setNavFixed("notfixed");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="h-32 ">
      <header className={`navbar transition-all animate__bounceInDown ${is_NavFixed}`}>
        <div className="logo">
          <img src={logo} alt="bofa-logo" />
        </div>
        <div className="flex gap-4">
          <nav>
            <ul className="nav_links flex gap-6 transition-colors">
              {Navbar_Links.map((item) => {
                const { id, name, path } = item;
                return (
                  <li className='hover:text-white'  key={id}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="cart mr-4">
            <span> Cart </span>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
