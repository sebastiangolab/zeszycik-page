import React from "react";
import Seo from "components/Seo"
import { Link } from "gatsby";
import Container from "components/Container";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Footer from "components/Footer/Footer";

const PolitykaPrywatnosci = () => (<>
  <Seo title="Polityka prywatności | Zeszycik" />
  <Page>
    <PageContent>
      <Container>
        <h1>Polityka prywatności</h1>

        <p>Traktujemy prywatność tak samo poważnie jak Ty, dlatego informujemy że aplikacja "Zeszycik" nie pobiera ani nie przetwarza Państwa danych osobowych.</p>

        <p>Od czasu do czasu możemy aktualizować niniejszą politykę prywatności. Jeśli masz pytania, sugestie lub inne uwagi, skontaktuj się z nami: sebagolab97@gmail.com.</p>

        <Link to="/">Powrót do strony głównej {">"}</Link>
      </Container>
    </PageContent>

    <Container>
      <Footer />
    </Container>
  </Page>
  </>
);

export default PolitykaPrywatnosci;
