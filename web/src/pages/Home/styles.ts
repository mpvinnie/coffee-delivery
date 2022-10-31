import styled from 'styled-components'

export const HomeContainer = styled.div`
`
export const CoffeeContainer = styled.main`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${props => props.theme['--base-subtitle']};
    margin-bottom: 3.5rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
`