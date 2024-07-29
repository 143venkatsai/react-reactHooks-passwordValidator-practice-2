import {useState} from 'react'

import {
  PasswordValidContainer,
  PasswordContainer,
  PasswordHeading,
  PasswordText,
  InputText,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)
  console.log(passwordInput)

  return (
    <PasswordValidContainer>
      <PasswordContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordText>
          Check how strong and secure is your password
        </PasswordText>
        <InputText
          type="password"
          value={passwordInput}
          onChange={onChangePassword}
        />
        {passwordInput.length <= 7 ? (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        ) : (
          ''
        )}
      </PasswordContainer>
    </PasswordValidContainer>
  )
}

export default PasswordValidator
