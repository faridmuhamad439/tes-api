const products = [
  {
    id: 1,
    name: "Kaos Oversize Basic",
    category: "Fashion",
    price: 129000,
    stock: 25
  },
  {
    id: 2,
    name: "Hoodie Premium",
    category: "Fashion",
    price: 249000,
    stock: 15
  },
  {
    id: 3,
    name: "Sneakers Casual",
    category: "Sepatu",
    price: 399000,
    stock: 10
  }
];

export default function handler(req, res) {
  res.status(200).json(products);
}