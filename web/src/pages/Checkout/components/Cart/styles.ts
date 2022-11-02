import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 0.5rem 2.5rem 2.5rem;
  background: ${props => props.theme['--base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const CoffeeCartCard = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${props => props.theme['--base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  & > span {
    flex: 1;
    text-align: right;
    font-weight: bold;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${props => props.theme['--base-subtitle']};
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeeAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  height: 2.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  color: ${props => props.theme['--base-title']};
  background: ${props => props.theme['--base-button']};
  font-size: 1rem;

  button {
    color: ${props => props.theme['--purple']};

    &:hover {
      color: ${props => props.theme['--purple-dark']};
    }
  }
`

export const RemoveCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  font-size: 0.75rem;

  padding: 0.5rem;
  background: ${props => props.theme['--base-button']};

  svg {
    color: ${props => props.theme['--purple']};
  }
`

export const Resume = styled.div`
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p:last-child label, p:last-child strong {
    color: ${props => props.theme['--base-subtitle']};
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
  }

  label {
    font-size: 0.875rem;
  }

  span, strong {
    font-size: 1rem;
    float: right;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme['--yellow']};
  border-radius: 6px;

  color: ${props => props.theme['--white']};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: bold;
`