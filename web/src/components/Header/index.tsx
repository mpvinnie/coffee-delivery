import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartLink, HeaderContainer, LocationContainer } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />
      <div>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Manaus, AM</span>
        </LocationContainer>

        <CartLink href='#'>
          <ShoppingCart size={22} weight="fill" />
        </CartLink>
      </div>
    </HeaderContainer>
  )
}