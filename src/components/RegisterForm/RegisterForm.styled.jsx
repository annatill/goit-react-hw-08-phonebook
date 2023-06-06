import styled from '@emotion/styled';

export const Form = styled.form`
background-color: #242038;
padding: 30px;
border-radius: 5px;
height: 350px;

& label {
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 20px;
font-size: 16px;
}

& input {
margin-top: 10px;
height: 25px;
width: 320px;
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
  margin-top: 40px;
  &:hover,
  &:focus {
    background-color: #4b3d7d;
    outline: none;
  }
}
`;
