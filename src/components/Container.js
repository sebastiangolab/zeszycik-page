import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 1240px;
  position: relative;
  padding: 0 20px;

  @media (max-width: 575px) {
    width: calc(100% - 20px);
    padding: 0 10px;
  }
`;

export default Container;
