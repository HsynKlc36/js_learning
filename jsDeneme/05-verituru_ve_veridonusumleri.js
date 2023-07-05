// Veri Turunu Ogrenmek ve Veri Turu Donusumleri
//veri turunu ogrenmek typeof:
let prıce = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price: "+ typeof(prıce));//number
console.log("stringPrice: "+ typeof(stringPrice));//string
console.log("hasPassword: "+ typeof(hasPassword));//boolean
//NOT:"===" varsa hem türüne hem değerine bakar fakat "==" varsa sadece değere bakar
typeof ("11") === "string";//true 
typeof ("5") === 'number' // false
console.log(Number("11")===11)//true 
console.log("11"==11)//true 
console.log(typeof(11)==='number')//true

//string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11";
number1 = parseInt(number1);
console.log("number1: ", number1, typeof (number1));//number1: 11, number

let number2 = "11px";// parse ile çevirebildiği kadarını alır 11 i alır ve number'a parse eder kalan kısmı dahil etmez
 number2 = parseInt(number2);  //11
//number2=Number(number2); içerisinde hem rakam hem harf olursa number ile cast ederken NaN dönecektir!
console.log("number2: ", number2, typeof (number2));// number2 :11,number

let number3 = "11.1";
number3 = Number(number3);//number de direk çevirme yaparsak sayı rakam dışında karakter varsa direkt NaN verecektir ve dönüşüm sağlanmayacaktır.
console.log("number3: ", number3, typeof (number3));//number3: 11.1, number

let number4 = "11.4px";// parse ile çevirebildiği kadarını alır 11 i alır ve number'a parse eder
number4 = parseFloat(number4);
// number4 = Number(number4); NaN
console.log("number4: ", number4, typeof (number4));//number: 11.4 , number

//not: Number ile dönüşüm yaparken float ya da int farketmeksizin dönüşüm yapar yani 11.5 i de dönüştürür 11 de, özellikle float diye ya da ınt diye belirtmeye gerek yok fakat içinde rakam dışında karakter varsa NaN döndürür direkt.Parse da ise içinde rakam ile başlıyorsa dönüştürebildiği kadar string ifadeyi dönüştürür fakat burada string ifade içerisindeki değerin float türüne mi yoksa int 'a mı ait olduğuna karar verip parse metodunu ona göre yazmak gerekir."px11" gibi bir ifadeyi ise dönüştüremez NaN hatası verecektir.fakat "11px" de parse ederken 11 i number a donuştürür parse ile. fakat number ile buna NaN verecektir. içerisinde sadece rakamsal değerler olması gerekir number dönüşümü için!!!!!

//Number veri tipinden string'e donusturmek:
//1.YOL:
let number5 = 55;
number5=number5.toString();
console.log(number5, typeof (number5));//"55",STRİNG
//2.YOL
let number6 = 100;
number6 = String(number6);
console.log(number6, typeof (number6));//"100",string
//3.YOL
let number9 = 123 + "";
console.log("number9: ", number9, typeof(number9));//"123" string

//****** ÖNEMLİ NOTLAR********
//NOT: number/string ifadede sonuç number döner
//NOT:string/number ifadesi sonuç number döner
//Not:string/string ifadesinde sonuç number döner
console.log(100 / "2");//6-> number döner;
console.log("100" / 2);//6-> number döner;
console.log("100" / "2");//6-> number döner;

let number7 = "100" / 2;
console.log("number7: ", number7, typeof (number7));//number7: 50, number

console.log([1, 2, 3] > null)//NaN > null false döner.
let stringArr=[1,2,3].toString();
console.log(stringArr);//"1,2,3"
let numArr=Number(stringArr)
console.log(numArr)//NaN
//">" karşılaştırma operatörü olduğundan numaric coercion yapacaktır.
//[1, 2, 3] bir array olup refarans tip tutuğundan primitif değere dönüştürülerek işleme alınır
//[1, 2, 3].toString() kullanıldığında içeri ”1, 2, 3” değerini döndürür
//”1, 2, 3”> null şeklini alır
//">" karşılaştırma ifadesi olduğundan tekrar numaric coercion tetiklenir
//String ifade numbera zorlanır Number(“1, 2, 3”)
//Number("1,2,3") ifadesinin sonucu NaN olacağından
//NaN > null şeklini alır
//ve NaN kendine dahil hiç kimseye eşit olmadığından!! Sonuç = false

console.log("number" + 15 + 3)
//örneğimizin başında string bir ifade bulunduğundan diğer ögeler için de string coercion tetiklenir
//"number+ "15" + "3" şeklini alır Sonuç= "number153"

console.log(['x', 'y'] == 'x,y')
// == operatörü array için numeric coercion yapacaktır
// ['x', 'y'] dizisinin numeric coercion yapabilmesi için primitif tipe dönüştürmek gerekir.
//['x', 'y'].toString() metoduyla "x,y" döner
//Son eşitlik "x,y" == "x,y" halini alır
//Sonuç = true
