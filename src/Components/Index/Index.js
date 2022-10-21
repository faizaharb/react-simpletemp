import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Work from "../Work/Work";
import { HomeSec, Section } from "./style";

export default function Index() {
  return (
    <>
      <HomeSec>
        <Home />
      </HomeSec>
      <Section>
        <Work />
      </Section>
      <Section>
        <Portfolio />
      </Section>
      <Section>
        <Resume />
      </Section>
      <Section>
        <About />
      </Section>
      <Contact />
      
    </>
  );
}
