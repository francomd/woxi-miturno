import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  flex: 1 0 100%;
  padding: 0.625rem 1rem;
  color: var(--primary);
  text-align: center;
  border-radius: 5px;
  margin-bottom: 0.625rem;
  transition: box-shadow 300ms ease;
  &:last-child {
    margin: 0;
  }
  box-shadow: 3px 3px 10px rgba(99, 104, 110, 0.2);
  &:hover,
  &:active {
    box-shadow: 2px 10px 8px -8px rgba(99, 104, 110, 0.25),
      3px 0px 12px rgba(99, 104, 110, 0.2);
  }
  &.active {
    margin-top: -1px;
    margin-bottom: calc(0.625rem - 1px);
    border: 2px solid var(--primary);
  }
`;

export const Title = styled.h5`
  font-weight: 700;
  font-size: 14px;
  margin: 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  margin: 0.16rem 0 0 0;
`;
