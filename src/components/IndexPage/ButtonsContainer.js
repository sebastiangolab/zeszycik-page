import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 991px) {
    margin-top: 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default ButtonsContainer;