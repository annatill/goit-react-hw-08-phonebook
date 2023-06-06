import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { SlLogin } from 'react-icons/sl';

export const Container = styled.div`
  display: flex;
  width: 230px;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled(NavLink)`
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

export const Icon = styled(MdOutlineAppRegistration)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const IconLogin = styled(SlLogin)`
  width: 20px;
  height: 15px;
  margin-right: 5px;
`;
