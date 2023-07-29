import { HeaderContainer } from "./styles";

import { NavLink } from "react-router-dom";

import logoIgnite from "../../assets/logo-ignite.svg";

import { Timer, Scroll } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/ignite-timer" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/ignite-timer/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
