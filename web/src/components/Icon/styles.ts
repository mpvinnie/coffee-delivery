import styled from 'styled-components'

const ICON_COLORS = {
  cart: '--yellow-dark',
  package: '--base-text',
  timer: '--yellow',
  coffee: '--purple',
  pin: '--purple',
  dollarSign: '--yellow-dark'
} as const

export interface IconProps {
  iconName: keyof typeof ICON_COLORS
}

export const IconContainer = styled.div<IconProps>`
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme[ICON_COLORS[props.iconName]]};

  svg {
    color: ${props => props.theme['--background']};
  }
`