import Link from "next/link";
import { useState } from "react";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Editor", href: "/editor" },
    { text: "Sitemap", href: "/sitemap.xml" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"}>
                    <h1 className="logo">Sample Sitemap</h1>
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

const NavItem = ({ text, href, active }) => {
    return (
      <Link href={href} legacyBehavior>
        <a
          className={`nav__item ${
            active ? "active" : ""
          }`}
        >
          {text}
        </a>
      </Link>
    );
  };
  
export default Navbar;