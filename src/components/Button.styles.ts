import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background-color: ${(props) => {
    return props.theme['green-500']
  }};

  color: ${(props) => {
    return props.theme.white
  }};

  /* ${({ variant }) => {
    return css`
      background-color: ${buttonVariants[variant]};
    `
  }} */
`
