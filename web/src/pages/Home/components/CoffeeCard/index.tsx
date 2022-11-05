import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/CartContext'
import { Coffee } from '../../../../server/coffees'

import {
  AddToCartButton,
  CoffeeAmountContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTag,
  CoffeeTagContainer
} from './styles'

interface CoffeeCardProps { 
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  const { addCoffeeToCart } = useCart()

  const { name, description, tags, image_url, price } = coffee

  const priceInReal = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

  function increaseCoffeeAmount() {
    setAmount(state => state + 1)
  }

  function decreaseCoffeeAmount() {
    if (amount <= 1) {
      return
    }

    setAmount(state => state - 1)
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart(coffee, amount)
  }

  return (
    <CoffeeCardContainer>
      <img src={image_url} />
      <CoffeeTagContainer>
        {tags.map(tag => <CoffeeTag key={tag}>{tag}</CoffeeTag>)}
      </CoffeeTagContainer>
      <strong>{name}</strong>
      <span>{description}</span>
      <CoffeeCardFooter>
        <span>{priceInReal}</span>
        <div>
          <CoffeeAmountContainer>
            <button onClick={decreaseCoffeeAmount}>
              <Minus size={14} weight="bold" />
            </button>
            {amount}
            <button onClick={increaseCoffeeAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeAmountContainer>
          <AddToCartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}