import React from "react";
import { Description, FlexDiv, HomeBTN, HomeDescription, HomePart, HomeTitle } from "./style";

export default function Home() {
  return (
    <>
      <HomePart>
        <div className="container">
          <FlexDiv>
            <HomeTitle>faiza hassan</HomeTitle>
            <Description>creative director</Description>
            <HomeDescription>
              Iam a UX Designer and a professional 
              <strong> Front-End Developer </strong> creating modern and resposive
              designs to Web and Mobile.<br/> Let us work together, Thank you.
            </HomeDescription>
            <HomeBTN>let's begin</HomeBTN>
          </FlexDiv>
        </div>
      </HomePart>
    </>
  );
}
