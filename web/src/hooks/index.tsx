import { ReactNode } from 'react'
import { CartContextProvider } from './CartContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <CartContextProvider>
      {children}
    </CartContextProvider>
  )
}