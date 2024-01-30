import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--blue-color-100);

  & nav {
    display: flex;
  }
`;

const HeaderLink = styled.li`
  color: var(--white-color);
  padding: 20px;
  background-color: ${(props) => (props.$active ? "#1e88e5" : "#2196f3")};
`;

const Header = () => {
  const location = useLocation();
  return (
    <HeaderEl $active>
      <nav className="container">
        <HeaderLink $active={location.pathname === "/"}>
          <Link to="/">Все котики</Link>
        </HeaderLink>
        <HeaderLink $active={location.pathname === "/favourite"}>
          <Link to="/favourite">Любимые котики</Link>
        </HeaderLink>
      </nav>
    </HeaderEl>
  );
};

export default Header;
