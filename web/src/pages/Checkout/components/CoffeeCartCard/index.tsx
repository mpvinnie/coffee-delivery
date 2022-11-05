import { Minus, Plus, Trash } from 'phosphor-react'

import {
  CoffeeAmountContainer,
  CoffeeCartCardContainer,
  DetailsContainer,
  RemoveCoffeeButton
} from './styles'

import { useCart } from '../../../../hooks/CartContext'
import { AddedCoffee } from '../../../../reducers/cart/reducer'

interface CoffeeCartCardProps {
  addedCoffee: AddedCoffee
}

export function CoffeeCartCard({ addedCoffee }: CoffeeCartCardProps) {
  const { coffee, amount } = addedCoffee
  
  const totalPrice = coffee.price * amount

  const { decreaseCoffeeAmount, increaseCoffeeAmount, removeCoffeeFromCart } = useCart()

  const totalPriceInReal = totalPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

  function handeDecreaseCoffeeAmount() {
    decreaseCoffeeAmount(coffee.id)
  }

  function handeIncreaseCoffeeAmount() {
    increaseCoffeeAmount(coffee.id)
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <img src={coffee.image_url} />
      <DetailsContainer>
        <span>{coffee.name}</span>
        <div>
          <CoffeeAmountContainer>
            <button onClick={handeDecreaseCoffeeAmount}>
              <Minus size={14} weight="bold" />
            </button>
            {amount}
            <button onClick={handeIncreaseCoffeeAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeAmountContainer>
          <RemoveCoffeeButton onClick={handleRemoveCoffeeFromCart}>
            <Trash size={16} />
            REMOVER
          </RemoveCoffeeButton>
        </div>
      </DetailsContainer>
      <span>R$ {totalPriceInReal}</span>
    </CoffeeCartCardContainer>
  )
}