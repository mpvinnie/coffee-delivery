import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${props => props.theme['--base-button']};
  padding: 0.75rem;
  border-radius: 4px;
  gap: 4px;

  background: ${props => props.theme['--base-input']};

  input {
    flex: 1;
    color: ${props => props.theme['--base-text']};

    &::placeholder {
      color: ${props => props.theme['--base-label']};
      font-size: 0.875rem;
    }
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${props => props.theme['--base-label']};
  }
`