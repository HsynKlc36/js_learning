// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
let email = "simplefurkan@gmail.com"
let email2 = "hüseyin_kilic96@hotmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)//"simplefurkan@gmail.com"

//localStorage içerisinde value değerinde değişiklik yapmak
localStorage.setItem('userEmail', email2)

let localStorageEMail2Info = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMail2Info)//"hüseyin_kilic96@hotmail.com"

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..

//Veri Ekleme
//localStorage built -in fonksiyonları ile veriler üzerinde işlem yapmak oldukça kolaydır.setItem metodu kayıt eklemek için kullanılmaktadır.Bu metot iki parametre almaktadır.Bunların ilki ‘key’ yani anahtar adı ikincisi ise ‘value’ yani o anahtara karşılık gelen değeri ifade etmektedir.

	window.localStorage.setItem("key", "value"); 

//Eğer daha önce belirttiğiniz bir anahtarı kullanırsanız kaydetmek için veri eski kaydın üzerine yazılacaktır. Veriniz güncellenmiş olacaktır. Veriyi kontrol edip yoksa kaydetmek isterseniz. verinin oluşturulup oluşturulmadığını kontrol etmeniz yeterli olacaktır. Verileri kaydederken sadece string biçiminde kayıt yapıldığını bilmemiz gerekmektedir. Karmaşık bir veriyi kaydetmek istediğinizde toString() metodu çalıştırılmalı ve üretilen değer kaydedilmelidir. Json verisini kaydetmek içinse JSON.stringify() metodu kullanılmalıdır.

//Veri Okuma
//localStorage üzerinde kayıtlı olan anahtarları okumak için "getItem" metodu kullanılır. getItem metodu anahtar adını kendisine parametre olarak alıp geriye değeri döndürmektedir.

	window.localStorage.getItem("key");

//Eğer veri daha önce kaydedilmeyen bir veriyi okumaya çalıştığımızda null değeri geri dönmektedir.

//Veri Silme
//Verileri silmek için iki tane metot kullanılmaktadır. Tüm verileri silmek istiyorsak clear() metodunu kullanmamız gerekir. Şayet istediğimiz bir anahtarı silmek istiyorsak removeItem() metodunu kullanmamız gerekmektedir. removeItem metodu kendisine silinecek anahtarı parametre olarak almaktadır.

	localStorage.removeItem("key");//sadece key ile tanımlanan anahtar kelime silinir.
	localStorage.clear();// tümü silinir
//Veri silindikten sonra değeri null olarak gözükmektedir.