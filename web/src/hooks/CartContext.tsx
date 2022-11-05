import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction, decreaseAmountAddedCoffeeAction,
  increaseAmountAddedCoffeeAction, removeCoffeeFromCartAction
} from '../reducers/cart/actions'
import { AddedCoffee, cartReducer } from '../reducers/cart/reducer'
import { Coffee } from '../server/coffees'

interface CartContextType {
  addedCoffees: AddedCoffee[]
  totalCoffeesAddedToCart: number
  totalPrice: number
  addCoffeeToCart: (coffee: Coffee, amount: number) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  increaseCoffeeAmount: (coffeeId: string) => void
  decreaseCoffeeAmount: (coffeeId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    addedCoffees: [],
    totalCoffeesAddedToCart: 0,
    totalPrice: 0
  }, () => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      addedCoffees: [],
      totalCoffeesAddedToCart: 0,
      totalPrice: 0
    }
  })
  
  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const { addedCoffees, totalCoffeesAddedToCart, totalPrice } = cartState

  function addCoffeeToCart(coffee: Coffee, amount: number) {
    dispatch(addCoffeeToCartAction(coffee, amount))
  }

  function removeCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function increaseCoffeeAmount(coffeeId: string) {
    dispatch(increaseAmountAddedCoffeeAction(coffeeId))
  }

  function decreaseCoffeeAmount(coffeeId: string) {
    dispatch(decreaseAmountAddedCoffeeAction(coffeeId))
  }

  return (
    <CartContext.Provider value={{
      addedCoffees,
      totalCoffeesAddedToCart,
      totalPrice,
      addCoffeeToCart,
      removeCoffeeFromCart,
      increaseCoffeeAmount,
      decreaseCoffeeAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)

  return context
}