import styled from "styled-components";

export const WorkDetails = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width:991px){
    display:block;
  }
`;

export const Card = styled.div`
margin: 1.3rem;
padding: 1.5rem 0.7rem;
text-align: center;
border: 1px solid #5e5e5e;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
-o-border-radius: 5px;
`
export const Icon = styled.i`
font-size: 2.5rem;
color: #5e5e5e;
margin: 1.3rem 0;
`
export const HeaderFour = styled.h4`
color: #eb5424;
font-size: 2rem;
font-weight: 700;
margin: 1rem 0;
`

export const CardContent = styled.p`
line-height: 1.7rem;
font-size: 1.1rem;
color: #222;
margin: 1.9rem 0;
`