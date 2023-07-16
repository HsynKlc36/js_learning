// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//Array Map
//Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz.Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz.Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur.Bu kısım önemlidir.

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toLowerCase())
const NEW_USERS2 = USERS.map((user,index,arr) => {
    arr[index]=user.toUpperCase()//burada doğrudan USERS dizisi üzerinde değişiklik yapmış oluruz!
    return user.toLowerCase()})// map ile item'ları dönerken değişiklik yapabiliriz ve bu değişikliği return ile yeni oluşan diziye atarız!çünkü map bize yeni bir dizi döndürür!
console.log(NEW_USERS)//['ayse','mehmet','tugce','aksel']
console.log(NEW_USERS2)//['ayse','mehmet','tugce','aksel']
console.log(USERS)//["AYSE", "MehMet", "TugCE", "AkSEL"]

const numbers=[2,3,5,7,11,4,6]
const newNumbers=numbers.map((number,index,array)=> number*2
    //number=number*2;
    //array[index]=number*2;// bu şekilde foreach ve filter daki gibi ana diziyi değiştirir yani numbers dizisini.
)
const newNumbers2=numbers.map((number,index,array)=> {
     array[index]=number*2;// bu şekilde foreach ve filter daki gibi ana diziyi değiştirir yani numbers dizisini.
     return number*2
     //number=number*2;
})

console.log(newNumbers)//[4,6,10,14,22,8,12]
console.log(newNumbers2)//[4,6,10,14,22,8,12]
console.log(numbers)//[4,6,10,14,22,8,12]

// const USERS_OBJ = USERS.map( item =>
//   { //buradaki süslü parantez bir return döneceğini belirtiren içerideki ise bir nesne obje döndüreceğini ifade eder
//     return {
//       userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   } 
// )

const USERS_OBJ = USERS.map(item => ( 
    { userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }//users bir diziyken bu şekilde işleyerek users'ı nesneye çevirip yeni bir dizi oluşturuyorum!
))
const USERS_OB = USERS.map((item,index,array) => {
    array[index]=item.toLowerCase();
    return ( { userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` })//users bir diziyken bu şekilde işleyerek users'ı nesneye çevirip yeni bir dizi oluşturuyorum!  
})

console.log(USERS)
console.log(USERS_OBJ)
console.log(USERS_OB)

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((e) => {
    if (e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log(yeniMaaslar);
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]