import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${props => props.theme['--purple-light']};

  svg {
    fill: ${props => props.theme['--purple']};
  }

  span {
    color: ${props => props.theme['--purple-dark']}
  }
`

export const CartLink = styled.a`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.theme['--yellow-light']};

  display: flex;
  color: ${props => props.theme['--yellow-dark']};
`