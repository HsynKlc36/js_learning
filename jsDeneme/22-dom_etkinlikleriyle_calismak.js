// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector('#infobtn')
// 1.YOL
greeting.addEventListener("click", function () {
    console.log('tıklandı')
})

// 2.YOL
greeting.addEventListener('click', domClick)
// let sayac = 0;
function domClick() {
    sayac++;
    console.log("tıklandı")
    this.innerHTML = `event ${sayac} kez tıklandı`//sorguyla yakaldığımız tag i greetingte tuttuk ve buna tıklanınca domClick fonksiyonu çalışsın dedik ardından fonksiyon içinde this.innerHTML ile greeting'in içerisine ulaşabildik

    this.style.color == "red"? this.style.color = "black" : this.style.color = "red"
}
let sayac=0; // yukarıda tetiklenebileceği gibi aşağıda da tetiklenebilir. kod yukarıdan aşağıya akmak zorunda değildir!
//buradaki this greeting'i temsil etmektedir.


// FORM ETKİNLİĞİ ÖRNEĞİ

     //id=select olan nesne çağrılarak color değişkenine atandı
        const color = document.querySelector("#select");
        //color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
        color.addEventListener('change' ,selectBox);



        //selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
        function selectBox(event){
            console.log("Etkinlik tipi : " + event.type);
        console.log("deger : " + event.target.value);
        }

        // Selectbox içinde "blue" değerini seçtiğimiz takdirde;
        // ekran çıktısı: Etkinlik tipi : change, deger : blue﻿    

            //2.Yakalama Etkinliği(Event Capturing)

            //İç içe elementlerde, Örneğin üzerine tıklanan bir eleman kendisinin içindeki elemanı da yazar.Kabarcıklanma etkinliğinin tam tersi şeklinde çalışır.Hedef dıştan içe doğrudur.Bir önceki örnekteki çıktının tam tersi olarak; ekran çıktısı çerçeve form seklindedir.

            //Kullanım şekli:

            //element.addEventListener(event, function, useCapture);

            //useCapture parametresi "True" ve "False" değerleri almaktadır.Diğer tüm kullanımı kabarcıklanma etkinliği ile aynıdır.

            //    event.stopPropagation()!!!
            //Bir etkinliğin özelliğini durdurmak için kullanılır.Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.

            //    Kullanımı:

            //event.stopPropagation();

            //event.preventDefault()!!!!
            //Bir HTML elementinin varsayılan eylemini tamamen engellemek için bu eylem kullanılır.Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.

            //    Kullanımı:

            //event.preventDefault();

// elimde adres id li inputum olsun
  const adres=document.getElementById('Address');

  adres.addEventListener('change',inputChange)

  function inputChange(event){
    console.log("Etkinlik tipi : " + event.type);
console.log("deger : " + event.target.value);
}