//b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
const produtos = [
  { produto: "Arroz", categoria: "Categoria 1", preco: 500.0 },
  { produto: "Cevada", categoria: "Categoria 2", preco: 20.0 },
  { produto: "Mel", categoria: "Categoria 1", preco: 10.0 },
];

function precos(produtos) {
  return produtos.map((produto) => produto.produto + produto.preco * 1.15);
}

console.log("produtos com impostos " + precos(produtos));
