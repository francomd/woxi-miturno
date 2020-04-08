import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
`;

export const Link = styled.div`
  padding: 0 0.5rem;
  &:last-child {
    color: var(--primary);
  }
`;

export const Slash = styled.div`
  color: var(--darken);
`;

export const Back = styled.div`
  color: var(--darken);
  margin-right: 1rem;
  &:before {
    content: "←";
    padding-right: 0.5rem;
  }
`;
