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
    image: '/src/assets/Models/Feminino/blusa.png',
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
    image: '/src/assets/Models/Feminino/cachecol.png',
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
    image: '/src/assets/Models/Feminino/calça.png',
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
    image: '/src/assets/Models/Feminino/camisa.png',
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
    image: '/src/assets/Models/Feminino/camiseta.png',
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
    image: '/src/assets/Models/Feminino/macacao.png',
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
    image: '/src/assets/Models/Feminino/saia.png',
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
    image: '/src/assets/Models/Feminino/shorts.png',
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
    image: '/src/assets/Models/Feminino/vestido.png',
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
    image: '/src/assets/Models/Calcado/botas.png',
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
    image: '/src/assets/Models/Calcado/salto.png',
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
    image: '/src/assets/Models/Calcado/tamanco.png',
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
    image: '/src/assets/Models/Calcado/tenis.png',
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
