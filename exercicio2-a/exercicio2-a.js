/*a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto
 */

const produtos= [
    {id: 1, nome: "Arroz", preco: 100.000, categoria: "Categoria 1"},
    {id: 2, nome: "Cevada", preco: 20.000  , categoria: "Categoria 2"},  
    {id: 3, nome: "Mel", preco: 30.000 , categoria: "Categoria 1"},
]

function StringF(produtos){
    return produtos
    .map((produto)=> produto.nome + " - "+ produto.categoria);
}

console.log(StringF(produtos));