import styled from "styled-components";

const FrontImage = styled.div`
  & > div {
    max-height: 100%;
    max-width: 100%;
    max-height: 608px;

    img {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      width: auto;
    }
  }

  @media (max-width: 1279px) {
    & > div {
      max-height: 520px;
    }
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    
    & > div {
      max-height: 100%;
      max-width: 100%;

      img {
        width: 100%;
        height: auto;
        object-fit: contain !important;
      }
    }
  }
`;

export default FrontImage;
