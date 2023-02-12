import React, { useEffect, useRef } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText></SectionText>
      <Button href="/assets/Renfro_Christopher_Resume.pdf">
        <a
          download
          href="/assets/Renfro_Christopher_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          Resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
