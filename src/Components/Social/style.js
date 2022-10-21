import styled from "styled-components";

export const SocialSec = styled.div`
  display: flex;
  margin-top: 2rem;
  @media(max-width:991px){
    display:block;
  }
`;

export const SocialDiv = styled.div.attrs((props) => ({
  bgColor: props.bgColor,
}))`
  width: calc(100% / 3);
  min-height: 13rem;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const SocialIcon = styled.span`
  color: #5e5e5e;
  margin: 0 1rem;
  padding: 1.3rem;
  background: #fff;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
`;
