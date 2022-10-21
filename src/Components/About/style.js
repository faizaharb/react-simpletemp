import styled from "styled-components";

export const Creative = styled.section`
  height: 100%;
  background: rgb(192, 217, 238, 0.7);
  background-size: cover;
  padding-top: 4rem;
  @media (min-width: 992px) {
    background: fixed no-repeat url(../images/creative/about-bg.jpg) center;
  }
`;
  
  export const OverLayer = styled.div`
    @media (max-width: 991px) {
      background: fixed no-repeat url(../images/creative/about-bg.jpg) center;
      background-size: cover;
    }
  `;

export const CreativeContent = styled.div`
width: 50%;
margin:1.9rem 0 3rem auto;
padding-left: 3rem;
@media(max-width:991px){
  width:80%;
  margin:1.9rem auto;
  padding-left: 0;
}
`

export const HeaderFive = styled.h5`
font-size: 1.5rem;
margin: 0.5rem 0;
text-transform: capitalize;
color: #313131;
`

export const CreativeHeader = styled.h3`
text-transform: uppercase;
font-size: 1.9rem;
color: #eb5424;
font-weight: 900;
margin: 0.5rem 0;
`
export const CreativeParagraph = styled.p`
font-size: 1.7rem;
color: #222;
margin: 0.7rem 0;
`
