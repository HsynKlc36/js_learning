//****** let ve const ile Degisken Tanımlama********

//var ile degisken tanımlamak:

//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

//let ile degiskeni bos tanımlamak:

let serverName;
console.log(serverName)//und

//let ile degiskene bilgi atamak:

serverName = "https://kodluyoruz.org";
console.log(serverName);//https://kodluyoruz.org

//let ile degiskene bilgi atayarak tanımlamak:
let password = "1234";
console.log(password);//1234

//degisken ataması yapmadan once kullanmaya calismak:
/*HATALI KULLANIM:
 * console.log(fullName);
let fullName="hüseyin kılıç";
 */

let fullName = "hüseyin kılıç";
console.log(fullName);
//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName = "halil kılıç";
console.log(fullName);
//birleştirme veya ekleme işlemi
console.log(fullName + " test bilgisi");// ekle ve göster ama değişkene eklemedik

fullName = fullName + " Yeni Bilgi";// değişkene ekledik
console.log(fullName);//halil kılıç yeni bilgi

fullName = "sıfılandı";
fullName += " ve yeni bilgi eklendi";
console.log(fullName);//sıfırlandı ve yeni bilgi eklendi

//const ile degiskeni bos tanımlamaya calismak:
//const serverPassword; => bu şekilde hata verecektir const tanımlanırken içine atama yapmalıyız!

//const ile degisken tanımlamak:
const server_Password = "alksdjlas";
console.log(server_Password);//alasdas

//server_Password = "1234";
//console.log(server_Password); //=> burada hata verecektir çünkü sadece 1 kere tanımlanacak TC kimlik no gibi düşünün değişmeyecek seyleri tanımlarız.

//var
//Global scope veya function scope'ta deklarasyon sağlamaya yarayan keyword'dur.Scope özelliklerini daha sonra örneklerle açıklayacağız.var globalde tanımlı ise scope'lar içersiine girince değişime uğrayarak çıkar.var ile tanımlanan değişkenlerin özellikleri şunlardır:
var furkan=46;
if(true){

    var furkan=55;
}
console.log(furkan);//55
//1-Değişken değerleri değiştirilebilir.
//2-Aynı isimle tekrardan tanımlanabilirler.
//3-var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir.Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir.Bu konuyu örneklerle açıklayalım.

console.log(furkan);

 let furkan2=48;
if(true){

    let furkan2=55;
    
    console.log(furkan2);
}
console.log(furkan2);

//let
//Değişkenleri block scope'ta tanımlayan deklarasyondur. let ile tanımlanan değişkenlerin özellikleri şunlardır.

//1-Değişken değerleri değiştirilebilir.
//2-Aynı isimle tekrardan aynı blokta tanımlanamaz.Farklı block'larda aynı isimle tanımlanabilir.