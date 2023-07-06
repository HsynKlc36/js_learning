// ** Ilk Fonksiyonumuzu Tanimlamak ****

function hello() {
    console.log("hello");
    helloWord();
}

function helloWord() {
    console.log("hello word");
}

let info=document.getElementById('info');
let userName='js öğreniyorum';
let age=19;
function userCheck() {
   if (userName && age >=18) {
       info.innerHTML = "ehliyet alabilirsiniz"
   } else if (!userName) {
       info.innerHTML = "kullanıcı adınız yok"
   } else if (!(age >= 18)) {
       info.innerHTML = "yas bilginiz yok veya 18 yaşından kucuksunuz";
   }
}
hello();//calıstır 
userCheck();//çalıştır
//Callback Fonksiyonlar ve Asenkron Çalışma

/*Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez.Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur.Uzun zaman alan veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir.JavaScript asenkron yapıdaki bir programlama dilidir.Bunu anlamak için içinde setTimeout(parameter1, parameter2) fonksiyonunu kullanacağız.Bu fonksiyon gördüğünüz gibi iki parametre ile kullanılacak: ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor.Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.*/

function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2() {
    setTimeout(function () {
        console.log("İkinci ekran çıktısı")
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

//İlk ekran çıktısı
//Üçüncü ekran çıktısı
//İkinci ekran çıktısı

/*Bunun sebebi asenkron çalışma yapısıdır.printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır.Bu durumdan kurtulmak için callback kullanıyoruz denebilir.Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır.Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur.Örneğin yukarıda verilen kodumuzun sırasıyla birinci, ikinci ve üçüncü çıktıları vermesini istiyoruz.*/

function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2(callback1, callback2) {
  
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();  
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}


printScreen2(printScreen1, printScreen3);