import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #f7ece1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 80vh;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`;

export const LinkSection = styled(Link)`
  color: #725ac1;
`;

export const Text = styled.p`
  font-size: 24px;
  margin: 0;
`;

export const ContainerFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-top: auto;
  color: #f7ece1;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`;

export const LinkItem = styled.a`
  text-decoration: underline;
`;

export const TextFooter = styled.p`
  margin: 0;
`;
