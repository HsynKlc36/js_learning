//*******Boolean Veri Turu ile Calısmak*********

//0 ve 1'i Anlamak
let isActive = false;
isActive = true;
console.log(isActive);//true

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);//false

Boolean("11");//true
Boolean("0"); //true
Boolean("");//false empty
//içinde bilgi varsa true yoksa false
userName = "user";

console.log("user Name: ", Boolean(userName));// user Name:True

//0,-0,null,false,Nan,undefined,("")->false döner;
Boolean(0); // false
Boolean(-0); // false
Boolean(-0.1);//true
Boolean(0 === 0);//true
Boolean(userName.length > 0);//true
const b5 = Boolean('false');//true
const c4 = Boolean(false);//false
const c1 = Boolean(undefined);//false
const c2 = Boolean(null);//false
const c5 = Boolean(NaN);//false

//*** TRUE GELEN DEĞERLER****
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function () { }) // true

console.log(true + false)//1
//"+" operatörü numeric işlem yapar bu durumlardan boolean ifadeler numaric coercion'a uğrar.
//Number(true) + Number(false) dönüşen ifade
//1 + 0 şeklini alır Sonuç = 1