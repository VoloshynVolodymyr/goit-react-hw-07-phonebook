import styled from "@emotion/styled";

export const CommonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; 
`

export const ContactsWrapper = styled.div`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.secondBgColor};
    width: 640px;
    padding: 20px;
    margin-top: 20px;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; 
    `

export const PhonebookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; 
    `

    