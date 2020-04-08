import styled from "styled-components";

export const DrawerStyle = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &.opened {
    transform: none;
    nav {
      transform: none;
      opacity: 1;
      transition-delay: 300ms;
    }
  }

  nav {
    display: block;
    flex-flow: column wrap;
    transform: translateX(-30%);
    opacity: 0;
    color: #fff;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0;
    contain: content;
    height: 100%;
    background-color: #6b40e0;
    box-sizing: border-box;
    padding: 24px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    a {
      text-decoration: none;
      color: #ffffff80;
      display: block;
      padding: 16px 0;

      &:hover {
        color: #69f0ae;
      }
    }

    & > * + * {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;
