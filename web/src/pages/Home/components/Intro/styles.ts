import styled from 'styled-components'

import introBackground from '../../../../assets/intro-background.png'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  width: 100%;
  padding: 6rem 0;

  @media (max-width: 1180px) {
    padding: 3rem 0;
  }

  @media (max-width: 640px) {
    padding: 2rem 0;
  }

  background-image: url(${introBackground});
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 30rem;
    height: fit-content;

    @media (max-width: 860px) {
      width: 15rem;
      height: fit-content;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }
`

export const  InfosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 22.5rem;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1180px) {
    height: auto;
  }
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 48px;
    line-height: 1.3;
    font-weight: 800;
    color: ${props => props.theme['--base-title']};
    margin-bottom: 1rem;

    @media (max-width: 640px) {
      line-height: 1;
    }
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['--base-subtitle']};
    display: block;
    margin-bottom: 1.5rem;
  }
`

export const InfosGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 1.25rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_COLORS = {
  safe_buy: '--yellow-dark',
  protected_package: '--base-text',
  fast_delivery: '--yellow',
  hot_coffee: '--purple'
} as const

interface IconProps {
  iconType: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme[ICON_COLORS[props.iconType]]};

  svg {
    color: ${props => props.theme['--background']};
  }
`