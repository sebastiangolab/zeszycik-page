import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export default Row;
