import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../../../server/coffees'
import { AddToCartButton, CoffeeAmountContainer, CoffeeCardContainer, CoffeeCardFooter, CoffeeTag, CoffeeTagContainer } from './styles'

interface CoffeeCardProps { 
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  const { name, description, tags, image_url, price } = coffee

  // const formatPriceInReal = new Intl.NumberFormat('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // })

  // const priceInReal = formatPriceInReal.format(price)

  const priceInReal = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            {amount}
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeAmountContainer>
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}