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

    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Hanya menerima GET
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    res.status(200).json(products);
}