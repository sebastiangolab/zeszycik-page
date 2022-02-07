import styled from "styled-components";

const FrontLinksContainer = styled.div`
  display: flex;
  margin-top: 22px;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export default FrontLinksContainer;