// ******* Template Literals Kullanimi ********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hüseyin";
const DOMAIN = "kilic.com";

let email = username + "@" + DOMAIN;
console.log("merhaba", username, " sitemize hoşgeldin", " mail adresin: ", email);
console.log(`merhaba ${username} sitemize hoşgeldin mail adresin ${email}`);

let info = `Merhaba ${username} sitemize hoşgeldin..
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
günün saat bilgisi :${new Date().getHours()}
kısa isminiz:${username[0]}
`;

console.log(info);

//Template Literals;

//        Kod okunabilirliğini kolaylaştırır,
//        Stringler içerisinde değişken yazma kolaylığını sağlar,
//        Şablon etiketlerini daha az karmaşık hale getirir.

//NOT: `` içerisinde hem string hemde değişkenleri ${} şeklinde rahatlıkla yazabiliriz.

// Yeni kullanım, Template Literals kullanarak:
let ad="furkan";
let soyad="kılıç";
let gozRengi="moraçalanpembe";
let yas="102 den gün aldım z kuşağıyım"
  const kisi = `
 <p>${ad}</>
 <p>${soyad}</>
 <p>${gozRengi}</>
 <p>${yas}</>
 `;
console.log(kisi);
// document.body.innerHTML = kisi;