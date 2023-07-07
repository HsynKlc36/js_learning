// sitring veri türü işlemleri
 // https://www.w3schools.com/jsref/jsref_obj_string.asp
 let eMail= "huseyinkilic@gmail.com";
 let firstName = 'hüseyin';
 let lastName = `kilic`;

// string karakter sayisi -> length
console.log("karakter sayısını bulma: ",eMail.length);

// Ilk Karakteri Bulmak -> [0]:
console.log(" ilk karakteri bulma: ",firstName[0])
console.log(" ilk karakteri bulma: ",firstName.charAt(0));

// son karakteri bulmak ->[firstName.length-1]
console.log(" son karakteri bulma: ",eMail[eMail.length - 1]);


// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(eMail.search("@"));// 12-> 12.indeks
console.log(firstName.search('olmayan'));//bulamazsa -1 döndürür!!
console.log(eMail[12]);// "@" karakterini verecektir.


// belli bir yere kadar al -> slice :  (domain bilgisi)
console.log(eMail.slice(13));//"gmail.com" yani 13. indexten itibaren alır. sadece gmail kismini aldik yani başlangıç indexini ve sonraki tüm karakterleri alır!!
console.log(eMail.slice(0, 13)); //"huseyinkilic@" ilk 12 index'i alır. burada başlangıç index'i ve bitiş index'ini vererek(bitiş indeksi dahil değil) en son 12. indeksi getirir yani 13 karakter getirir.

let domaın = eMail.slice(eMail.search("@")+1);//slice(13) olur. "gmail.com"
console.log(domaın);//"gmail.com"

let domaın2 = eMail.slice(0, eMail.indexOf("@")) // ilk bulduğu @ index'ini yakalar.slice(0,12) "huseyinkilic"
console.log(domaın2);//"huseyinkilic"


//indexof kullanımı:o karakterin bulunduğu ilk index'i getirir bulamazsa -1 döner.
let domaın3 = domaın.indexOf('m');
let domaın4 = domaın.indexOf('m', domaın.indexOf('m')+1)//ilk c den başlamaz 2. c ye bakacaktır yani ilk bulduğu c indexinin +1 inden başlayacaktır aramaya yani c yi 20.indexten sonra aramaya başla der.position alır.
console.log("indexof ile aradığım karakterin ilk bulunduğu yerin index'i : ", domaın3);
//domain="gmail.com"
console.log(domaın.lastIndexOf('m'))// sondan aramaya başlar 8.index'i verir 

//search ile indexof arasındaki fark
// search: Arama deseni olarak bir regular expression (regex) kullanılabilir.
// indexOf: Arama deseni olarak sadece bir dize (string) kullanılabilir.

var str = "Merhaba,dünya!";

console.log(str.search("dünya")); // 8
console.log(str.indexOf("dünya")); // 8

console.log(str.search(/Dünya/i)); // 8 (büyük/küçük harf duyarsız arama)
console.log(str.indexOf("Dünya")); // -1 (eşleşme bulunamadı)

// bilgiyi degistir -> replace,replaceAll :
eMail = eMail.replace("gmail.com", "hotmail.com")// ilk yakaladığını yapar.
eMail = eMail.replaceAll("a", "b")// tüm a ları b yapar
console.log(eMail);

// istedigim bilgi var mi ? -> includes : aradığım karakter varsa true yoksa false döner;
console.log(eMail.includes('@'));// true
console.log(eMail.includes('asdas'));//false


// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(eMail.endsWith('hotmbil.com'));//neyle bittiğini yazarız true ya da false döner
console.log(eMail.startsWith("hus"));// true ya da false döner.

//substring
const substring = eMail.substring(4, 13)// verdiği index aralığındakileri alır
console.log("substring:", substring);

//substr
const substring2 = eMail.substr(4, 13)// 4.indexten başlar 13 karakter alır
console.log("substr:", substring2);

//trim
console.log("     serdar   ortac".trim())// basındaki ve sonundaki boşlukları silecektir.


// Ilk Harflerini Buyuk Yapmak

let fullname = `${firstName[0].toUpperCase()}${firstName.slice(1)}${lastName[0].toUpperCase()}${lastName.slice(1)}`;

console.log(fullname);

//Dizi
let myArr = ['Bilge', 'Adam', 18, 20, true, false, null, NaN];

console.log(myArr);

//Index numarasına göre değer okuma

console.log(myArr[0]);
console.log(myArr[4]);

//değer değiştirme
myArr[0] = 'kartal';
console.log(myArr);

myArr[0] = 15;
console.log(myArr);

//Değer Ekleme
//En sona değer ekleme
myArr.push('merhaba');
console.log(myArr);
//en başa değer ekleme
myArr.unshift('Birinci');
console.log(myArr);

//Değer çıkartma
//En sondaki değeri diziden çıkartma
myArr.pop()// sildiği elemanı döndürür
console.log(myArr);
//en baştaki değeri diziden çıkartma
myArr.shift()// sildiği elemanı döndürür değişkene atarak tutabiliriz.
console.log(myArr);

//concat => ucuna ekleme yapar

const newMyArr = myArr.concat(["ali", "veli","furkan","resul","hüseyin"])// sonuna ekler.const yazarız değiştirilebilir diziler ve fonksiyonlar const ile yazılır.yani dizinin içeriğinde değişiklik yapabilirsin fakat diziyi komple değiştirip string ya da number bir ifadeye çevirmene izin vermez .Özet olarak const ile tanımlanmasının amacı yapısını bozmadan değişikliklere izin vermesidir.Yani diziyse dizi kalacaktır sadece değişiklik yapılabilir.
console.log(newMyArr);
//concat dizileri de birleştirir fakat newMyArr de değişiklik yapmaz yeni atama yaptığımız Array değişkeninde bunu görebiliriz.Çünkü yeni bir dizi oluşturur.
const myArr2=[1,2,3];
const myArr3=['hasan','basri',true,NaN,undefined,0];
const Array=newMyArr.concat(myArr2,myArr3);
console.log(Array);