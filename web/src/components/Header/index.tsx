import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartLink, HeaderContainer, LocationContainer } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.png'
import { useCart } from '../../hooks/CartContext'

export function Header() {
  const {totalCoffeesAddedToCart} = useCart()

  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />
      <div>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Manaus, AM</span>
        </LocationContainer>

        <CartLink to='checkout'>
          <ShoppingCart size={22} weight="fill" />
          {totalCoffeesAddedToCart > 0 && <span>{totalCoffeesAddedToCart}</span>}
        </CartLink>
      </div>
    </HeaderContainer>
  )
}