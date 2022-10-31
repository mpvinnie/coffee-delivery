type CoffeeTag = 'TRADICIONAL' | 'GELADO' | 'COM LEITE' | 'ALCÓLICO' | 'ESPECIAL'

import arabe from '../assets/coffees/arabe.png'
import cafeComLeite from '../assets/coffees/cafe-com-leite.png'
import capuccino from '../assets/coffees/capuccino.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import expressoAmericano from '../assets/coffees/expresso-americano.png'
import expressoCremoso from '../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../assets/coffees/expresso-gelado.png'
import expressoTradicional from '../assets/coffees/expresso-tradicional.png'
import havaiano from '../assets/coffees/havaiano.png'
import irlandes from '../assets/coffees/irlandes.png'
import latte from '../assets/coffees/latte.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'

export interface Coffee {
  id: string
  name: string
  description: string
  tags: CoffeeTag[]
  image_url: string,
  price: number
}

export const coffees: Coffee[] = [
  {
    id: 'a92acdce-1b41-477f-8ad1-249d80ebfd4a',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    image_url: expressoTradicional,
    price: 9.90
  },
  {
    id: 'f8443775-76ce-4898-a4b8-3adb44eaeaa5',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    image_url: expressoAmericano,
    price: 9.90
  },
  {
    id: 'e3198f48-adee-4e1b-aa54-4629dc0be3e4',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    image_url: expressoCremoso,
    price: 9.90
  },
  {
    id: '07f4b9a0-1455-4681-a705-e4ec06e076cc',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    image_url: expressoGelado,
    price: 9.90
  },
  {
    id: '1ff00275-202b-41aa-8e92-469881362c4a',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image_url: cafeComLeite,
    price: 9.90
  },
  {
    id: '5080a1ee-feeb-4349-95cd-c049c40ba3f1',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image_url: latte,
    price: 9.90
  },
  {
    id: 'c6185948-ef5f-458c-9ebb-40816450d1dd',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image_url: capuccino,
    price: 9.90
  },
  {
    id: '96ab6ef4-e1f1-4b51-8b2e-87b960088f16',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image_url: macchiato,
    price: 9.90
  },
  {
    id: '1aee94f4-2f25-4c08-bca0-30263709028b',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image_url: mocaccino,
    price: 9.90
  },
  {
    id: '7ebd3d13-3e37-4993-a090-29c1d08a609d',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    image_url: chocolateQuente,
    price: 9.90
  },
  {
    id: 'd21a0faf-3d28-4a62-9e22-4cd97e6c4ae4',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL','ALCÓLICO', 'GELADO'],
    image_url: cubano,
    price: 9.90
  },
  {
    id: 'b41a14ca-dfbe-49fa-bb7e-23822513d7b4',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    image_url: havaiano,
    price: 9.90
  },
  {
    id: 'd9bd6cbe-fd96-4c1f-9842-d6211237fbf0',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    image_url: arabe,
    price: 9.90
  },
  {
    id: '2996156c-3402-40ef-8f04-1b18122e5f7c',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque inlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCÓLICO'],
    image_url: irlandes,
    price: 9.90
  }
]