import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "gatsby";
import {
  Wrapper,
  FooterContainer,
  SocialsContainer,
  SocialLink,
} from "./Footer.styles";

const Footer = ({ isFront = false }) => (
  <Wrapper isFront={isFront}>
    <FooterContainer>
      <p>
        Autor: <Link to="https://sebastiangolab.pl/">Sebastian Gołąb</Link>
      </p>

      <SocialsContainer>
        <SocialLink to="https://github.com/sebastiangolab?tab=repositories">
          <FaGithubAlt />
        </SocialLink>

        <SocialLink to="https://www.linkedin.com/in/sebastian-go%C5%82%C4%85b/">
          <FaLinkedinIn />
        </SocialLink>

        <SocialLink to="https://www.facebook.com/golomp1997/">
          <FaFacebookF />
        </SocialLink>
      </SocialsContainer>
    </FooterContainer>
  </Wrapper>
);

export default Footer;
