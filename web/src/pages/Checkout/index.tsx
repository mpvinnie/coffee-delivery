import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/CartContext'
import { CoffeeCartCard } from './components/CoffeeCartCard'
import { Input } from './components/Input'
import {
  AddressContainerForm,
  AddressInputs,
  CartContainer,
  CheckoutContainer,
  ClientInfosContainer,
  ConfirmOrderButton,
  FormContainer,
  PaymentMethod,
  PaymentMethodContainer,
  Resume,
  SelectedCoffeeList
} from './styles'

type PaymentMethods = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('CREDIT_CARD')

  const { addedCoffees, totalPrice } = useCart()

  const totalPriceItemsInReal = totalPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

  const deliveryPrice = 3.50

  const deliveryPriceInReal = deliveryPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

  const totalOrderInReal = (totalPrice + deliveryPrice).toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })

  return (
    <CheckoutContainer>
      <ClientInfosContainer>
        <strong>Complete seu pedido</strong>
        <FormContainer>
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
          
          <PaymentMethodContainer>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </header>
            <div>
              <PaymentMethod
                type='button'
                selected={paymentMethod === 'CREDIT_CARD'}
                onClick={() => setPaymentMethod('CREDIT_CARD')}
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </PaymentMethod>

              <PaymentMethod
                type='button'
                selected={paymentMethod === 'DEBIT_CARD'}
                onClick={() => setPaymentMethod('DEBIT_CARD')}
              >
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </PaymentMethod>

              <PaymentMethod
                type='button'
                selected={paymentMethod === 'MONEY'}
                onClick={() => setPaymentMethod('MONEY')}
              >
                <Money size={16} />
                DINHEIRO
              </PaymentMethod>
            </div>
          </PaymentMethodContainer>
        </FormContainer>
      </ClientInfosContainer>
      
      <SelectedCoffeeList>
        <strong>Cafés selecionados</strong>
        <CartContainer>
          {addedCoffees.length > 0 ?
            (
              <>
                {addedCoffees.map(addedCoffee => 
                  <CoffeeCartCard key={addedCoffee.coffee.id} addedCoffee={addedCoffee} />
                )}
      
                <Resume>
                  <p>
                    <label>Total de itens</label>
                    <span>R$ {totalPriceItemsInReal}</span>
                  </p>
                  <p>
                    <label>Entrega</label>
                    <span>R$ {deliveryPriceInReal}</span>
                  </p>
                  <p>
                    <label>Total</label>
                    <strong>R$ {totalOrderInReal}</strong>
                  </p>
                </Resume>
        
                <ConfirmOrderButton to="/success">
                CONFIRMAR PEDIDO
                </ConfirmOrderButton>
              </>
            )
            : <span>Nenhum café selecionado</span>
          }
        </CartContainer>
      </SelectedCoffeeList>
    </CheckoutContainer>
  )
}