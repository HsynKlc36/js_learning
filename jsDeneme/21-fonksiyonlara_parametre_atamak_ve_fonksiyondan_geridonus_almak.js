// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "lorem";

function greetings(firstName="",lastName="") {//default parametre alıyor
    /*console.log(`merhaba ${firstName ? firstName : ""}`)*/
  /*  console.log(`merhaba ${firstName}`)*/
    console.log(`merhaba ${firstName} ${lastName}`)
    
}

//burada parametre ismiyle değişken ismi aynı olabilir fakat işlevsel olarak aynı değildir.
console.log(firstName)//lorem değişkeni yazacak
greetings(firstName)// merhaba lorem
greetings("apple")// merhaba apple
greetings("apple", "kılıç")// merhaba apple kılıç

function greetings2(firstName,lastName) {
    let info = `merhaba ${firstName} ${lastName}`
    return info
}

let info2 = greetings2("ad", "soyad")
console.log(info2)

function domIdWriteInfo(id, info) { // bu fonksiyon değer döndürmez sadece istediğimiz id ile istediğimiz yere bilgi ekledik
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML=`${info}`
}

/*domIdWriteInfo("info", greetings2("lorem", "ipsum"))*/

let htmlInfo = `<span style="color:red">color REDDDD<span/>`
domIdWriteInfo("info", htmlInfo)

//NOTLAR:

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama(r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI * r * r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.


function daireAlaniHesaplama2(r, PI = 3.14) {
    return PI * r * r;
}
var donenSonuc2 = daireAlaniHesaplama2(3);
console.log(donenSonuc2); // 28.25999999 sonucunu göreceğiz.


function daireAlaniHesaplama3(r, PI = 3.14) {
    return PI * r * r;
}

function carpma(a1, a2) {
    return a1 * a2;
}

var alan1 = daireAlaniHesaplama3(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama3(6);
var donenSonuc4 = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc4);  			  // 354.9456 olarak hesaplandı.