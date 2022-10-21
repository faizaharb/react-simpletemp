import styled from "styled-components";

export const HomePart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeTitle = styled.h2`
  margin: 0.9rem 0 0 0;
  color: #5e5e5e;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 3.3rem;
`;

export const Description = styled.h4`
  text-transform: capitalize;
  color: #eb5424;
  font-size: 1.9rem;
  font-weight: 700;
  margin: 0.9rem 0;
`;
export const HomeDescription = styled.p`
  font-size: 1.3rem;
  width: 80%;
  text-align: center;
  color: #222;
  line-height: 1.9rem;
  letter-spacing: 1.1px;
`;
export const HomeBTN = styled.button`
margin: 1.3rem 0;
padding: 0.7rem 1.3rem;
font-size: 1.3rem;
font-weight: 800;
text-transform: capitalize;
background: #fff;
box-shadow: 0 0 0.3rem 0.3rem #aaa;
color: #eb5424;
border: 1px solid #aaa;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
-o-border-radius: 5px;
cursor: pointer;
&: hover{
  color: #fff;
  border: 1px solid #eb5424;
  background: #eb5424;
`;
