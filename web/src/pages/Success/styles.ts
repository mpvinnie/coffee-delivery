import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 0;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${props => props.theme['--yellow-dark']};
    font-size: 2rem;
    line-height: 1.3;
  }

  > span {
    font-size: 1.25rem;
    color: ${props => props.theme['--base-subtitle']};
    display: block;
    margin-bottom: 2.5rem;
    line-height: 1.3;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const LinearBorder = styled.div`
  display: flex;
  background: linear-gradient(to bottom right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1));
  border-radius: 6px 36px 6px 36px;
  padding: 1px;
`

export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  flex: 1;
  background: ${props => props.theme['--background']};
  border-radius: 6px 36px 6px 36px;
`

export const Detail = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    display: block;
    font-size: 1rem;
    line-height: 1.3;
  }

  strong {
    font-size: 1rem;
    line-height: 1.3;
  }
`