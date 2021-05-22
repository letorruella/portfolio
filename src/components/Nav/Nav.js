import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const NavTitleStyled = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #fff;
`;

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  background: #744c9d;
  padding: 20px 30px;
  height: 120px;

  ${(props) =>
    props.light &&
    css`
      background: #ccc;

      ${NavTitleStyled} {
        color: #000;
      }
    `}
`;

const Nav = (props) => {
  return (
    <NavStyled light={props.light}>
      <NavTitleStyled>Gatsby Project + Storybook</NavTitleStyled>
    </NavStyled>
  );
};

Nav.propTypes = {
  light: PropTypes.bool,
};

export default Nav;
