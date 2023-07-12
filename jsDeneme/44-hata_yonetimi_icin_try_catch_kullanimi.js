// hata-yonetimi-icin-try-catch-kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp


let products;

try {
  products.forEach(item => console.log(item));
} catch (error) {
  console.log("error:", error)// error değişkeni => ne tipte bir hata alındığını console ekranına basacaktır!
   products = [1, 2, 3]
   products.forEach(item => console.log(item));
}

console.log(products)
console.log("hata yonetimi duzgun calisiyor")

let stringHuseyin;

try{
    let numberHuseyin= stringHuseyin*2;
    console.log(numberHuseyin)
    numberHuseyin.forEach(item=>console.log(item))
}catch(error) {
  console.log('alınan hata: ', error)
}