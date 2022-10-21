import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  text-transform: capitalize;
  padding: 1rem;
  position: relative;
  border-bottom: 1px solid #222;
  z-index: 999;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    display: block;
    padding-left:3.7rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const NavLabel = styled.label`
  position: absolute;
  top: 1.7rem;
  right: 7rem;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const BarsIcon = styled.i`
  font-size: 1.5rem;
  display: block;
`;
export const NavInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 2rem;
  right: 13rem;
  visibility: hidden;
  &:checked ~ ${NavLabel}>.fa-bars {
    display: none;
  }
  &:checked ~ ${NavLabel}>.fa-xmark {
    display: block;
  }
  &:checked ~ ${NavList} {
    display: block;
    @media (max-width: 991px) {
      text-align:center;
    }
  }

  @media (min-width: 992px) {
    visibility: hidden;
  }
`;

export const CloseIcon = styled.i`
  display: none;
  font-size: 1.5rem;
`;

export const NavIcon = styled.i`
  cursor: pointer;
`;

export const ListItem = styled.li`
  margin: 0 0.7rem;
  font-size: 1.3rem;
  font-weight: bold;
  @media (max-width: 991px) {
    margin-top: 0.9rem;
  }
`;

export const Anchor = styled(Link)`
  color: #222;
  &:hover {
    color: #eb5424;
  }
  &.active {
    color: #eb5424;
  }
`;
