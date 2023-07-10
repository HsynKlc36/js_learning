 //array - dizilerle calismak

// Array olusturmak

let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

//boş array oluşturmak ve sonradan değer atamak
let emptyArray = [] // boş list
emptyArray[0] = 2 //boş listeye eleman ekledik
emptyArray[1] = 5
emptyArray[2] = 10
emptyArray[3] = 8
emptyArray[4]='array item'
emptyArray[6]=3
//burada 5. index atlanmıştır fakat dizi hata vermez sadece 5.index 'empty' olarak diziye işlenecektir! 
console.log(emptyArray)//(7)[2,5,10,8,array item,empty,3]

// array içerisindeki değeri değiştirmek
emptyArray[0] = "kazım"
console.log(emptyArray)//(7)[kazım,5,10,8,array item,empty,3]
//array 'in ilk elemanına ekleme
emptyArray.unshift(1,'resul');//bir veya birden fazla ekleme yapılabilir(9)[1,resul,kazım,5,10,8,array item,empty,3]

//array 'in son eleman elemanına ekleme
emptyArray.push("hüso",'furkan');//(11)[1,resul,kazım,5,10,8,array item,empty,3,hüso,furkan]
console.log(emptyArray)
//array içerisinden ilk elemanı çıkarma
 emptyArray.shift()
// //array içerisinden son elemanı çıkarma
 emptyArray.pop()
 emptyArray.pop()
 emptyArray.pop()
 emptyArray.pop()
 emptyArray.pop()
 console.log(emptyArray)//(5)[resul,kazım,5,10,8] 
 //NOT:son durumda 19.satırdaki console.log(emptyArray) yine 7 elemanlı diziyi gösterecektir fakat dinamik olarak son duruma bakıldığında 'array item' , 'empty' ve 3 silinir ve sadece 4 elemanın detayını görebilecek!.çünkü pop() metodunu 5 kere çalıştırmış olduk ve sondan 5 elemanı sildi! 



// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    emptyArray.length // array içindeki eleman sayısı
)
document.querySelector("#info").innerHTML = emptyArray.length;


// Array icindeki ilk elemanin cagirilmasi
console.log(emptyArray[0])

// Array icindeki son elemanin cagirilmasi
console.log(emptyArray[emptyArray.length-1])

// Array icindeki ortadaki elemanin cagirilmasi
console.log("ortadaki dizi elemanı[] : ",emptyArray[Math.floor(emptyArray.length/2)])//eğer dizi eleman sayısı tek ise bu geçerlidir!

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi

console.log(
    typeof( emptyArray)// object olarak çıktı verir
)
console.log(
    Array.isArray(emptyArray)//true ya da false döndürür
)


// hangileri isArray -> True verir ? 
console.log("[] : ", Array.isArray( [] ))//true
console.log("1 : ", Array.isArray( 1 ))//false
console.log("false : ", Array.isArray( false ))//false

//array içinde array'e ulaşmak:
let arr = [1, 2, 3, ["dört", "beş", "altı"], 7, 8];
console.log(arr[3][2])//altı

//dizileri küçükten büyüğe sıralama
let diziSirala = [2, 4, 8, 5,'/', "elma",'zon','armut','aras','elmas', 1]
console.log(diziSirala.sort())// küçükten büyüğe sıralar
console.log(diziSirala)// sort kullanıldıktan sonra artık o dizi aslında yeni bir diziye dönüşmüş olur ismi aynı kalsa da sıralanmış bir şekilde olacaktır!fakat unutmayalım ki rakam , harf ve özel karakterlerin bir arada bulunduğu durumda ascii koduna göre kücükten büyüğe sırayalama yapar yani önce özel karakterler sonrasında rakamları kendi arasında en sonda ise harfleri kendi arasında sıralar! ['/', 1, 2, 4, 5, 8, 'aras', 'armut', 'elma', 'elmas', 'zon']
console.log(diziSirala.reverse())//tersten sıralar büyükten küçüğe

let diziHarf = ["e", "a", "b", "j", "g"]
console.log(diziHarf.sort())// A-Z' ye sıralar
console.log(diziHarf.reverse())// Z-A' ya sıralar

//Type Of Array
//Bir array'in veri tipi object'dir.typeof aylar = object

//Array'in Let Veya Const İle Deklare Edilmesi Arasındaki Farklar
//Array'leri tanımladığımız değişkenin let veya const ile deklare edilmesi arasında fark bulunmaktadır. Let ile deklare ettiğimiz bir array daha sonra yeniden tanımlanabilir.

let gunler = 'pazar'
gunler = ['cuma', 'cumartesi', 'pazar'] 
console.log(gunler); // ['cuma' , 'cumartesi' , 'pazar'] çıktısını alacağız. Çünkü let kullanarak oluşturduğumuz bir array yeniden tanımlanabilir.

//Yukarıda yaptığımız örneğin aynısını const ile yapmayı deneyelim 
const gunler2 = ['pazartesi', 'sali', 'carsamba']
 gunler2.push('perşembe')
 gunler2[0]='cumartesi'
 gunler2.sort()
 console.log(gunler2)
 //yeniden tanımlanırsa yandaki hatayı verecektir! 'TypeError: Assignment to constant variable' hatasını alırız. Const ile deklare ettiğimiz bir array'i yeniden tayin edemeyeceğimizi belirtmektedir.

//const ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır.

