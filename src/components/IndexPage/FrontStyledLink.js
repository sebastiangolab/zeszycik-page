import styled from "styled-components";
import { Link } from "gatsby";

const FrontStyledLink = styled(Link)`
  margin-right: 78px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #dbdbdb;
  }

  @media (max-width: 767px) {
    margin-right: 65px;
  }

  @media (max-width: 575px) {
    margin-bottom: 22px;
    margin-right: 0;
  }
`;

export default FrontStyledLink;