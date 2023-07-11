// Array forEach Metotu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

//JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

//forEach fonksiyonu (item, index, array) olmak üzere 3 parametre alabilir.Buradaki array var olan foreach ile dönülen dizidir.

//    arr.forEach(function (value, index, array) {
//        // index ve array kullanmak opsiyoneldir
//    }

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
PRODUCTS.forEach((product, index) => console.log(`${product} ${index}`))
PRODUCTS.forEach(product => console.log(`${product.toUpperCase()}`))
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)

console.log(PRODUCTS)//["LAPTOP", "PHONE", "SPEAKER", "DESKTOP PC", "SERVER", "MOUSE", "KEYBOARD"]

const userlistDOM = document.querySelector('#userList')
PRODUCTS.forEach((item,index,arr) => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = `${item} - ${index}`
   arr[index]=`${item.toLowerCase()}`
    userlistDOM.append(liDOM)
})
console.log(PRODUCTS);//["laptop", "phone", "speaker", "desktop pc", "server", "mouse", "keyboard"]


const numbers = [4,11,2,6,9,13];
const newArray = [];

numbers.forEach( item=> {
    !(item%2) && newArray.push(item/2);
    (item%2) && newArray.push(item*3);
});
console.log(newArray);//[2,33,1,3,27,39]



