// ********** Coklu Kosullarla Calismak **********
let userName = prompt("kullanici Adiniz:");//promptan string değer alınır veri girişi olmaz ise "" gelir;
let age = prompt("yasiniz:")
if (userName && age >= 18) {
   console.log("ehliyet alabilirsiniz")
}

//NOT:typeof string türde değer döndürür yani tür dönüşümlerini string şekilde bildirir!!!!!!
console.log(typeof (NaN));//NUMBER DÖNER!!
console.log(typeof (0));//NUMBER DÖNER!!
console.log(typeof (Null));//undefined DÖNER!!
let yas;
console.log(typeof (yas));//undefined DÖNER!!
 yas = 12;
console.log(typeof (yas));//number DÖNER!!
yas = "12";
console.log(typeof (yas));//string DÖNER!!
console.log(typeof Number(yas));//number DÖNER!!
yas = "asdjlkas";
console.log(typeof (yas));//string DÖNER!!
console.log(typeof Number(yas));//ceviremeyeceği için Number(yas)-> NaN DÖNER!! typeof(NaN)ise->number olarak döner!!!

 if (userName != "" && age == "") {
     console.log("lütfen yaşınızı boş geçmeyiniz!")
     console.log("isim kontrol ediliyor")
     if (`${(Number(userName))}` === 'NaN') {
         console.log("isim girişiniz doğru türdedir")
     }
     else {
         console.log("lütfen dogru türde isim girişi yapınız")
     }
 }
 else if (userName != "" && age != "") {
     console.log("yaşınız kontrol ediliyor")
     if (`${(Number(age))}` === 'NaN') {
         if (`${(Number(userName))}` === 'NaN') {
             console.log("lütfen rakam girişi yapınız!")
             console.log("kullanıcı adınız doğru türdedir")
         }
         else {
             console.log("lütfen rakam girişi yapınız!")
             console.log("kullanıcı adınız doğru türde değildir")
         }
         
     }
     else {
        if (age >= 18) {
          console.log("ehliyet yaşınız tutuyor")
        }
        else {
           console.log("ehliyet yaşınız tutmuyor")
        }
     } 
 }
 else if (userName == "" && age == "") {
    console.log("kullanıcı adı ve yaşınızı boş geçmeyiniz")
 }
 else if (userName == "" && age != "") {
     console.log("lütfen isim yerini boş geçmeyiniz")
     console.log("yaşınız kontrol ediliyor")
     if (!isNaN(Number(age))) {
         if (age >= 18) {
             console.log("ehliyet yaşınız tutuyor")
         }
         else {
             console.log("ehliyet yaşınız tutmuyor")
         }
     }else {
         console.log("lütfen rakam girişi yapınız!")
     }
};
//`${(Number(age))}` === 'NaN' yerine isNaN(Number(age)) kullanılabilir.
//SWİTCH CASE
let hava = "Gunesli";
switch (hava) {
    case "Yagmurlu":
        console.log("Semsiyeni yanina almayi unutma");
        break;
    case "Gunesli":
        console.log("Hafif giyin");
        break;
    case "Bulutlu":
        console.log("Disari cik");
        break;
    case "Karlı":
        console.log("Kalin giyin");
        break;
    case "Firtinali":
        console.log("Bir süre disari cikma");
        break;
    default:
        console.log("Bilinmeyen hava durumu:", hava);
}

