// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let arrayObj = [1, 2, 3]
let object1 = {obj: 1}
let object2 = {obj2: 2}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

let item1 = new Object()
console.log(item1)
let item2 = {}
console.log(item2)
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

// Object olusturmak
//1.YOL
let item3 = {}
//2.YOL
let item4 = new Object()
//3.YOL
let prototypeItem=Object.create(object2)// kalıtım almak için kullanılır!
prototypeItem.properties='flag'
prototypeItem.properties2='number'
console.log(prototypeItem)

let prototypeItem2=Object.create(prototypeItem)
prototypeItem2.num='8347893578934';
console.log(prototypeItem2)

console.log("object1", object1)

//Obje Oluşturmak
//Objeler üç şekilde oluşturulabilir.Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla.Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir.Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

//Object Literals
//JavaScript’te obje oluşturmanın en kolay yolu olarak bilinir.Süslü parantez { } kullanılarak oluşturulan objenin içerdiği property'lerin değerleri iki nokta : işaretiyle belirtilir. Property'ler birbirlerinden virgül, ile ayrılır.Örnek vermek gerekirse:

let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
};
/*countriesTalkSpanish isimli obje, continet ve language adında iki propertye sahip.Bu property'ler de iki primitive değeri barındırıyor.*/

//New Keyword ile Obje Oluşturmak
//New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır. Aşağıdaki örnekte standart object invocation kullanarak, Fransızca konuşulan Afrika ülkeleri objesini oluşturalım ve tıpkı bir önceki örnekte olduğu gibi, language ve continent property'leri verelim.

let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french";
/*objemizi new keyword ile initialize ettikten sonra property'lerini atadık. Dikkat, Object literal’dakinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık.*/

//Object Prototype
//Son yöntem olan Object.create() yöntemine geçmeden önce, prototype hakkında bilgi sahibi olmak, son yöntemi anlamak için önemli.Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir.Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır.Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: object.prototype.New keyword'ü kullanılarak oluşturulan objelerin ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. Örneğin new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date.prototype’dan kalıtım alır.

//Object.create
//Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir.Aşağıda yer alan örneklere bir bakalım;

let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
/*Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.*/
console.log(noInheritence);
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.
/*standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.*/
console.log(standartObject);
let argentina = Object.create(countriesTalkSpanish)
//argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan kalıtım alacağı için onunla aynı property'lere sahip olur. Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu, kalıtım yoluyla sahip olduğu property'lerden belli eder.

argentina.capital = 'buenos aires';
console.log(argentina);


/*objeye, ülkenin başkentini belirten yeni bir property atadık.Artık elimizde başkentini, konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.*/