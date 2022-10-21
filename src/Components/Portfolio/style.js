import styled from "styled-components";

export const GalleryData = [
  {
    id: 1,
    title: "html",
    imgSRC: "images/Portfolio/portfolio-img1.jpg",
  },
  {
    id: 2,
    title: "mobile",
    imgSRC: "images/Portfolio/portfolio-img2.jpg",
  },
  {
    id: 3,
    title: "photoshop",
    imgSRC: "images/Portfolio/portfolio-img3.jpg",
  },
  {
    id: 4,
    title: "wordpress",
    imgSRC: "images/Portfolio/portfolio-img4.jpg",
  },
  {
    id: 5,
    title: "mobile",
    imgSRC: "images/Portfolio/portfolio-img5.jpg",
  },
  {
    id: 6,
    title: "html",
    imgSRC: "images/Portfolio/portfolio-img6.jpg",
  },
  {
    id: 7,
    title: "photoshop",
    imgSRC: "images/Portfolio/portfolio-img7.jpg",
  },
  {
    id: 8,
    title: "html",
    imgSRC: "images/Portfolio/portfolio-img8.jpg",
  },
];

export const PortfolioSec = styled.section`
  background: #eee;
  overflow: hidden;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const PortfolioDetails = styled.div`
  text-align: center;
`;

export const NavsTabs = styled.ul`
  list-style: none;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;
  
  export const NavButton = styled.button`
  font-size: 1.3rem;
  margin: 0 auto 1rem ;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #eb5424;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  > div {
    width: calc(100% / 4);
    overflow: hidden;
    @media(max-width:991px){
      width: calc(100% / 2);
    }
    > img {
      width: 100%;
      &:hover{
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
    }
  }
`;
