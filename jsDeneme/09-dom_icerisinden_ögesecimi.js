// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector


let h2chris=document.getElementById('chris')
h2chris.innerText +=" go home";

let link2 = document.querySelector('ul#list>li>#jslink');
link2.innerHTML = "link detaylar";

let classAlternate=document.getElementsByClassName('alternate')
classAlternate.innerHTML+=" hi js";
console.log(classAlternate.innerHTML)

let title = document.getElementById('title');
title.innerHTML = "değişen bilgi";
console.log(title.innerHTML);

let link = document.querySelector('#jslink');
link.innerHTML += " değişti";//link bilgisi değişti yazacak
link.style.color = "red";//style ekledik
link.classList.add('btn');//class ekledik!!
link.classList.add('btnjs');
link.className +=' btnlink';


//ID'ler büyük-küçük harf duyarlıdır. Bu sayede HTML document içinde biriciklik gösterir ve her zaman geriye bir eleman döndürür. Bir eşleşme bulamazsa da geriye null dönüşünü yapar.

     document.getElementById('#root'); // null
      document.getElementById('root'); // <div id=​"root">​…​</div>​


//Get Elements By Tag Name
//Elemanları etiket isimlerine göre seçmek için getElementsByTagName() metodu kullanılır.Birden çok elemente ulaşmak amacı ile kullanılır.Girdi olarak bir html elementi alır ve buna uygun bir HTMLCollection döndürür.

//    Örneğin, elimizde bu şekilde bir sayfa var ;

//<p>🐱</p>
//<p>🐰</p>
//<p>🐯</p>
//<p>🐧</p>
//Bu sayfadaki tüm p elemanlarına ulaşmak istersek;

const animals = document.getElementsByTagName('p');
//// Çıktı:  HTMLCollection(4) [p, p, p, p]
//Yazmanız yeterli olacaktır.
//Ayrıca sayfadaki tüm etiketleri bu şekilde getirebilirsiniz.
//HTMLCollection bir dizi değildir
   document.getElementsByTagName('*')
   console.log(document.getElementsByTagName('*'))
//// Çıktı: HTMLCollection(33) [html, head, meta, link#.....


//Get Elements By Name
//Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır.Elemanların name değerlerine göre bir NodeList objesi döndürür.


      /*E-posta adını taşıyan tüm öğeleri getirelim.*/

         const emails = document.getElementsByName('e-posta');
          console.log(emails)
 /* Çıktı: NodeList [input]*/
 /*Unutmayın ki name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.'*/



//            Get Elements By Class Name
//            DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız. Bu metot bize bir HTMLCollection döndürür. Ve kullanırken class isminin başına nokta "." koymamanız gerekir.

//           
//            Hatırlayalım! class="baykuş kusu" burada baykuş ve kusu iki ayrı class'tır.

//            Hadi sayfamızdaki tüm kuşları seçelim;

            const kuslar = document.getElementsByClassName('kusu');
            console.log(kuslar);
//            // Çıktı: HTMLCollection(3) [div.baykuş.kusu, div.güvercin.kusu, div.kartal.kusu]
//            Ayrıca bu metotla birden fazla class name belirtip daha detaylı bir seçim yapabilirsiniz.

//            document.getElementsByClassName('kartal kusu');
//            // Çıktı: HTMLCollection [div.kartal.kusu]


           /* Query Selector*/
           /*QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir. Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir.*/

            const email = document.querySelector('#signup input[name="email"]');
            console.log(email);


            /*Query Selector All*/
            /*querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.*/

            //NodeList Objesi:NodeList objesi genellikle querySelectorAll veya getElementsByTagName gibi DOM (Document Object Model) metotlarından döndürülür. Bu metotlar, belirli bir özellik veya etikete sahip tüm HTML elemanlarını seçmek için kullanılır.

            const elems = document.querySelectorAll('.bird, .animal');
            console.log(elems.length); // 5
            console.log(elems);
           /* Metotları bir arada kullanabilirsiniz.Yukarda öğrendiğimiz metotları bir arada       kullanabiliyoruz.Önce tek bir elemanı seçerek ardından içinde ikinci bir sorguyu yapabiliyoruz.*/

      // Örneğin;

            //  signup id'li elemanın içindeki tüm input elemanlarını seçmek istersek;
 
             const inputs1 = document.getElementById('signup').getElementsByTagName('input');
             const inputs2 = document.querySelector('#signup').querySelectorAll('input');
             const inputs3 = document.querySelectorAll('#signup>input')
             console.log(inputs1)//htmlcollection(dizi değildir doğrudan içerisinde dönemezssin)
             console.log(inputs2)//nodelist(dizidir. içerisinde foreach veya for ile doğrudan dönebilirsin)
             console.log(inputs3)//nodelist
            //  Sonrasında oluşturduğumuz inputs değişkenine Console üzerinden ulaşabilirsiniz. 