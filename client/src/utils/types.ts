export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  tags: string[];
  offers?: string; // Optional property
  imagePlaceholder: string;
};
