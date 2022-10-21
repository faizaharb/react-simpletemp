import React from "react";
import { FlexDiv } from "../Navbar/style";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import { SecView } from "./style";

export default function Resume() {
  return (
    <>
      <SecView>
        <div className="container">
          <FlexDiv>
            <Profile />
            <Skills />
          </FlexDiv>
        </div>
      </SecView>
    </>
  );
}
