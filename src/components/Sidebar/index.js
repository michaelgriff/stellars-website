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
          <SidebarLink onClick={toggle} to="/stellarspace">
            stellarspace
          </SidebarLink>
          {/* <SidebarLink onClick={toggle} to="/charity">
            charity
          </SidebarLink> */}
          <SidebarLink onClick={toggle} to="/visionboard">
            vision board
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/gallery">
            gallery
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
