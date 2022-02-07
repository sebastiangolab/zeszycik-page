import styled from "styled-components";

const PageContent = styled.div`
  background-color: #e2395f;
  width: 100%;
  height: 450px;
  padding-top: 100px;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 90px;
    line-height: 1.2em;
    font-weight: 500;
    color: #fff;
  }

  h2 {
    font-size: 27px;
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 1.2em;
    font-weight: 400;
    color: #fff;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
    color: #fff;
    line-height: 1.5em;
  }

  a {
    margin-right: 78px;
    font-size: 19px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
    display: inline-block;
    margin-top: 10px;

    &:hover {
      color: #dbdbdb;
    }
  }


  @media (max-width: 1399px) {
    height: 370px;
    padding-top: 50px;

    h1 {
        font-size: 70px;
      }
  }

  @media (max-width: 1279px) {
    h1 {
        font-size: 60px;
      }
  }

  @media (max-width: 991px) {
    height: 330px;
    padding-top: 45px;

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 22px;
      margin-top: 10px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
    }

    a {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    height: 360px;
  }

  @media (max-width: 767px) {
    height: auto;
    padding-bottom: 60px;

    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 575px) {
    padding-top: 35px;

    a {
      font-size: 18px;
      line-height: 1.5em;
    }
  }
`;

export default PageContent;
