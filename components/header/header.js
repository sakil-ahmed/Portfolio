import React, { useEffect, useState } from "react";
import StyledHeader from "./styleHeader";
import Container from "./../container/container";
import Link from "next/link";
import LogoIcon from "./../icons/logo";
import MobileMenu from "./mobileMenu";
import { useRouter } from "next/router";

const Header = () => {
  /* A hook that allows you to use state in a functional component. */
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState();

  /**
   * It toggles the value of the variable toggle.
   */
  const HandleToggle = () => setToggle((prev) => !prev);

  /**
   * When the component mounts, add an event listener to the window that calls the handleScroll function
   * when the window is scrolled.
   */
  const handleScroll = () => {
    setScroll(window.scrollY >= 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <StyledHeader className={scroll ? "header__fixed" : ""} id="header">
      <Container>
        <div className="row">
          <div className="header_logo">
            <Link href="/">
              <LogoIcon />
            </Link>
          </div>
          {/* Header Content */}
          <div className="header_content">
            {/* Header Mobile Menu Bar */}

            <MobileMenu toggle={toggle} HandleToggle={HandleToggle} />
            {/* Header Nav Menu */}
            <nav className={toggle ? "nav_menu open_mobile_menu" : "nav_menu"}>
              <ul className="nav_menu_items">
                <li className="nav_menu_item">
                  <Link href="#">Home</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#">About</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#skills">Skills</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
