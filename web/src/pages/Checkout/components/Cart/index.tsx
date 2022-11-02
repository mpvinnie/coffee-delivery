import { Minus, Plus, Trash } from 'phosphor-react'

import expressoTradicional from '../../../../assets/coffees/expresso-tradicional.png'

import {
  CartContainer,
  CoffeeAmountContainer,
  CoffeeCartCard,
  ConfirmOrderButton,
  DetailsContainer,
  RemoveCoffeeButton,
  Resume
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CoffeeCartCard>
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
      </CoffeeCartCard>
      
      <CoffeeCartCard>
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
      </CoffeeCartCard>
      <Resume>
        <p>
          <label>Total de itens</label>
          <span>R$ 29,70</span>
        </p>
        <p>
          <label>Entrega</label>
          <span>R$ 3,50</span>
        </p>
        <p>
          <label>Total</label>
          <strong>R$ 33,20</strong>
        </p>
      </Resume>
      <ConfirmOrderButton>
        CONFIRMAR PEDIDO
      </ConfirmOrderButton>
    </CartContainer>
  )
}