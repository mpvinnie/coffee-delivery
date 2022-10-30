import { Icon, Info, InfosContainer, InfosGroup, IntroContainer, Title } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeDeliveryImage from '../../../../assets/coffee-delivery-image.png'

export function Intro() {
  return (
    <IntroContainer>
      <InfosContainer>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        </Title>
        <InfosGroup>
          <Info>
            <Icon iconType='safe_buy'>
              <ShoppingCart size={16} weight="fill" />
            </Icon>
            Compra simples e segura
          </Info>
          <Info>
            <Icon iconType='protected_package'>
              <Package size={16} weight="fill" />
            </Icon>
            Embalagem mantém o café intacto
          </Info>
          <Info>
            <Icon iconType='fast_delivery'>
              <Timer size={16} weight="fill" />
            </Icon>
            Entrega rápida e rastreada
          </Info>
          <Info>
            <Icon iconType='hot_coffee'>
              <Coffee size={16} weight="fill" />
            </Icon>
            O café chega fresquinho até você
          </Info>
        </InfosGroup>
      </InfosContainer>
      <img src={coffeeDeliveryImage} />
    </IntroContainer>
  )
}