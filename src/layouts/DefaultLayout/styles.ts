import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem 2rem;
  padding: 2.5rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: calc(100vh - 20rem);
  }

  @media (max-width: 568px) {
    height: 70vh;
    margin: 5rem 1rem;
  }

  @media (max-width: 420px) {
    padding: 1.5rem;
  }
`;
