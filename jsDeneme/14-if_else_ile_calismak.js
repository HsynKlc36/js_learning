// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

let username = prompt("kullanıcı adınızı giriniz:",'lütfen sadece harf giriniz!');
//eğer kullanıcı bilgisi varsa ekrana ismini yazdırır.
//eğer (username.length>0){console.log(username)}
//if (username.length>0){console.log(username)}

if (username.length > 0) {
    console.log(`isminizin uzunluğu ${username.length} karakterdir`)
} else {
    console.log(`isim bilgisi girilmedi`)
};

var x = 5;
var y = 7;

if (x > y) {
    // console.log(x + " sayisi" + y + " sayısından büyüktür.");
    console.log(`${x} sayisi ${y} sayısından büyüktür`)
}

else {
    // console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
    console.log(`${y} sayisi ${x} sayısından büyüktür`)
};

var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if (ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    console.log("Not ortalamanız: " + ogrOrtalama + " KALDINIZ(FF).");
}

else if (ogrOrtalama >= 31 && ogrOrtalama <= 49) {
    console.log("Not ortalamnız: " + ogrOrtalama + " DC - KOŞULLU ");
}

else if (ogrOrtalama >= 50 && ogrOrtalama <= 84) {
    console.log("Not ortalamnız: " + ogrOrtalama + " CC - GEÇTİNİZ "); // 55.5 CC ile geçtiniz
}

else if (ogrOrtalama >= 85 && ogrOrtalama <= 100) {
    console.log("Not ortalamnız: " + ogrOrtalama + " AA - GEÇTİNİZ ");
}