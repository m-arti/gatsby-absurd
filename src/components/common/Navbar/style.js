import styled from 'styled-components';

import {
  Container
} from '@components/global';

export const Nav = styled.nav `
  padding: 15px 0;
  /* background-color: ${props => props.theme.color.navbar}; */
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(4px);

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  filter: drop-shadow(1px 1px 20px rgb(100, 100, 100, 0.1));
`;

export const StyledContainer = styled(Container)
`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div `
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
flex - direction: column;
margin - top: 1 em;

>
$ {
  NavItem
} {
  margin: 0;
  margin - top: 0.75 em;
}
`};
  }
`;

export const NavItem = styled.li `
  margin: 0 1em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.5;
    color: ${props => props.theme.color.black.regular};
    font-weight: 400;
    transition: 0.5s;
  }

  &:hover {
    a {
      opacity: 0.25;
      color: ${props => props.theme.color.black.light};
    }
  }

  &.active {
    a {
      opacity: 1;
      color: ${props => props.theme.color.black.active};
      font-weight: 400;
    }
  }
`;

export const MobileMenu = styled.div `
  width: 100%;
  background: ${props => props.theme.color.primary};
`;

export const Brand = styled.div `
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
`;

export const Mobile = styled.div `
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
