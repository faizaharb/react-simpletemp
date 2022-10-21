import React from "react";
import Social from "../Social/Social";
import {
  Creative,
  CreativeContent,
  CreativeHeader,
  CreativeParagraph,
  HeaderFive,
  OverLayer,
} from "./style";

export default function About() {
  return (
    <>
      <OverLayer>
        <Creative>
          <div className="container">
            <CreativeContent>
              <HeaderFive>this is me</HeaderFive>
              <CreativeHeader>creative director</CreativeHeader>
              <CreativeParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium aperiam minus perferendis odit vitae repellendus.
              </CreativeParagraph>
              <CreativeParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                dolor maxime pariatur perspiciatis.
              </CreativeParagraph>
            </CreativeContent>
          </div>
          <Social />
        </Creative>
      </OverLayer>
    </>
  );
}
