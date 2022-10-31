import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  area?: string
  optional?: boolean
}

export function Input({ area, optional = false, ...rest}: InputProps) {
  return (
    <InputContainer style={{ gridArea: area }}>
      <input {...rest} />
      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}