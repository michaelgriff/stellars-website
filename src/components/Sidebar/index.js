import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarImage,
} from "./SidebarElements";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} smooth={true} offset={-80}>
            who are we
          </SidebarLink>
          {/* <SidebarLink onClick={toggle} to="/charity">
            charity
          </SidebarLink> */}
          <SidebarLink
            to="stellarspace"
            onClick={toggle}
            smooth={true}
            offset={-80}
          >
            stellarspace
          </SidebarLink>
          <SidebarLink
            to="collection"
            onClick={toggle}
            smooth={true}
            offset={-80}
          >
            collection
          </SidebarLink>
          <SidebarLink
            to="visionboard"
            onClick={toggle}
            smooth={true}
            offset={-80}
          >
            visionboard
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle} smooth={true} offset={-80}>
            team
          </SidebarLink>
          <SidebarLink to="faq" onClick={toggle} smooth={true} offset={-80}>
            faq
          </SidebarLink>
          <SidebarLink to="collabs" onClick={toggle} smooth={true} offset={-80}>
            collabs
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarImage href="https://twitter.com/ledgersnft">
            <FaTwitter size={30} />
          </SidebarImage>
          <SidebarImage href="https://instragram.com/ledgersnft">
            <FaInstagram size={30} />
          </SidebarImage>
          <SidebarImage href="https://discord.gg/ledgersnft">
            <FaDiscord size={30} />
          </SidebarImage>
        </SideBtnWrap>
        {/* <SideBtnWrap>
          <SidebarRoute href="https://mintledgersnft.xyz">MINT</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
