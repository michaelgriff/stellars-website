import React from "react";
import { FaBars, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavImage,
} from "./NavbarElements";
import logo from "../../images/stellars-logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              claidss="stellars-logo"
              src={logo}
              alt={"logo"}
              height={20}
              width={167.7}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="about">
                who are we
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="stellarspace">
                stellarspace
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/charity">charity</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="collection">
                collection
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="visionboard">
                vision board
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="team">
                team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="faq">
                faq
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="collabs">
                collabs
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavImage href="https://twitter.com/ledgersnft">
              <FaTwitter size={22} />
            </NavImage>
            <NavImage href="https://www.instagram.com/ledgersnft">
              <FaInstagram size={22} />
            </NavImage>
            <NavImage href="https://discord.gg/ledgersnft">
              <FaDiscord size={22} />
            </NavImage>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
