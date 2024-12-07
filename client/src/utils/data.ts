type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  tags: string[];
  offers?: string | null;
  imagePlaceholder: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    stock: 15,
    description: "Comfortable wireless headphones with noise cancellation.",
    tags: ["Best Seller", "New Arrival"],
    offers: "10% Off",
    imagePlaceholder: "Picture One",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 69.99,
    rating: 4.2,
    stock: 10,
    description: "Lightweight running shoes designed for speed and comfort.",
    tags: ["Limited Stock"],
    offers: "Buy 1 Get 1 50% Off",
    imagePlaceholder: "Picture Two",
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    rating: 4.8,
    stock: 5,
    description:
      "Latest-gen smartphone with incredible battery life and display.",
    tags: ["New Arrival"],
    offers: "Flat $50 Off",
    imagePlaceholder: "Picture Three",
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 29.99,
    rating: 4.0,
    stock: 20,
    description:
      "Brew fresh coffee with this compact and easy-to-use coffee maker.",
    tags: ["Best Seller"],
    offers: "Save $5 on Purchase",
    imagePlaceholder: "Picture Four",
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Fitness",
    price: 19.99,
    rating: 4.3,
    stock: 25,
    description: "Durable yoga mat with excellent grip and cushioning.",
    tags: ["Eco-Friendly"],
    offers: null,
    imagePlaceholder: "Picture Five",
  },
];

export default products;
