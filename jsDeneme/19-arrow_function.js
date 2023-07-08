//**********************************Arrow Function Kullanımı********************************:

//function declaration, hoisting calisiyor, this calismasi gerektigi gibi calisiyor
function greet() {
    console.log("Hello world!");
}

greet();

//function expression, hoisting calismaz, this calismasi gerektigi gibi calisiyor
const greetPerson = function (person1= "Huseyin" , person2, person3='behlül') {
    console.log(`Hello ${person1}!`);
    (person2) && console.log(`Hello ${person2}`);
    (person3) && console.log(`Hello ${person3}`);
}

greetPerson("Murat");
greetPerson();// default olanı yani hüseyini kabul eder
greetPerson("ali","veli");
greetPerson("ahmet","mahmut");//3. parametreyi kabul eder fakat işlemediğimiz için ekrana basmaz

//arrow function, hoisting calismaz, this calismasi gerektigi gibi CALISMAZ
const greetEveryone1 = () => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    return "Hello everyone!";
}

greetEveryone1();
const greetEveryone2 = () => "Hello js arrow func!";
const greetEveryone3=()=>{
   let msg= 'hello everyone!';
       msg += ' hello world';
       return msg;
}
console.log(greetEveryone2());
console.log(greetEveryone3());

const products = [
    "Apple", 5, true,
    "Banana", 10, true,
    "Lemon", 6, false,
    "Kiwi", 8, false,
    "Tomato", 8, true,
    "Watermelon", 5, true,
    "Mango", 20, true,
    "Pineapple", 30, false
];

const updateProduct = (productName, updatedProduct /* newProductName, newProductPrice, newProductStock */) => {
    // const productIndex = products.indexOf(productName)
    // products[productIndex] = newProductName;
    // products[productIndex + 1] = newProductPrice;
    // products[productIndex + 2] = newProductStock;

    products.splice(products.indexOf(productName), 3, ...updatedProduct);

    return products;
}

//ES6 Spread
console.log(...products);//stringe cevirir tüm elemanları öyle ekrana basar.fakat her veri türünü kendi türünde yazar fakat diziden çıkarır.Apple(string) 5(number) true(boolean) olduğu gibi kullanır fakat diziden çıkarır
console.log([...products]);//string bir dizi döner değişiklik olmaz. tüm elemanları öyle ekrana basar.
console.log(products[0], products[1], products[2], products[3]);//string olarak ekrana basar
console.log(products);//dizi olarak ekrana basar

