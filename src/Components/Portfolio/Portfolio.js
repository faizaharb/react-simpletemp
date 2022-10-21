import React, { useEffect, useState } from "react";
import { HeaderThree } from "../Index/style";
import { Gallery, GalleryData, NavButton, NavsTabs, PortfolioDetails, PortfolioSec } from "./style";

export default function Portfolio() {
  const [type, setType] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setType(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const galleryFilter = ( itemType ) => {
    const filterdItem = GalleryData.filter( ( item ) => item.title === itemType )
    setType(filterdItem)
}

  return (
    <>
      <PortfolioSec>
        <div className="container">
          <PortfolioDetails>
            <HeaderThree>my portfolio</HeaderThree>
            <NavsTabs>
              <li>
                <NavButton onClick={() => setType(GalleryData)}>all</NavButton>
              </li>
              {collection.map((item) => (
                <li key={item}>
                  <NavButton onClick={() => galleryFilter(item)}>
                    {item}
                  </NavButton>
                </li>
              ))}
            </NavsTabs>
          </PortfolioDetails>
        </div>
        <Gallery>
          {type.map((item) => (
            <div key={item.id}>
              <img src={item.imgSRC} alt="" />
            </div>
          ))}
        </Gallery>
      </PortfolioSec>
    </>
  );
}
