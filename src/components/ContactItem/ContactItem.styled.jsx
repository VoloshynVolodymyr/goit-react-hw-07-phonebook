import styled from "@emotion/styled";

export const Item = styled.li`
   display: flex;
    justify-content: space-between;
    align-items: center;
    width: 420px;
    margin-right: 0; 
    &:not(:last-child) {
    margin-bottom: 10px;}
`

export const Phone = styled.span`
    margin-right: 10px;
    font-weight: bold;
`
  
export const Button = styled.button`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.mainButtonColor};
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
  
