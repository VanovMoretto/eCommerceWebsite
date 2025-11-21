import blusaImg from '../assets/Models/Feminino/blusa.png';
import cachecolImg from '../assets/Models/Feminino/cachecol.png';
import calcaImg from '../assets/Models/Feminino/calça.png';
import camisaImg from '../assets/Models/Feminino/camisa.png';
import camisetaImg from '../assets/Models/Feminino/camiseta.png';
import macacaoImg from '../assets/Models/Feminino/macacao.png';
import saiaImg from '../assets/Models/Feminino/saia.png';
import shortsImg from '../assets/Models/Feminino/shorts.png';
import vestidoImg from '../assets/Models/Feminino/vestido.png';

import botasImg from '../assets/Models/Calcado/botas.png';
import saltoImg from '../assets/Models/Calcado/salto.png';
import tamancoImg from '../assets/Models/Calcado/tamanco.png';
import tenisImg from '../assets/Models/Calcado/tenis.png';

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: 'feminino' | 'calcados' | 'acessorios'
  subcategory: string
  color: string
  size: string
  description: string
}

export const products: Product[] = [
  // Feminino
  {
    id: 'blusa-1',
    name: 'Blusa',
    price: 89.90,
    image: blusaImg,
    category: 'feminino',
    subcategory: 'blusas',
    color: 'Branca',
    size: 'M',
    description: 'Blusa elegante e confortável, perfeita para o dia a dia. Confeccionada em tecido de alta qualidade que proporciona maciez e durabilidade.',
  },
  {
    id: 'cachecol-1',
    name: 'Cachecol',
    price: 59.90,
    image: cachecolImg,
    category: 'feminino',
    subcategory: 'cachecois',
    color: 'Bege',
    size: 'M',
    description: 'Cachecol macio e versátil, ideal para compor looks sofisticados. Material de qualidade que garante conforto térmico.',
  },
  {
    id: 'calca-1',
    name: 'Calça',
    price: 129.90,
    image: calcaImg,
    category: 'feminino',
    subcategory: 'calcas',
    color: 'Azul',
    size: 'M',
    description: 'Calça de modelagem moderna e confortável. Tecido de alta qualidade que oferece caimento perfeito e durabilidade.',
  },
  {
    id: 'camisa-1',
    name: 'Camisa',
    price: 99.90,
    image: camisaImg,
    category: 'feminino',
    subcategory: 'camisas',
    color: 'Branca',
    size: 'M',
    description: 'Camisa clássica e elegante, versátil para diversas ocasiões. Tecido de algodão premium que garante conforto durante todo o dia.',
  },
  {
    id: 'camiseta-1',
    name: 'Camiseta',
    price: 69.90,
    image: camisetaImg,
    category: 'feminino',
    subcategory: 'camisetas',
    color: 'Rosa',
    size: 'M',
    description: 'Camiseta básica essencial para o guarda-roupa. Tecido macio e respirável que proporciona conforto máximo.',
  },
  {
    id: 'macacao-1',
    name: 'Macacão',
    price: 179.90,
    image: macacaoImg,
    category: 'feminino',
    subcategory: 'macacoes',
    color: 'Azul',
    size: 'M',
    description: 'Macacão elegante e moderno, perfeito para ocasiões especiais. Design sofisticado com tecido de alta qualidade.',
  },
  {
    id: 'saia-1',
    name: 'Saia',
    price: 109.90,
    image: saiaImg,
    category: 'feminino',
    subcategory: 'saias',
    color: 'Preta',
    size: 'M',
    description: 'Saia versátil e elegante, ideal para compor diversos looks. Tecido fluido que proporciona movimento e conforto.',
  },
  {
    id: 'shorts-1',
    name: 'Shorts',
    price: 79.90,
    image: shortsImg,
    category: 'feminino',
    subcategory: 'shorts',
    color: 'Azul',
    size: 'M',
    description: 'Shorts confortável e moderno, perfeito para o verão. Tecido leve e respirável que garante frescor.',
  },
  {
    id: 'vestido-1',
    name: 'Vestido',
    price: 159.90,
    image: vestidoImg,
    category: 'feminino',
    subcategory: 'vestidos',
    color: 'Vermelho',
    size: 'M',
    description: 'Vestido elegante e sofisticado, ideal para ocasiões especiais. Design exclusivo com tecido premium que garante caimento perfeito.',
  },
  // Calçados
  {
    id: 'botas-1',
    name: 'Botas',
    price: 199.90,
    image: botasImg,
    category: 'calcados',
    subcategory: 'botas',
    color: 'Marrom',
    size: '36',
    description: 'Botas elegantes e confortáveis, perfeitas para diversas ocasiões. Material de alta qualidade que garante durabilidade e estilo.',
  },
  {
    id: 'salto-1',
    name: 'Salto Alto',
    price: 149.90,
    image: saltoImg,
    category: 'calcados',
    subcategory: 'salto-alto',
    color: 'Nude',
    size: '36',
    description: 'Salto alto sofisticado e elegante, ideal para eventos especiais. Design moderno com acabamento impecável.',
  },
  {
    id: 'tamanco-1',
    name: 'Tamanco',
    price: 129.90,
    image: tamancoImg,
    category: 'calcados',
    subcategory: 'tamancos',
    color: 'Bege',
    size: '36',
    description: 'Tamanco confortável e estiloso, perfeito para o dia a dia. Material de qualidade que proporciona conforto durante todo o uso.',
  },
  {
    id: 'tenis-1',
    name: 'Tênis',
    price: 169.90,
    image: tenisImg,
    category: 'calcados',
    subcategory: 'tenis',
    color: 'Branco',
    size: '36',
    description: 'Tênis moderno e confortável, ideal para o dia a dia. Design contemporâneo com tecnologia de conforto.',
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getProductsBySubcategory = (category: string, subcategory: string): Product[] => {
  return products.filter(
    product => product.category === category && product.subcategory === subcategory
  )
}