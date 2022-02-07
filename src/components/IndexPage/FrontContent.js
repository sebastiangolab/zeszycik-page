import styled from "styled-components";

const FrontContent = styled.div`
  flex: 1;
  max-width: 734px;
  color: #fff;
  margin-top: 65px;

  h1 {
    font-size: 90px;
    line-height: 1.2em;
    font-weight: 500;
    color: #fff;
  }

  h2 {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 20px;
    line-height: 1.2em;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6em;
    max-width: 800px;
  }

  @media (max-width: 1279px) {
    h1 {
      font-size: 75px;
    }

    h2 {
      font-size: 27px;
    }
  }

  @media (max-width: 991px) {
    margin-top: 10px;
    margin-bottom: 125px;

    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 15px;
      margin-top: 10px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 575px) {
    margin-bottom: 90px;
    margin-top: 0;
  }
`;

export default FrontContent;