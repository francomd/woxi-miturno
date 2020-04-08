import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.5rem;
`;

export const GridItem = styled.div`
  text-align: center;
  transition: all 300ms ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  &.active img {
    margin: 0;
    border: ${(props) =>
      props.disabled ? "unset" : "2px solid var(--primary)"};
  }
`;
export const Logo = styled.img`
  border-radius: 5px;
  margin: 2px;
  background: var(--white);
  box-shadow: 3px 3px 10px rgba(99, 104, 110, 0.2);
  ${GridItem}:hover &,
  ${GridItem}:active &{
    box-shadow: 2px 8px 8px -6px rgba(99,104,110,0.25), 3px 0px 12px rgba(99,104,110,0.2)
  }
`;
export const Label = styled.h6`
  font-size: 10px;
  font-weight: 300;
  line-height: 1.25;
  text-transform: uppercase;
  padding: 0.5rem 0.5rem 0;
  margin: 0;
`;
