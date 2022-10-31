import { MapPinLine } from 'phosphor-react'
import { Input } from './components/Input'
import { AddressContainerForm, AddressInputs, CartContainer, CheckoutContainer, ClientInfosContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ClientInfosContainer>
        <strong>Complete seu pedido</strong>
        <form>
          <AddressContainerForm>
            <header>
              <MapPinLine size={22} />
              <div>
                <span>Endereço de entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </header>
            <AddressInputs>
              <Input placeholder='CEP' area='cep' mask="99999-999" />
              <Input placeholder='Rua' area='street' />
              <Input placeholder='Número' area='number' type="number" min={1} />
              <Input placeholder='Complemento' area='complement' optional />
              <Input placeholder='Bairro' area='district' />
              <Input placeholder='Cidade' area='city' />
              <Input placeholder='UF' area='uf' />
            </AddressInputs>
          </AddressContainerForm>
        </form>
      </ClientInfosContainer>
      <CartContainer>
        <strong>Cafés selecionados</strong>
        <div>Lista de cafés selecionados</div>
      </CartContainer>
    </CheckoutContainer>
  )
}