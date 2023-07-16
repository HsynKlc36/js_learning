// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5]

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
items.push(femaleUsers)
items.unshift(maleUsers)
console.log(items)//[["Ahmet", "Hasan", "Mehmet"],1, 2, 3, 4, 5,["Ayse", "Hulya", "Merve"]]
console.log(items.length)// 7 elemanlıdır içindeki array'leri tek eleman olarak kabul eder
console.log(items[0].length)//0.indexin eleman uzunluğu 3 olmalıdır cünkü oda bir arraydir
console.log(items[0][1])//0.indexin 1.indeksini verir yani 'Hasan'.


// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(2, 4) //2.indeksten başla 4 eleman kes dedik ve sildiklerimizi değişkene attık
console.log("newItems:",newItems)// kestiği elemanları yakalar [2,3,4,5] 'i keser ve kestiklerini yakalayıp yeni bir dizi içerisinde  tutar. Tek eleman dahi olsa dizide tutacaktır!
console.log(items);//[["Ahmet", "Hasan", "Mehmet"],1,["Ayse", "Hulya", "Merve"]]
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")
console.log(items)//['lorem',["Ahmet", "Hasan", "Mehmet"],1,["Ayse", "Hulya", "Merve"],'ipsum']
console.log(items.indexOf("lorem"))// 0.indexte olduğunu gösterir .bulamazsa -1 dönderir.
console.log(items.indexOf("Hasan"))// bulamaz çünkü hasan dizinin içerisindeki eleman olan bir başka dizidedir ve doğrudan bulamaz bu yüzden -1 dönderir.
console.log(items[1].indexOf("Hasan"))// 1.index'i döner


// Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)


copyItems.pop() //son ögeyi çıkardık fakat aynı nesneyi refere ettikleri için ikisinde son hali aynı olacaktır.
console.log("items",items)//['lorem',["Ahmet", "Hasan", "Mehmet"],1,["Ayse", "Hulya", "Merve"]]
console.log("copyItems",copyItems)//['lorem',["Ahmet", "Hasan", "Mehmet"],1,["Ayse", "Hulya", "Merve"]]

console.log("kopyalandıktan sonraki hali")
copyItems = items.slice()// kopyalama yaptı(deep copy)
copyItems.pop()//son ögeyi çıkarttık
console.log("Items", items)// 4 eleman kaldı ve sadece kopyasından silme işlemi yaptı
console.log("copyItems", copyItems)// 3 elemanlı kaldı 

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]// es6 birden fazla array yapısını birleştirmek için kullanılır dizi içeriisnde dizi olmayacaktır.Çünkü diziden çıkarır ve string şekilde yayar yani [["Ayse", "Hulya", "Merve"],["Ahmet", "Hasan", "Mehmet"]] değilde ["Ayse", "Hulya", "Merve","Ahmet", "Hasan", "Mehmet"] bu şekilde olacaktır!
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())//Ayse, Hulya, Merve, Ahmet, Hasan, Mehmet
console.log(allUsers.join("-")) //Ayse-Hulya-Merve-Ahmet-Hasan-Mehmet
console.log(allUsers)

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
let userSplice=allUsers.splice(allUsers.length - 1, 0, "hüseyin")//son index' hüseyini ekler son indeksteki değeride bir fazlasına atar yani 6. indekse ekliyorsam hüseyini 6.indeksteki değerde artık 7.indekse kayacaktır.["Ayse", "Hulya", "Merve","Ahmet","Hasan","hüseyin", "Mehmet"]
console.log(userSplice);//[] kesme yapmadığı için boş dizi döner
console.log(allUsers);
allUsers.splice(Math.floor(allUsers.length/2),0,"resul")
// ortadaki indekse veri ekleme 3. indexe ekleme yapar ["Ayse", "Hulya","Merve","resul","Ahmet","Hasan","hüseyin", "Mehmet"]
console.log(allUsers)

//concat=>burada sondan ekleme yapar ve spread(...items) gibi yayarak yani dizi de bile olsa çıkarıp string şekilde yayarak yazacaktır aşağıdaki örnekteki gibi!
const newAllUsers = allUsers.concat(["Furkan", "Arkin"], ["Reha"],'erkan');
console.log(newAllUsers);//["Ayse", "Hulya","Merve","resul","Ahmet","Hasan","hüseyin", "Mehmet","Furkan", "Arkin", "Reha","erkan"]

//slice
console.log(newAllUsers.slice(0, 1));//['Ayse']
console.log(newAllUsers)//["Ayse", "Hulya","Merve","resul","Ahmet","Hasan","hüseyin", "Mehmet","Furkan", "Arkin", "Reha","erkan"]
console.log(newAllUsers.slice(1, 5));//1.indexten başlar 5.index'e kadar alır fakat 5. index'i dahil etmez aldığı elemanlarda yine dizi içerisindedir.(4) ['Hulya', 'Merve', 'resul', 'Ahmet']
console.log(newAllUsers.slice(1, -1));//dizinin eleman sayısını bilmiyorsak ve baştan ve sondan hangi indexten itibaren dahil olmasını istiyorsak bu şekilde uygularız. baştan ve sondan 1'er index'i dahil etmez (10) ['Hulya', 'Merve', 'resul', 'Ahmet', 'Hasan', 'hüseyin', 'Mehmet', 'Furkan', 'Arkin', 'Reha']
console.log(newAllUsers);// (12) ['Ayse', 'Hulya', 'Merve', 'resul', 'Ahmet', 'Hasan', 'hüseyin', 'Mehmet', 'Furkan', 'Arkin', 'Reha', 'erkan']

const studentList = ["Murat", "Aysenur", "Ozlem","Osman", "Zeynep", "Hazel", "Osman","furkan","arkın"];

const numbers = [34, 12, 646, 93842, 1, -5, 32, -25, 90, 55];

//every => dizi içerisindeki tüm elemanları dolaşır ve koşulun hepsi için sağlaması gerekir bu durumda true döner fakat 1 tanesi bile karşılamazsa false döner.
console.log(
    numbers.every(number => number > -100)
)

//some => dizi içerisindeki tüm elemanları dolaşır ve koşulun 1tanesi için bile sağlaması yeterlidir yani bu durumda true döner fakat hiçbiri sağlamazsa false döner!
console.log(
    numbers.some(number => number > 0)
)


//find => find yöntemi, bir dizide belirli bir koşulu sağlayan ilk öğeyi bulmak için kullanılır. Eğer koşulu sağlayan bir öğe bulunursa, bu öğeyi döndürür. Eğer koşulu sağlayan bir öğe bulunmazsa, undefined değerini döndürür.False ise koşul döngüde devam eder true geldiğinde dizide dönmeyi bırakır ve yakaladığı değeri döner!
console.log(
    studentList.find((student, index) => {
        console.log(index)
        //işlemler....
        return student === "Osman";
    })
)
console.log('*****************************************************************************')
//findLast =>find yöntemi, bir dizide belirli bir koşulu sağlayan ilk öğeyi bulmak için kullanılır.fakat dizinin sonundan başlayarak arama yapar. Eğer koşulu sağlayan bir öğe bulunursa, bu öğeyi döndürür. Eğer koşulu sağlayan bir öğe bulunmazsa, undefined değerini döndürür.False ise koşul döngüde devam eder true geldiğinde dizide dönmeyi bırakır ve yakaladığı değeri döner!
console.log(studentList.findLast((student, index) => {
    console.log(index)
    return student === "Osman";
}))

//findIndex => bütün diziyi dolaşır koşulun sağladığı ilk  index'i verir.Eğerki koşulu sağlayan öğe bulunamazsa -1 döner!
console.log(
    studentList.findIndex(student => student === "Hazel")
)

//includes => verilen dizi içerisinde arama yapar eğerki yakalarsa true yakalayamazsa false döner!
const developers=['hasan','yanbasan','mahmut','kamil']
console.log(developers.includes('hasan'))

//at => dizi içerisindeki verilen index'in karşılığında value'sunu döndürür.Eğerki öyle bir index yoksa undefined döner!
console.log(developers.at(1));//yanbasan

//reduce 
//array.reduce(function(total,currentValue,currentIndex,arr),initialValue) 
//1. ve 2. parametre required diğerleri ise optional' dir!

//1. parametre => total yani elinde olan son durum. dizi içeriisnde nesne , string,number,boolean  olması farketmez sadece dizi içerisinde yakaladıklarımızı diziye atmak istiyorsak initialValue'ya [] dizi atamalıyız ya da içine birşeyler ekleyedebiliriz.diğer türlü total parametresi dizi içerisindeki algoritmaya göre diziyi her döndükten sonraki elde olan total veriyi verecektir.eğerki salt olarak toplama ya da çıkarma yapmak için kullanacaksanız initial parametreyi 0 alabilirsiniz ya da oraya bir parametre girmeseniz dahi 0 olarak kabul edecektir.
//2. parametre => bu parametre ise o dizideki elemanı temsil eder.yani reduce tüm diziyi döndüğünü düşünürsek her dönüşteki item'ları temsil eder!
//3. parametre => bu parametre ise o dizi içerisinde dönülen item'ın parametresidir!
const nums = [1, 2, 3, 4, 5]
console.log(
    //             callback(acc, current), ..... , initial value
    nums.reduce(
      (total, currentNumber) => {
        console.log(`total: ${total} currentNumber: ${currentNumber}`)
        return total * currentNumber
        //return total + currentNumber 
        //return total - currentNumber 
      }
   , 0 )
  )// işleme göre initial value  default olarak, girmediğimiz durumda toplama 0 çarpmada 1 kabul edilir! 
  
  const studentObjList = [
    {name: "Halil Can Toptas", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 90},
    {name: "Serkan Duman", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 80},
    {name: "Aysenur Altinsoy", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 45},
    {name: "Arkin Zat", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 65},
  ];
  

  const reducedStudentList = studentObjList.reduce(
    (studentNames, currentStudent) => {
      // console.log(studentNames)
      return [...studentNames, currentStudent.name]
    }, ['hüseyin']
  );
  
  console.log(reducedStudentList)

  const reduceDevelopers=developers.reduce((totalNames,currentName)=>{
    //return totalNames+currentName =>bu şekilde yan yana bitişik olarak yazar fakat initialValue 'ya [] verirsek dizi içerisinde yazar
    return [...totalNames,currentName]
  },[])

  console.log(reduceDevelopers);