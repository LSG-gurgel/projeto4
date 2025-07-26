//c Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

const produtos = [
  { produto: "Arroz", categoria: "Categoria 1", preco: 500.0 },
  { produto: "Cevada", categoria: "Categoria 2", preco: 20.0 },
  { produto: "Mel", categoria: "Categoria 1", preco: 10.0 },
];
function valorTotal(produtos){
    let count=0;
    produtos.forEach((element )=> {
        count += element.preco ;
    });
    return count;
}

console.log("Valor total dos produtos: ", valorTotal(produtos));