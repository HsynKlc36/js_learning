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

//**************************  FOREACH İLE MAP ARASINDAKİ FARK  ****************************************
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