//Asenkron yapı ve await keywordü kullanımı
//peki bu kavramlar nedir?
// async anahtar kelimesi, bir işlevin asenkron olduğunu belirtmek için kullanılır. Bir işlevi async olarak tanımladığınızda, işlev içinde await anahtar kelimesi kullanabilirsiniz.

// await anahtar kelimesi ise, bir asenkron işlemin tamamlanmasını beklemek için kullanılır. Bir await ifadesi, bir Promise nesnesi döndüren bir işlemi beklerken(fetch Api gibi asenkron yapıda olan), diğer kodların çalışmasını duraklatır(kod akışını durdurur) ve işlemin sonucunu elde eder.

//ÖRNEK
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const processData = async () => {
  console.log("İşlem başladı");

   await delay(2000);
  console.log("İşlem devam ediyor...");

  await delay(2000);
  console.log("İşlem tamamlandı");
};

console.log('func çalışmadan önce')
 processData();//async function'larda cağırırken doğrudan await yapısını js de kullanamıyoruz!
//  const main = async () => {
//   await processData();
// };

// main();
 console.log('func çalıştıktan sonra')

const jsonplaceholderAPI = "https://jsonplaceholder.typicode.com";
const getTodos = async () => {
    console.log("inner 1");
    console.log("inner 2");
    const response =await fetch(jsonplaceholderAPI + "/todos");// asenkron bir yapıdadır await ile cevabı bekler!
    console.log(response);
    console.log("inner 3");
    console.log("inner 4");
}

console.log("outer 1");
console.log("outer 2");
getTodos();
console.log("outer 3");
console.log("outer 4");

const todos = [];
const getTodoAndPush = async () => {
    const response = await fetch(jsonplaceholderAPI + "/todos");
    const data = await response.json();
    todos.push(data);
}
getTodoAndPush();
console.log(todos)

//setTimeout ile asenkron özellik sağlanabilir:
console.log("Kodun başı");

setTimeout(() => {
    console.log("Asenkron işlem");// 2 saniye gecikmeli çalışır!
  }, 2000);
  
  console.log("Kodun sonu");

  setInterval(() => {
    console.log('her saniye çalışacağım')
  }, 1000);//her saniye tekrar tekrar tetiklenecektir

  //NOT:Asenkron ifadelerde ana işlevde kod akmaya devam eder çünkü ana işlevde asenkron çalışır.örneğin yukarıda 2 console.log() arasında func() çağırıldığında ve asenkron(async) bir funck olduğunda fonksiyondaki kodlar akarken bir cevap için beklenecek ve öyle function akmaya devam edecekse bu sırada ana işlevdeki kod akmaya devam edecektir function da cevap alındığında function daki kalan kodlarda tamamlanacaktır!