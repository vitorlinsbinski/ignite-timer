import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme["gray-100"]};

      // o border-top foi adicionado para que o deslocamento do border-bottom para cima se anule e fique no mesmo lugar original
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s;

      &:hover {
        border-bottom-color: ${(props) => props.theme["green-500"]};
      }

      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;
