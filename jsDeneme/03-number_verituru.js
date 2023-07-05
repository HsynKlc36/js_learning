//***** number*****
//number veri turu tanımlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax
console.log('fiyatı: ', price, 'KDV Orani: ', tax, ' KDV tutarı:', priceTax, 'fiyat: ', total);

let num1 = 10;
let num2 = "20";
let sum = num1 + num2;
console.log(sum);//1020 seklinde yazacaktır.string ezer number'ı!
console.log(Number(sum)+10)//1030 glecektir
let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);// string sayı değerini number olarak tutmamızı sağlar 
let stringFurkan="furkan";
console.log(Number(stringFurkan));//NaN gelir 
console.log(newNumber);
console.log("number constractor içine bilgi gönderildi: ", Number("111"));

//arttirma ve azaltma islemleri:
let counter = 320;
counter = counter + 1// uzun yontem //321
counter += 1; //322
counter++;//323
console.log(counter);//323

let num3 = 10;
let sum1 = num3++ // önce atama yapar sonra num1 i arttırır.
let sum2 = ++num1// önce arttır sonra atama yap num1 yukarıda 10 olarak tanımlanmıştır! 9.satırda
console.log(sum1)//10
console.log(sum2)//11
console.log(num3);//11
counter--;
counter -= 1;
console.log(counter);//321

counter *= 10;
console.log(counter);//3210

counter /= 2;
console.log(counter);//1605

//islem önceligi:
console.log(2 + 3 * 10);//32
console.log((2 + 3) * 10);//50

//mod(kalan) alma %:
//sayı tek mi çift mi??
console.log(17 % 2);//1

//8 urun alan koliye tum urunler sigiyor mu?
console.log('koli kalan urun ornegi: ', 82 % 8);//2

//us alma:
console.log(2 ** 4);//16

// toFixed:noktadan sonra kaç rakam olacağını belirler.
const num = 1.23494;
console.log(num.toFixed(3))//1.235

//toPrecision:toplamda kaç rakam olacağıını belirler.
console.log(num.toPrecision(4))//1.234

//trunc
console.log("trunc ", Math.trunc(1.9))//virgulden sonrayı keser atar.1 gelir

// random
console.log("random", Math.random())// 0 ile 1 arasında random sayı üretir 0'ı dahil edebilir ama 1'i almaz.

//aşağı yuvarlama islemi -> Math.floor
console.log("aşağı yuvarlama ", Math.floor(1.9))//1 gelir

//yukarı yuvarlama islemi -> Math.ceil
console.log("yukarı yuvarlama ", Math.ceil(1.2))//2

//yakına yuvarlama işlemi ->Math.round:
console.log("yakina yuvarlama: ", Math.round(1.4)) //1.4->1, 1.5->2' ye yuvarlar

let nmr100=Number(false)//0 döner
let nmr101=Number(true) //1 döner
console.log("false ve true number dönüşümleri: "+ nmr100, nmr101)//0,1