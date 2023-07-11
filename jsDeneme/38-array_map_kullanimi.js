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
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
//   { //buradaki süslü parantez bir return döneceğini belirtiren içerideki ise bir nesne obje döndüreceğini ifade eder
//     return {
//       userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   } 
// )

const USERS_OBJ = USERS.map(item => (
    { userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
)
)

console.log(USERS_OBJ)

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((e) => {
    if (e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log(yeniMaaslar);
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]