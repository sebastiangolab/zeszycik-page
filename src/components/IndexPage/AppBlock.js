import styled from "styled-components";
import { Link } from "gatsby";

const AppBlock = styled(Link)`
  margin-left: 55px;
  margin-right: 55px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.75;
  }

  & > div {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 1279px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (max-width: 991px) {
    &:first-child {
      margin-left: 0;
      margin-right: 30px;
    }

    &:last-child {
      margin-right: 0;
      margin-left: 30px;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;

    &:first-child {
      margin: 0;
      margin-bottom: 30px;
    }

    &:last-child {
      margin: 0;
    }
  }
`;

export default AppBlock;