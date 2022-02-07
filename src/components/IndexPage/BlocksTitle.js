import styled from "styled-components";

const BlocksTitle = styled.h2`
  font-size: 25px;
  font-weight: 400;
  color: #111;
  line-height: 1em;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  border-radius: 6px;

  @media (max-width: 991px) {
    height: 56px;
    font-size: 22px;
  }
`;

export default BlocksTitle;