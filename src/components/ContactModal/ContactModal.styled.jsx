import styled from '@emotion/styled';
import { BsCheck2All } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  padding: 20px;
  background-color: #242038;
  border-radius: 5px;
`;

export const Form = styled.form`
& label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 16px;
  color: #f7ece1;
}

& input {
margin-top: 10px;
height: 25px;
width: 280px;
padding: 5px 10px;
border-radius: 5px;
border: none;
background-color: #2e284a;
color: #f7ece1;

&: focus,
&: hover,
&: active {
outline: #382f5b solid 1px;
}
}


& button {
  display: inline-block;
  height: 30px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid #292441;
  background-color: #382f5b;
  font-size: 14px;
  font-weight: 500;
  color: #f7ece1;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 20px;
  &:hover,
  &:focus {
    background-color: #4b3d7d;
    outline: none;
  }
}
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpdateIcon = styled(BsCheck2All)`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

export const CancelIcon = styled(MdOutlineCancel)`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
