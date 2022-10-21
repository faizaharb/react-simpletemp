import React from "react";
import {
  Nav,
  Logo,
  NavList,
  FlexDiv,
  Anchor,
  ListItem,
  NavLabel,
  NavInput,
  CloseIcon,
  BarsIcon,
} from "./style.js";

export default function Navbar() {
  return (
    <>
      <Nav>
        <FlexDiv>
          <Logo>
            <h2 className="logo-text">ultra profile</h2>
          </Logo>
          <div className="links">
            <NavInput id="toggle" />
            <NavLabel htmlFor="toggle">
              <BarsIcon className="fa-solid fa-bars"></BarsIcon>
              <CloseIcon className="fa-solid fa-xmark"></CloseIcon>
            </NavLabel>
            <NavList>
              <ListItem>
                <Anchor to="/home">home</Anchor>
              </ListItem>
              <ListItem>
                <Anchor to="/work">work</Anchor>
              </ListItem>
              <ListItem>
                <Anchor to="/portfolio">portfolio</Anchor>
              </ListItem>
              <ListItem>
                <Anchor to="/resume">resume</Anchor>
              </ListItem>
              <ListItem>
                <Anchor to="/about">about</Anchor>
              </ListItem>
              <ListItem>
                <Anchor to="/contact">contact</Anchor>
              </ListItem>
            </NavList>
          </div>
        </FlexDiv>
      </Nav>
    </>
  );
}
