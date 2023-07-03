const array = [{ nome: 'Banana', preco: 10.00 },
{ nome: 'Maça', preco: 8.00 },
{ nome: 'Uva', preco: 12.00 },
{ nome: 'Manga', preco: 6.00 }]


function maiorEmenor() {
  let fruitmaior = 0
  let fruitmenor = 0
  array.forEach(fruit => {
    if(fruit > fruitmaior)
    fruitmaior = fruit.price
    console.log(fruitmaior);
    if(fruit < fruitmenor)
    fruitmenor = fruit.price
    console.log(fruitmenor);
  });
}