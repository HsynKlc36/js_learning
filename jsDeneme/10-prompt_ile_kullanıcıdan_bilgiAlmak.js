// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("lütfen Adınızı Giriniz: "," yazı ile yazınız");//2.veri kullanıcıya örnek vermek için text'in içinde çıkan örnek yazıdır genellikle yol göstermek için kullanılır.
console.log(fullName);//bilgi girişi olur

let greeting = document.querySelector('#greeting');
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red;">${fullName}<small>`;
/*greeting.innerHTML = `${greeting.innerHTML} ${fullName}`;*/
// ${greeting.innerHTML} ekleme yaptığımızda 8. satırda önceki var olan innerHtml bilgileri silinmez!onun üzerine ekleme yapar örneğin; <h1 id="greeting">prompt ile </h1> <small style="color:red;">${fullName}</small> bu şekilde olacaktır