import { Cart } from './components/Cart'
import { Form } from './components/Form'
import {
  CheckoutContainer,
  ClientInfosContainer,
  SelectedCoffeeList
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientInfosContainer>
        <strong>Complete seu pedido</strong>
        <Form />
      </ClientInfosContainer>
      <SelectedCoffeeList>
        <strong>Cafés selecionados</strong>
        <Cart />
      </SelectedCoffeeList>
    </CheckoutContainer>
  )
}