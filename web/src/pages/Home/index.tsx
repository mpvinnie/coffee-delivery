import { coffees } from '../../server/coffees'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'

import { CoffeeContainer, CoffeeList, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}