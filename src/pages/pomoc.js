import React from "react";
import Seo from "components/Seo";
import { Link } from "gatsby";
import Container from "components/Container";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Footer from "components/Footer/Footer";

const Pomoc = () => (
  <>
    <Seo title="Pomoc | Zeszycik" />
    <Page>
      <PageContent>
        <Container>
          <h1>Pomoc</h1>

          <h2>W razie problemów z aplikacją prosimy o kontakt:</h2>

          <h2>sebagolab97@gmail.com</h2>

          <Link to="/">Powrót do strony głównej {">"}</Link>
        </Container>
      </PageContent>

      <Container>
        <Footer />
      </Container>
    </Page>
  </>
);

export default Pomoc;
