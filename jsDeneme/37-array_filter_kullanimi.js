// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//JavaScript'te filter metodu, bir dizi üzerinde koşula uyan öğeleri filtrelemek için kullanılan bir dizi yöntemidir. Bu metot, orijinal diziyi değiştirmek yerine, koşula uyan öğelerden oluşan yeni bir dizi döndürür.

//filter metodu, her bir dizi öğesi için belirtilen bir koşul fonksiyonu çalıştırır. Bu koşul fonksiyonu, her bir öğenin koşula uyup uymadığını belirlemek için kullanılır. Eğer koşul fonksiyonu true döndürürse, o öğe yeni diziye dahil edilir. Eğer false döndürürse, o öğe yeni dizide yer almaz.

// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)// koşulu sağlayanlar true döner ve yeni bir diziye atılır!
console.log(NEW_PRODUCTS)//[ "Speaker", "Desktop PC", "Server","Keyboard"]

const numbers=[2,3,5,7,11,4,6]
const newNumbers=numbers.filter((number,index,array)=>{
    //number=number*2; foreach ve filter da doğrudan parametre değiştirilmez yani numbers dizisini bu şekilde doğrudan elemanlarını değiştiremezsin
    array[index]=number*2; //fakat bu şekilde array olarak numbers dizisini parametre verip bu şekilde değişiklik yapabilirsin.genel olarak foreach de elemanları döneriz ve yeni bir dizi oluşmaz! filter da ise koşulu sağlayanlar true döner ve yeni diziye atar! false olanları bu diziye atmaz fakat numbers dizisi üzerinde de yukarıda anlattığım gibi değişiklik yapılabilir. 
   return (!(number%2))// burada 2 ye bölünenler true döner ve bunları diziye atar

})
console.log(newNumbers)//[2,4,6]
console.log(numbers)//[4,6,10,14,22,8,12]

// aktif kullanicilar ??
const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
const ACTIVE_ = USERS.filter((user,index,array) => array[index].isActive)
const ACTIVE = USERS.filter(function(user) {
return user.isActive
} )
//24-25-26 aslında aynı sonucu dönecektir. 25.satırda görüldüğü üzere filter'ın aldığı item,index,array[](bu array dizinin tam halidir) parametreleri vardır ve koşulu sağlayan yani true dönen değerler yeni bir diziye atılır!
console.log(ACTIVE_USERS)
console.log(ACTIVE_)
console.log(ACTIVE)

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML",'C#'],
},
{
    name: "Hasan",
    age: 45,
    languages: ["C#", "JavaScript",'Rust'],
}
];

//yası 30 dan büyük olanı getir.
const new_person = person.filter((person,index,array)=>array[index].languages[0]=='C#')
const new_person2 = person.filter((person)=>person.languages[2]=='C#')
console.log(new_person)
console.log(new_person2)