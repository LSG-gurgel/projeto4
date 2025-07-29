const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// g) Encontrar o primeiro produto da categoria "Vestuário"
console.log("\ng) Primeiro produto da categoria Vestuário:");
const primeiroVestuario = inventory.find(
  (produto) => produto.category === "Vestuário"
);
console.log(primeiroVestuario);

// h) Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
console.log("\nh) Função de busca por termo:");
function buscarPorNome(termo) {
  return inventory.filter((produto) =>
    produto.name.toLowerCase().includes(termo.toLowerCase())
  );
}

// Teste da função de busca
const resultadoBusca = buscarPorNome("fone");
console.log(`Busca por "fone":`);
resultadoBusca.forEach((produto) => {
  console.log(`- ${produto.name}`);
});

// i) Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
console.log("\ni) Produtos com média de avaliações:");
const inventoryComMedia = inventory.map((produto) => {
  const somaAvaliacoes = produto.reviews.reduce(
    (soma, avaliacao) => soma + avaliacao,
    0
  );
  const averageRating = somaAvaliacoes / produto.reviews.length;

  return {
    ...produto,
    averageRating: parseFloat(averageRating.toFixed(2)),
  };
});

inventoryComMedia.forEach((produto) => {
  console.log(
    `${produto.name} - Média: ${produto.averageRating} (${produto.reviews.length} avaliações)`
  );
});

// j) Encontrar o produto com a maior média de avaliações
console.log("\nj) Produto com maior média de avaliações:");
const produtoMelhorAvaliado = inventoryComMedia.reduce((melhor, atual) => {
  return atual.averageRating > melhor.averageRating ? atual : melhor;
});

console.log(
  `${produtoMelhorAvaliado.name} - Média: ${produtoMelhorAvaliado.averageRating}`
);
