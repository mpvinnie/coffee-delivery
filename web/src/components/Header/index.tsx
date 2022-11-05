import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartLink, HeaderContainer, LocationContainer } from './styles'

import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.png'
import { useCart } from '../../hooks/CartContext'

export function Header() {
  const {totalCoffeesAddedToCart} = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} />
      </NavLink>
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