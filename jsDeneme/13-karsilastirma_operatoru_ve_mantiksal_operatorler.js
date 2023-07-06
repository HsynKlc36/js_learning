// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "0"
let user = "hüso"

// == Eşitse -> sadece içerideki değere bakılır türüne bakılmaz '27'==27 true döner sadece değere bakar.
console.log(price == 0);//true
console.log(price == 2);//false


// === Hem değeri hem de türü eşitse
console.log(price === 0)//false;
console.log(price==='0')// true;

// != Eşit değilse
console.log(price != 0)//false 
console.log(price != 1)//true
console.log(user!="kilic")//true

// < Küçükse
console.log(price < 100) // true
console.log(price < '100') // true

let strngNmbr = '50';
// <= Küçük veya eşitse
console.log(strngNmbr <= 50)// true
console.log(strngNmbr<='70')// true
console.log(strngNmbr<=40) // false


// > Büyükse
console.log(strngNmbr > 30) // true
console.log(strngNmbr>'60') // false
console.log(strngNmbr>'aaa') // false

// >= Büyük veya eşitse
console.log(strngNmbr >= 30) // true
console.log(strngNmbr >= '50') // true
console.log(strngNmbr >= 100) // false


// && ve
console.log(price == 0 && strngNmbr > 45 && strngNmbr=== 50 && user==='haso')// false 
console.log(price == 0 && strngNmbr > 45 && strngNmbr=== '50' && user==='hüso')// true 
console.log(price == 0 && strngNmbr > 45 && strngNmbr=== '50' && user !='hüso')// false

// || veya
console.log(price == 0 || strngNmbr > 45 || strngNmbr === 50 || user === 'haso')// false 
console.log(price == 0 || strngNmbr > 45 || strngNmbr === '50' || user === 'hüso')// true 
console.log(price == 0 || strngNmbr > 45 || strngNmbr === '50' || user != 'hüso')// true

// ! degil (tersi)  bundan (!=) hiçbir farkı yoktur
console.log(!(user == 'hüso' && strngNmbr==50))//false
console.log(!user === 36)//true;
console.log(!2) // false
console.log(!!2) // true