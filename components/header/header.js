import React, { useState } from "react";
import StyledHeader from "./styleHeader";
import Container from "./../container/container";
import Link from "next/link";
import LogoIcon from "./../icons/logo";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => setToggle((prev) => !prev);
  return (
    <StyledHeader>
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
                  <Link href="#">Service</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#">Portfolio</Link>
                </li>
                <li className="nav_menu_item">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* Header Social Links */}
            <nav>
              <ul className="social_links">
                <li className="link">
                  <Link href="#">
                    <FiFacebook />
                  </Link>
                </li>
                <li className="link">
                  <Link href="#">
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li className="link">
                  <Link href="#">
                    <AiOutlineBehance />
                  </Link>
                </li>
                <li className="link">
                  <Link href="#">
                    <AiFillInstagram />
                  </Link>
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
