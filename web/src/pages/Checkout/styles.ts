import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 0;
  gap: 2rem;

  @media (max-width: 1088px) {
    flex-direction: column;
  }
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

export const SelectedCoffeeList = styled.div`
  strong {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${props => props.theme['--base-subtitle']};
    display: block;
    margin-bottom: 1rem;
  }
`