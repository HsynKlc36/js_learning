// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40]
console.log("items ilk hali", items)

// array içerisindeki değeri değiştirmek
items[0] = 25;
items[items.length]=33// sona eleman ekler(yeni eleman)
items[items.length - 1] = 100//son elemanı değiştirir
//array 'in ilk elemanına ekleme
items.unshift("elma")
//array 'in son eleman elemanına ekleme
items.push(50)
//array içerisinden ilk elemanı çıkarma
let firstitem = items.shift()
console.log(items)//[25, 20, 30, 40,100,50]
console.log(firstitem)//elma
//array içerisinden son elemanı çıkarma
let lastitem = items.pop()
console.log(items)//[25, 20, 30, 40,100]
console.log(lastitem)//50. sondan attığım elemanı bir değişken ile yakaladım.

//splice() metot

//splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik.Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

  
// splice() ile silme işlemi silme işlemi
var sports = ['basketball', 'football', 'tennis'];
console.log(sports); // basketball, football, tennis
sports.splice(1, 1);//1. indeksten başla ve 1 eleman sil 2.index kaç eleman silineceğini söyler!
console.log(sports); // basketball, tennis

//splice() ile ekleme işlemi
var sports = ['basketball', 'football', 'tennis'];
console.log(sports); // basketball, football, tennis
sports.splice(1, 0, 'baseball');//1. indeksten başla 0 eleman sil ve sondakini 1.indekse ekle
console.log(sports); // basketball, baseball, football, tennis