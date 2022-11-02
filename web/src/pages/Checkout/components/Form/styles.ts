import styled, { css } from 'styled-components'

interface PaymentMethodProps {
  selected: boolean
}

export const FormContainer = styled.form``

export const AddressContainerForm = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  background: ${props => props.theme['--base-card']};

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${props => props.theme['--yellow-dark']};
    }

    div {
      span {
        color: ${props => props.theme['--base-subtitle']};
        line-height: 1.3;
        display: block;

        &:last-child {
          font-size: 0.875rem;
          color: ${props => props.theme['--base-text']};
        }
      }
    }
  }
`

export const AddressInputs = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number complement complement"
    "district city uf";
  grid-template-columns: 1fr 1fr 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  padding: 2.5rem;
  background: ${props => props.theme['--base-card']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme['--purple']};
    }

    div {
      span {
        color: ${props => props.theme['--base-subtitle']};
        line-height: 1.3;
        display: block;

        &:last-child {
          font-size: 0.875rem;
          color: ${props => props.theme['--base-text']};
        }
      }
    }
  }

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 0.75rem;
  }
`

export const PaymentMethod = styled.button<PaymentMethodProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  
  
  background: ${props => props.theme['--base-button']};
  border: 1px solid ${props => props.theme['--base-button']};

  svg {
    color: ${props => props.theme['--purple']};
  }

  transition: background-color, border-color 0.2s;

  &:hover {
    background: ${props => props.theme['--base-hover']};
    border: 1px solid ${props => props.theme['--base-hover']};
  }

  ${props => props.selected && css`
    background: ${props => props.theme['--purple-light']};
    border: 1px solid ${props => props.theme['--purple']};

    &:hover {
      background: ${props => props.theme['--purple-light']};
      border: 1px solid ${props => props.theme['--purple']};
    }
  `}

  
`