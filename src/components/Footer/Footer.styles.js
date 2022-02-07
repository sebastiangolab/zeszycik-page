import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  color: #111 !important;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: ${({ isFront }) => (isFront ? "100px" : "50px")};

  a {
    color: #111;
    text-decoration: none;
  }

  @media (max-width: 991px) {
    margin-top: ${({ isFront }) => (isFront ? "80px" : "40px")};
    margin-bottom: 15px;
  }

  @media (max-width: 575px) {
    margin-top: ${({ isFront }) => (isFront ? "60px" : "35px")};
  }
`;

export const FooterContainer = styled.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const SocialLink = styled(Link)`
  color: #111;
  font-size: 23px;
  margin-right: 15px;
  margin-left: 15px;
  transition: color 0.3s;

  &:hover {
    color: #666;
  }

  @media (max-width: 991px) {
    font-size: 21px;
  }
`;
