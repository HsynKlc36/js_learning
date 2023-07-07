// ** Ilk Fonksiyonumuzu Tanimlamak ****

function hello() {
    console.log("hello");
    helloWord();
}

function helloWord() {
    console.log("hello word");
}

let info=document.getElementById('info');
let userName='js öğreniyorum';
let age=19;
function userCheck() {
   if (userName && age >=18) {
       info.innerHTML = "ehliyet alabilirsiniz"
   } else if (!userName) {
       info.innerHTML = "kullanıcı adınız yok"
   } else if (!(age >= 18)) {
       info.innerHTML = "yas bilginiz yok veya 18 yaşından kucuksunuz";
   }
}
hello();//calıstır 
userCheck();//çalıştır

//Callback Fonksiyonlar ve Asenkron Çalışma

/*Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez.Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur.Uzun zaman alan veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir.JavaScript asenkron yapıdaki bir programlama dilidir.Bunu anlamak için içinde setTimeout(parameter1, parameter2) fonksiyonunu kullanacağız.Bu fonksiyon gördüğünüz gibi iki parametre ile kullanılacak: ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor.Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.*/

function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2() {
    setTimeout(function () {
        console.log("İkinci ekran çıktısı")
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

//İlk ekran çıktısı
//Üçüncü ekran çıktısı
//İkinci ekran çıktısı

/*Bunun sebebi asenkron çalışma yapısıdır.printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır.Bu durumdan kurtulmak için callback kullanıyoruz denebilir.Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır.Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur.Örneğin yukarıda verilen kodumuzun sırasıyla birinci, ikinci ve üçüncü çıktıları vermesini istiyoruz.*/

function printScreen4() {
    console.log("İlk ekran çıktısı");
}

function printScreen5(callback1, callback2) {
  
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();  
}

function printScreen6() {
    console.log("Üçüncü ekran çıktısı");
}


printScreen5(printScreen4, printScreen6);

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


//*********************Callback function Kullanımı********************:


const concatWords = (words) => {
    let result = "";
    for (let index = 0; index < words.length; index++) {
        result += `${words[index]} `;
    }
    return result;
}
console.log(concatWords(["Lorem", "ipsum", "sit", "amet", "non", "elit"]));

const studentList = ["Murat", "Kamil", "Aysenur", "Ozlem", "Zeynep", "Hazel"];
//callback function yazarken parametresini ayrıca belirtip function içerisinde işlem yapabilirsiniz.
const greetAll = (callbackFunction, names) => {
    const greetResult = "Hello " + callbackFunction(names);
    console.log(greetResult);
}
greetAll(concatWords, studentList);

// greetAll(
//     (words) => {
//         let result = "";
//         for (let index = 0; index < words.length; index++) {
//             result += `\n${index+1} - ${words[index]}`;
//         }
//         return result;
//     }, 
//     ["Murat", "Osman", "Aysenur", "Ozlem", "Zeynep", "Hazel"]
// )

const customForEach = (diziAlır, fonksiyonAlır) => {
    for (let i = 0; i < diziAlır.length; i++) {
        // const element = arr[index];
        fonksiyonAlır(diziAlır[i], i)
        //{
        //(word,index)=>!(index % 2) && console.log(`${index} - ${word}`) yukarıdaki fonksiyon çalışdığında buradaki kod yani husonunFonksiyonu çalışacaktır.Çünkü 193. satırda fonksiyonAlır parametresine denk gelen fonksiyon odur!.Aynı şekilde 180. satırdaki console.log() fonksiyonu kullanıldığında fonksiyonAlır console.log() fonsiyonu olacaktır ve ona göre çalışacaktır.
        //{
    }
}
customForEach(studentList, console.log);

customForEach(studentList, (word, index) => {
    // if(index % 2 === 0){
    //     console.log(`${index} - ${word}`)
    // }
    // if(!(index % 2)){
    //     console.log(`${index} - ${word}`)
    // }
    !(index % 2) && console.log(`${index} - ${word}`)
})

const husonunFonksiyonu=(word,index)=>!(index % 2) && console.log(`${index} - ${word}`)
customForEach(studentList,husonunFonksiyonu);

//yukarıdaki gibi customForEach(studentList,callbackfunc) aslında funksiyonun burada olduğu gibi başka bir yerde tanımlanan fonksiyonu kullanabileceğimiz gibi direkt fonksiyonu burada da tanımlayabiliriz.

//**************************  FOREACH İLE MAP ARASINDAKİ FARK  ****************************************/
//forEach fonksiyonu, dizinin her bir elemanı üzerinde belirtilen bir işlemi gerçekleştirir. Bu işlem, genellikle bir fonksiyonun çağrılması şeklinde ifade edilir ve elemanın değerine veya dizinin indeksine erişim sağlar. forEach fonksiyonu, döngü işlemlerini gerçekleştirirken yeni bir dizi döndürmez. Sadece her eleman için belirtilen işlemi gerçekleştirir ve işlem sonucunu kaydetmez.
//map fonksiyonu ise, dizinin her bir elemanı üzerinde belirtilen bir işlemi gerçekleştirir ve işlem sonucunu yeni bir dizi olarak döndürür. Yani, map fonksiyonu, orijinal diziyi değiştirmeden her eleman için belirtilen işlem sonucunda oluşan yeni bir dizi döndürür.
//map fonksiyonu, return ifadesiyle bir elemandan sonra işlemi sonlandırmaz. Tam tersine, orijinal dizinin tüm elemanlarını döngüleyerek her birine belirtilen işlemi uygular ve bu işlem sonucunda oluşan değerleri yeni diziye ekler. Bu nedenle, map fonksiyonu tüm elemanlar üzerinde çalışır ve yeni bir dizi döndürür.
const dizi = [1, 2, 3, 4, 5];

const yeniDizi=[];
const newArray=dizi.map(function(eleman) {
    return eleman*eleman; //return ile sonlandırmaz dizinin elemanını yeni bir diziye atar ve sonraki eleman için işlemlerine devam eder.Kısacası buradaki return döngüden çıkmak için kullanılmaz!
});
console.log(newArray);

customForEach(studentList,(word, index) => !(index % 2) && console.log(`${index} - ${word}`));


const customMap = (arr, callbackFunc) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const result = callbackFunc(arr[index],index)
        newArr.push(result)
    }
    return newArr;
}

console.log(
    customMap(studentList, (student,index) => {
        return `Student: ${student}, ${index+1} Instructor: Orkun Durmaz, Course: Frontend Dev`
    })
);

const productList = ["Sofa", "Chair", "Table", "Rug", "Bed", "TV"];

const customerList = ["Murat", "Kamil", "Aysenur", "Ozlem", "Zeynep", "Hazel"];

const matchProductWithCustomer = (customer, index) => `${customer}: ${productList[index]}`;
const result2 = customMap(customerList, matchProductWithCustomer);
console.log(result2);
// const result1 = customMap(customerList, (customer) => `${customer}: ${productList[index]}`);
// console.log(result1); Çalışmaz!!!!
console.log(`Student: "Ikbal",\nInstructor: Orkun Durmaz,\nCourse: Frontend Dev`);