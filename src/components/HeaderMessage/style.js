import styled from "styled-components";

export const HeaderMessageContainer = styled.div`
  border-radius: ${(props) => (props.footer ? "10px" : "10px 10px 0 0")};
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 3px 3px 10px rgba(99, 104, 110, 0.2);
`;

export const Content = styled.div`
  background: var(--primary);
  padding: 1rem;
  color: var(--light);
`;

export const Footer = styled.div`
  background: var(--white);
  padding: 1rem;
  /* color: var(--dark)  */
`;

export const Header = styled.h6`
  font-size: 20px;
`;

export const Subheader = styled.h1`
  font-size: 14px;
  margin: 0;
`;

export const Description = styled.h4`
  font-size: 14px;
  margin: 0;
`;
