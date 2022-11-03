import { Minus, Plus, Trash } from 'phosphor-react'

import {
  CoffeeAmountContainer,
  CoffeeCartCardContainer,
  DetailsContainer,
  RemoveCoffeeButton
} from './styles'

import expressoTradicional from '../../../../assets/coffees/expresso-tradicional.png'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <img src={expressoTradicional} />
      <DetailsContainer>
        <span>Expresso Tradicional</span>
        <div>
          <CoffeeAmountContainer>
            <button /* onClick={decreaseCoffeeAmount} */>
              <Minus size={14} weight="bold" />
            </button>
              1
            <button /* onClick={increaseCoffeeAmount} */>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeAmountContainer>
          <RemoveCoffeeButton>
            <Trash size={16} />
            REMOVER
          </RemoveCoffeeButton>
        </div>
      </DetailsContainer>
      <span>R$ 9,90</span>
    </CoffeeCartCardContainer>
  )
}