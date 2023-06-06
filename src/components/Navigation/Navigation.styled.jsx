import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineContactPhone } from 'react-icons/md';

export const NavItem = styled(NavLink)`
  margin-right: 20px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;

  &.active {
    border-bottom: #f7ece1 1px solid;
    box-shadow: 0px 6px 5px -5px rgba(255, 255, 255, 0.47);
  }
  &:hover,
  &:focus {
    background-color: #2e284a;
  }
  &:nth-of-type(2) {
    margin-right: 0;
  }
`;

export const Icon = styled(MdOutlineContactPhone)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
