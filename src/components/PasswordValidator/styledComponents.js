import styled from 'styled-components'

export const PasswordValidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #383a4e;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  background-color: #475569;
  box-shadow: 4px 4px 16px 0px #434451;
  border-radius: 8px;
  padding-bottom: 80px;
`

export const PasswordHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  color: #f8fafc;
`
export const PasswordText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  font-weight: normal;
  margin-bottom: 50px;
  margin-top: 0px;
`

export const InputText = styled.input`
  font-family: 'Roboto';
  padding: 10px 20px;
  background-color: #edeeff;
  border: none;
  border-radius: 2px;
  outline: none;
  margin-bottom: 4px;
  width: 100%;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ef4444;
  margin-top: 0px;
`
