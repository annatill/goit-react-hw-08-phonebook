import styled from '@emotion/styled';
import { RxAvatar } from 'react-icons/rx';
import { SlLogout } from 'react-icons/sl';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
`;

export const Title = styled.p`
  margin-right: 10px;
  margin: 0;
`;

export const Icon = styled(RxAvatar)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #2e284a;
  color: #f7ece1;
  margin-left: 20px;
  font-size: 16px;
  width: 140px;

  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #2e284a;
    border-bottom: #f7ece1 1px solid;
    box-shadow: 0px 6px 5px -5px rgba(255, 255, 255, 0.47);
  }
`;

export const IconLogout = styled(SlLogout)`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
