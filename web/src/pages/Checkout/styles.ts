import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 0;
  gap: 2rem;
`

export const ClientInfosContainer = styled.div`
  strong {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${props => props.theme['--base-subtitle']};
    display: block;
    margin-bottom: 1rem;
  }
`

export const AddressContainerForm = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

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

export const CartContainer = styled.div`
  strong {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${props => props.theme['--base-subtitle']};
    display: block;
    margin-bottom: 1rem;
  }
`