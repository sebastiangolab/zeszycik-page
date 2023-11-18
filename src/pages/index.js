import React from "react";
import Seo from "components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import Container from "components/Container";
import Page from "components/Page";
import Row from "components/Row";
import AppBlock from "components/IndexPage/AppBlock";
import Background from "components/IndexPage/Background";
import BlocksSection from "components/IndexPage/BlocksSection";
import BlocksTitle from "components/IndexPage/BlocksTitle";
import ButtonsContainer from "components/IndexPage/ButtonsContainer";
import FrontContent from "components/IndexPage/FrontContent";
import FrontImage from "components/IndexPage/FrontImage";
import FrontLinksContainer from "components/IndexPage/FrontLinksContainer";
import FrontStyledLink from "components/IndexPage/FrontStyledLink";
import Footer from "components/Footer/Footer";

const IndexPage = () => (
  <>
    <Seo title="Zapisuj długi swoich znajomych | Zeszycik" />
    <Page>
      <Background />

      <Container>
        <Row>
          <FrontImage>
            <StaticImage
              src="../images/app-image@2x.png"
              alt="zeszycik"
              placeholder="none"
              width={413}
              height={608}
            />
          </FrontImage>

          <FrontContent>
            <h1>Zeszycik</h1>

            <h2>Zapisuj długi swoich znajomych </h2>

            <p>
              Za pomocą aplikacji możesz w bardzo prosty i szybki sposób
              spisywać i edytować należności swoich znajomych.
            </p>

            <FrontLinksContainer>
              <FrontStyledLink to="/pomoc">Pomoc {">"}</FrontStyledLink>
              <FrontStyledLink to="/polityka-prywatnosci">
                Polityka prywatności {">"}
              </FrontStyledLink>
            </FrontLinksContainer>
          </FrontContent>
        </Row>

        <BlocksSection>
          <BlocksTitle>Pobierz za darmo</BlocksTitle>

          <ButtonsContainer>
            <AppBlock to="https://apps.apple.com/us/app/zeszycik/id1602686223">
              <StaticImage
                src="../images/appstore-button@2x.png"
                alt="app store"
                placeholder="none"
                width={380}
                height={134}
              />
            </AppBlock>

            <AppBlock to="https://play.google.com/store/apps/details?id=com.sebagolab.Zeszycik">
              <StaticImage
                src="../images/googleplay-button@2x.png"
                alt="google play"
                placeholder="none"
                width={380}
                height={134}
              />
            </AppBlock>
          </ButtonsContainer>
        </BlocksSection>

        <Footer isFront={true} />
      </Container>
    </Page>
  </>
);

export default IndexPage;
