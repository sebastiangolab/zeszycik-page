import styled from "styled-components";

const Background = styled.div`
  background-color: #e2395f;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 991px) {
    height: 350px;
  }

  @media (max-width: 575px) {
    height: 375px;
  }

  @media (max-width: 379px) {
    height: 400px;
  }

  @media (max-width: 366px) {
    height: 430px;
  }
`;

export default Background;