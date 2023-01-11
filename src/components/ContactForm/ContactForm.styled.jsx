import styled from "@emotion/styled";

export const Form = styled.form`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.mainButtonColor};
    width: 640px;
    height: 250px;
    padding: 20px;
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    font-size: 24px;
    color: ${props => props.theme.colors.titleColor};
`
export const InputWrapper = styled.div`
  display: 'flex';
    flex-direction: row;
    justify-content:space-between;
    width: 400px;
    align-items: center;
    margin: 10px;
`
export const Label = styled.label`
  font-weight: bold;
`
export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.secondBgColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(25)};
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; 
  &:hover {
    scale: 1.1;
  }
`

