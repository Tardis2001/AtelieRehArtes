import { createDirectus, rest } from '@directus/sdk';

export interface Produtos {
  id: number;
  nome: string;
  category: string;
  description: string;
  price: string;
  image: string; 
}

export interface Sobre {
  title: string;
  bioParagraph1: string;
  bioParagraph2: string;
  foto_perfil: string;
}
export interface Global {
   title: string;
   description: string; 
}
export interface Hero {
   title: string;
   subtitle: string; 
}

interface Schema {
  Produtos: Produtos[];
  Sobre: Sobre;
  Global: Global;
  Hero: Hero;
}
const DIRECTUS_URL = import.meta.env.PUBLIC_DIRECTUS_URL;

export const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());