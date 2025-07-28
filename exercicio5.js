const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// c) Produtos eletrônicos com preço < 1000
const eletronicosAb1000 = inventory.filter(produto =>
  produto.category === "Eletrônicos" && produto.price < 1000
);
console.log("c) Produtos eletrônicos com preço < 1000:");
console.log(eletronicosAb1000);

// d) Existe algum produto sem estoque?
const ProdutoSemEstoque = inventory.some(produto => produto.stock === 0);
console.log("\nd) Há produto sem estoque?");
console.log(ProdutoSemEstoque);

// e) Todos os produtos têm pelo menos uma avaliação?
const todosTemAV = inventory.every(produto => produto.reviews.length > 0);
console.log("\ne) Todos os produtos têm ao menos uma avaliação?");
console.log(todosTemAV);

// f) Índice do produto "Cafeteira"
const ProdutoCafeteira = inventory.findIndex(produto => produto.name === "Cafeteira");
console.log("\nf) Índice do produto Cafeteira:");
console.log(ProdutoCafeteira);
