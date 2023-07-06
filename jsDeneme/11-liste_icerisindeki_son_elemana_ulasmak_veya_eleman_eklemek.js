// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let item = document.querySelector("ul#list2>li:last-child");// id'si List olan ul'nin cocuğu olan li'nin last-child son cocuk anlamına gelir.
console.log(item);
let item2 = document.querySelector("ul#list2>li:first-child");//ilk cocuk
console.log(item2);

item.innerHTML = "son öge değişti";
item2.innerHTML = " ilk öge değişti";

//yeni öge oluşturur.
let ulDOM = document.querySelector("ul#list");

let liDOMSon = document.createElement('li')
liDOMSon.innerHTML = "kendi oluşturduğumuz son li";
let liDOMIlk = document.createElement('li')
liDOMIlk.innerHTML = "kendi oluşturduğumuz ilk li";
ulDOM.append(liDOMSon);//elemanın içindeki en son veriye ekler
ulDOM.prepend(liDOMIlk);//elemaının içindeki ilk veriye ekler.

let butDOM = document.createElement('button');
butDOM.classList.add('button-dom','btnnnn');
butDOM.className +=" btnbuttonn"
butDOM.innerHTML = "buton oluşturuldu";
ulDOM.append(butDOM);// ul içindeki son veriye ekledik!!

//form içinde herhangi bir veriyi bulmak için:
let form = document.querySelector("form");
let password = form.elements.namedItem("password")//içerisindeki herhangi bir elemanı secmek icin
console.log(password);


var urun = document.querySelector("#veri");
var ekle = document.querySelector("#ekle");
//Yukarıda seçim işlemlerimizi de yaptıktan sonra sırada ise ekle butonuna tıklandığında ilgili ekleme durumunun gerçekleşmesini sağlamak.
function butonaBasildiginda() {
    var li =document.createElement('li');
    var text = document.getElementById('veri').value;
    li.innerHTML = text;
    var ulDom2 = document.querySelector("ul.liste");
    ulDom2.append(li);
    urun.value= "";
};


//Sınıf yani class teknik anlamda ise (getElementsByClassName) ile öğe ve öğelere erişmek

//var two = document.getElementsByClassName("alternate");
//Burada ise two isminde bir değişken tanımlayıp alternate sınıfına sahip olan tüm öğeleri alıyoruz.Burada önemli nokta ise getElementsByClassName bize class ’a sahip tüm öğeleri nodeList olarak döndürür.

//Seçtiğimiz sınıfa müdahale edelim.
//two olarak tanımladığımız değişkenimizin içerisinde döngü yardımı ile dönelim ve alternate sınıfına sahip olarak öğelerin renklerini değiştirelim.Döngü kullanmamızın bir sebebi de getElementsByClassName metodunun bize nodeList dönüyor olması.

//    for(var i = 0; i < two.length; i++) {
//    two[i].style.color = "red";
//    };

//NOT:CSS de child parent kavramı:
//div p{} div içerisindeki tüm p taglarını kapsar.
//div>p{} div içerisindeki sadece cocukları kapsar.
//div+p{} divden sonraki ilk p tagı.Yani <div><p></p></div> <p>frontend</p> buradaki frontend'in bulunduğu p tagını kapsar.
//div~p{} divden sonraki tüm p taglarını kapsar