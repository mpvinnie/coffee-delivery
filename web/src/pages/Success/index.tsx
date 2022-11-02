import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon } from '../../components/Icon'
import { Detail, LinearBorder, OrderResume, SuccessContainer } from './styles'

import deliveryman from '../../assets/deliveryman.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <section>
        <LinearBorder>
          <OrderResume>
            <Detail>
              <Icon iconName='pin'>
                <MapPin size={16} weight="fill" />
              </Icon>
              <span>Entrega em <strong>Rua Dois de Agosto, 106 B</strong> Parque 10 de Novembro - Manaus, AM</span>
            </Detail>
            <Detail>
              <Icon iconName='timer'>
                <Timer size={16} weight="fill" />
              </Icon>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </Detail>
            <Detail>
              <Icon iconName='dollarSign'>
                <CurrencyDollar size={16} weight="bold" />
              </Icon>
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </Detail>
          </OrderResume>
        </LinearBorder>
        <img src={deliveryman} />
      </section>
    </SuccessContainer>
  )
}