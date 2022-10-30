import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DeafultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DeafultLayoutContainer>
      <Header />
      <Outlet />
    </DeafultLayoutContainer>
  )
}