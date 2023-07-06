// ********** css ile class eklemek veya cıkarmak ******

let greeting = document.querySelector('#greeting');

greeting.classList.add('text-primary');//class'a ekleme yaptık!
greeting.classList.add('title', 'new-info','h1-element');//peşpeşe class ekleme işlemi yaptık!!
greeting.classList.remove('new-info','title');//class sildik!!
greeting.style = "color:red";//style'ına ekleme yapabildik fakat htmlde bunlar görünmez sadece inceleme kısmında eklediklerimiz görünür javaScriptten eklediklerimiz görünmez.
greeting.style.color='green';
console.log(greeting.classList.item(0));// item da o tag içerisindeki classları index olarak 0 dan başlayarak sıralar ve ona göre çağırır.biz 0.index'i yani ilk class'ı çağırdık(text-primary)
console.log(greeting.classList.contains('h1-element'));//böyle bir class varsa true yoksa false döndürür.!
console.log(greeting.classList.toggle('text-text'));// eğer öyle bir class yoksa ekler toggle ile ve true döner
console.log(greeting.classList);//'text-primary', 'h1-element', 'text-text'
console.log(greeting.classList.toggle('text-primary'));//eğer öyle bir class varsa siler false döner.
console.log(greeting.classList);
greeting.classList.replace('text-text', 'text-seconder');//text-text i kaldırıp yerine text-seconder class'ını ekledik
console.log(greeting.classList);//greeting in class'ına baktık veri var mı yok mu diye!!
console.log(greeting.style);