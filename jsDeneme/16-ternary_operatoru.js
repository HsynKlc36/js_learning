// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("kullanıcı bilginizi yaziniz")
let info = document.querySelector("#info")

//ternary kullanımı:
//koşul ? dogruysa : yanlıssa

info.innerHTML = `${userName.length}` > 0 ? userName : "kullanıcı bilginiz bulunamadı";

//NOT:
//Yazdığımız condition'nın bize direkt olarak false dönmesinin yanı sıra, aynı zamanda false dönecek diğer ifadeler şunlardır: null, NaN, 0,-0, ""(boş string) ve undefined.

//ÖRNEK
const name = 'chris';
let howCoolAmI;

// TERNARY!
howCoolAmI = (name === 'chris') ? 100 : 999;

console.log(howCoolAmI);
// show it to our user
document.getElementById('stuff').innerText =`Level ${howCoolAmI}`