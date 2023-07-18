// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// JSON dosyadan veri cekmek:
fetch("../fetchData/settings.json").then(
    response => {
        console.log(response)
        return response.json()}
  ).then(responseJson => {
    console.log(responseJson)
    console.log(JSON.stringify(responseJson))
    console.log(responseJson.userName)
  })
  
  let userListDOM = document.querySelector("#userList")
  
  // API uzerinden veri cektik
  fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
  ).then(responseJson => {
    console.log(responseJson)
    responseJson.forEach(item => {
      let liDOM = document.createElement('li')
      liDOM.innerHTML = item.title
      userListDOM.appendChild(liDOM)
    })
  })


  //Promise
  const jsonplaceholderAPI = "https://jsonplaceholder.typicode.com";
const getRequest = (url) => {
    return new Promise(
        (resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    resolve(JSON.parse(request.responseText));
                }
                else if (request.readyState === 4) {
                    reject(`${request.status} - Could not fetch the data`);
                }
            });

            request.open("GET", url);
            request.send();
        }
    )
}

console.log(1);
console.log(2);
getRequest(`${jsonplaceholderAPI}/posts/1`)
    .then(response => {
        console.log(response)
    })
console.log(4);
console.log(5);

getRequest(`${jsonplaceholderAPI}/posts/1`)
    .then(response => {
        console.log(response);
        return getRequest(`${jsonplaceholderAPI}/posts/2`)
    })
    .then(response => {
        console.log(response);
        return getRequest(`${jsonplaceholderAPI}/posts/3`)
    })
    .then(response => {
        console.log(response);
        return getRequest(`${jsonplaceholderAPI}/posts/4`)
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err))



    const getPost=(post_id)=>{
      return new Promise(async (resolve,reject)=>{
        const {data}=await axios('https://jsonplaceholder.typicode.com/posts/'+post_id);
        resolve(data)
      })
    }
    const getUsers=()=>{
      return new Promise(async (resolve,reject)=>{
        const {data}=await axios('https://jsonplaceholder.typicode.com/users');
        resolve(data)
      })
    }
    
    //Promise.all
    Promise.all([getPost(1),getUsers()]).then(console.log).catch(console.log);// birden çok promise metodunu, sıralı bir şekilde çalıştırmaya yarar!

//fetch
//GET
fetch(jsonplaceholderAPI + "/posts/1")
    .then(response => response.json())
    .then(data => console.log(data));


const newPost = { userId: 3, title: "Lorem", body: "ipsum" };
const newTodo = { userId: 3, title: "Lorem", completed: false };

//POST(EKLEME)
fetch(jsonplaceholderAPI + "/posts/", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
})
    .then(response => console.log(response.status))

//POST FUNCTION
const createTodo = (_newTodo) => {
    return fetch(jsonplaceholderAPI + "/todos/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(_newTodo)
    })
        .then(response => {
            console.log(response.json())
            return response});
}

 createTodo(newTodo).then(todoResponse => console.log(todoResponse.status));

//PUT(GÜNCELLEME)
// fetch(jsonplaceholderAPI + "/todos/" + id, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedData),
//   }).then(response => console.log(response.status));

//PUT FUNCTION
const updateData = async (id, updatedData) => {
    const response = await fetch(jsonplaceholderAPI + "/todos/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const updatedItem = await response.json();
    console.log("Güncellenen veri:", updatedItem);
  };
  
  const updatedData = {
    title: "Güncellenmiş veri",
    completed: true,
  };
  
  updateData(1, updatedData);

  //PATCH
  const updateData2 = async (id, updatedData) => {
    const response = await fetch(jsonplaceholderAPI + "/todos/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const updatedItem = await response.json();
    console.log("Güncellenen veri:", updatedItem);
  };
  
  const updatedData2 = {
    title: "Güncellenmiş veri",
    completed: true,
  };
  
  updateData2(1, updatedData2);

//NOT:Update ile Patch arasındaki fark?
//PATCH işlemi, belirli bir kaydın sadece belirli alanlarını güncellemek için kullanılır.Update ise belirli kaydın tamamında değişiklik yani güncelleme yapmamıza olanak sağlar!

  //DELETE
  const deleteData = async (id) => {
    const response = await fetch(jsonplaceholderAPI + "/todos/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
        console.log(response.status)
      console.log("Veri başarıyla silindi");
    } else {
      console.log("Veri silinirken bir hata oluştu");
    }
  };
  
  deleteData(1);
//--------------------------------------------------AXIOS-----------------------------------------------------
  //AXIOS =>bunu kullanabilmek için projeye import edilmelidir! fetch den farkı ise {data} dediğimizde doğrudan dataları alacak ve json() metodunu kullanmadan otomatik olarak json nesnesini js nesnesine çevirecektir.Yani fetch deki gibi manuel olarak yapmamıza gerek kalmamaktadır.fakat dediğim gibi ya kullandığınız yere import edersiniz ya da cdn olarak kodun kullanılacağı html sayfasına cdn'ini eklemelisiniz!
  const axiosFunc=async ()=>{
    const {data:users}=await axios("https://jsonplaceholder.typicode.com/users");
    console.log(users)
  };
axiosFunc();



//**********************************NOT ***************************/
// readyState özelliği, bir HTTP isteğinin durumunu belirten bir değerdir. Bu özelliği kullanarak, bir XMLHttpRequest veya Fetch API'si ile gönderilen bir isteğin hangi aşamada olduğunu kontrol edebilirsiniz. JavaScript'te readyState özelliği, 0'dan 4'e kadar değerler alabilir ve her bir değer belirli bir aşamayı temsil eder. Aşağıda bu değerlerin anlamları açıklanmaktadır:

// 0 (UNSENT): İstek oluşturulmadı veya açılmadı.
// 1 (OPENED): İstek açıldı. open() metodu çağrıldı ancak henüz istek gönderilmedi.
// 2 (HEADERS_RECEIVED): İstek gönderildi ve başlık bilgileri alındı. Başlık bilgileri, sunucunun yanıtında bulunan HTTP başlıklarını içerir.
// 3 (LOADING): Yanıt alınıyor. Yanıtın veri kısmı henüz tamamlanmadı. İsteğin tamamı henüz tamamlanmamış olabilir.
// 4 (DONE): İstek tamamlandı ve yanıt alındı. Bu aşamada, tüm veri alındı ve kullanılabilir durumdadır.
// Bu değerlere XMLHttpRequest nesnesi üzerinden readyState özelliği ile erişebilirsiniz. 

//******************************NOT2 ******************************/
//XHR İLE FETCH APİ ARASINDAKİ KIYASLAMA
// Bu durumda, tercih edilen yaklaşım genellikle fetch API'sini kullanmaktır. Bunun birkaç nedeni vardır:

// Daha modern bir API: fetch API'si, tarayıcılar tarafından desteklenen ve daha yeni bir standarttır. XMLHttpRequest (XHR) yöntemi ise daha eski bir yöntemdir ve daha düşük seviyede işlem yapmayı gerektirir.

// Daha kolay kullanım: fetch API'si, Promise tabanlı bir yapıya sahiptir ve Promise zincirlemesi ile asenkron işlemleri yönetmek daha kolaydır. XMLHttpRequest yöntemi ise daha düşük seviyeli bir API olduğu için kullanımı daha karmaşık olabilir.

// Daha geniş tarayıcı desteği: fetch API'si, daha yeni bir standart olduğu için daha geniş bir tarayıcı desteğine sahiptir. XMLHttpRequest yöntemi, özellikle eski tarayıcılarda tam olarak desteklenmeyebilir.

// JSON işleme entegrasyonu: fetch API'si, fetch ile gelen verileri JSON formatında otomatik olarak işleyebilir. Bu nedenle, JSON verileriyle çalışırken ek dönüşümler yapmanız gerekmez. XMLHttpRequest yönteminde ise ayrıca JSON.parse() gibi işlemlerle gelen verileri ayrıştırmanız gerekir.

// Bu nedenlerle, genellikle fetch API'si daha tercih edilen bir yöntemdir. Ancak, projenizin gereksinimlerine, tarayıcı desteğine ve kullanım senaryonuza bağlı olarak, XMLHttpRequest yöntemini kullanmak da mümkün olabilir.


//*********************************NOT3 *********************************/
//JS İLE JSON DÖNÜŞÜMLERİ
//JSON.stringify() yöntemi, JavaScript nesnesini JSON formatına dönüştürerek, bir JSON dizesi olarak temsil eder.tam tersi durumda ise response.JSON() ile js nesnesine çeviririz

//************************************NOT4 **************************************/
//JS İLE JSON ARASINDAKİ FARKLILIKLAR
//js nesnesini json dizesine çevirmek:
const myObject = { key1: "value1", key2: "value2", key3: "value3",key4:2 };

const jsonString = JSON.stringify(myObject);//json nesnesi

console.log(jsonString);//{"key1":"value1","key2":"value2","key3":"value3"}
//console.log(jsonString.key1); => bu bir json dizesi olduğu için ve tamamen string bir dize olduğu için içerisindeki herhangi bir key'e ulaşılamaz!
//json verisini js nesnesine çevirmek:

const jsonString2 = '{"key1":"value1","key2":"value2","key3":"value3","key4":2}';//json nesnesi

const jsonObject = JSON.parse(jsonString2); //js nesnesi

 

console.log(jsonObject);
console.log(jsonObject.key1);//fakat burada artık bir js nesnesi olduğu için içerisinden ulaşılabilir.

// JSON ve JavaScript nesneleri arasındaki farklar şunlardır:

// Sözdizimleri: JSON, bir metin formatıdır ve dize olarak temsil edilir. JSON'da anahtarlar ve değerler çift tırnaklarla çevrilir ve anahtarlar çift tırnakla belirtilir. JavaScript nesneleri ise JavaScript programlama dilinde doğrudan kullanılan bir veri yapısıdır ve JavaScript kodunda tanımlanır.

// İşlevsellik: JSON, sadece verileri temsil eder ve JSON dizesi olarak kullanılır. JavaScript nesneleri ise işlevsellik sağlar, yani özelliklere ve metotlara sahip olabilir. JavaScript nesneleri programlama dili içinde kullanılırken, JSON genellikle veri alışverişi için kullanılır.

// Kullanım Alanı: JSON, veri alışverişi ve verilerin depolanması için yaygın olarak kullanılır. JSON, verileri farklı platformlar ve diller arasında aktarmak için bir standarttır. JavaScript nesneleri ise JavaScript programlama dilinde kod yazarken kullanılır.

// Özetlemek gerekirse, JSON bir veri değişim formatıdır ve metin tabanlıdır. JavaScript nesneleri ise JavaScript programlama dilinde kullanılan veri yapısıdır ve işlevsellik sağlar. JSON, JavaScript nesnelerini temsil edebilir, ancak tam tersi geçerli değildir.

//********************************NOT5 *****************************************/
// response.json() ve JSON.parse() arasında benzerlikler vardır, ancak farklı işlemleri gerçekleştirirler.

// response.json() yöntemi, fetch API'si veya XMLHttpRequest ile yapılan bir HTTP isteğinin yanıtının gövdesini alır ve bu gövdeyi otomatik olarak JavaScript nesnesine dönüştürür. Yani, API'den gelen JSON verisini doğrudan JavaScript nesnesine dönüştürmeyi sağlar.
//ÖRNEK
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     // API'den gelen JSON verisi JavaScript nesnesine dönüştürüldü
//     console.log(data);
//     console.log(data.key1);
//   });

//JSON.parse() yöntemi ise, bir JSON dizesini (text) alır ve bu dizeyi JavaScript nesnesine dönüştürür. Yani, JSON formatındaki bir dizeyi JavaScript nesnesine dönüştürmek için kullanılır.
//ÖRNEK
// const jsonString = '{"key1":"value1","key2":"value2","key3":"value3"}';

// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject);
// console.log(jsonObject.key1);

//**************************************NOT6 ****************************************/
//FETCH VE PROMISE NEDİR?
//fetch ve Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan kavramlardır.

//fetch, web tarayıcılarında kullanılan bir API'dir ve ağ üzerinden kaynaklara (örneğin, API'lar) HTTP istekleri yapmak için kullanılır. fetch, HTTP isteklerini yapar ve sonucunu bir Promise nesnesi olarak döndürür. Bu Promise, isteğin sonucunu temsil eder ve işlemlerin ardışık bir şekilde gerçekleştirilmesine olanak sağlar.
//ÖRNEK KULLANIM
// fetch('https://api.example.com/data')
//   .then(response => {
//     // HTTP isteği başarıyla tamamlandı
//     console.log(response);
//   })
//   .catch(error => {
//     // Hata durumunda işlemler
//     console.error(error);
//   });
//Bu örnekte, fetch işlemi bir API'den veri almak için kullanılıyor. fetch fonksiyonu, bir HTTP isteği yapar ve sonucunu bir Promise olarak döndürür. Ardından, then() bloğunda isteğin sonucu elde edilir veya catch() bloğunda oluşan hatalar yönetilir.

//Promise ise, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır. Bir Promise, gelecekte tamamlanacak bir işlemin sonucunu temsil eder. Bu işlem tamamlandığında (resolve), Promise'ın then() yöntemiyle sonucu elde edilebilir. Ayrıca, hata durumlarında (reject), catch() yöntemiyle hata işleme yapılabilir.
//ÖRNEK KULLANIMI
// const myPromise = new Promise((resolve, reject) => {
//     // Asenkron işlemler
//     if (true) {
//       resolve("İşlem başarılı"); // İşlem tamamlandığında sonuç döndürme
//     } else {
//       reject("İşlem hatası"); // Hata durumunda hata döndürme
//     }
//   });
  
//   myPromise
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.error(error);
//     });
//Bu örnekte, Promise oluşturulur ve içinde asenkron bir işlem gerçekleştirilir. İşlem tamamlandığında resolve() metoduyla sonuç döndürülür veya hata durumunda reject() metoduyla hata döndürülür. Ardından, then() bloğunda işlem sonucu elde edilir veya catch() bloğunda hata yönetimi yapılır.

//Özetle, fetch API'si HTTP isteklerini yönetmek için kullanılırken, Promise asenkron işlemleri yönetmek için kullanılır. fetch fonksiyonu sonucunu bir Promise olarak döndürür ve then() ve catch() yöntemleriyle sonuçları işlenebilir.



//*********************************************NOT7 *******************************/
//PROMISE THEN() VE CATCH() NEDİR?
// then() ve catch() yöntemleri, fetch API'si ile yapılan HTTP isteklerinin sonuçlarını işlemek için kullanılan Promise tabanlı yöntemlerdir.

// then() yöntemi, bir Promise nesnesinin başarı durumunda gerçekleştirilmesi gereken işlemleri tanımlamak için kullanılır. fetch işlemi başarıyla tamamlandığında, then() yöntemi çalıştırılır ve işlem sonucu alınır.

//catch() yöntemi ise, bir Promise nesnesinin hata durumunda gerçekleştirilmesi gereken işlemleri tanımlamak için kullanılır. Bir önceki then() bloğunda veya başka bir yerde oluşan hataları yakalamak ve işlemek için kullanılır.
//ÖRNEK
// fetch('https://api.example.com/data')
//   .then(response => {
//     // HTTP isteği başarıyla tamamlandı
//     console.log(response);
//     return response.json(); // JSON dönüşümü
//   })
//   .then(data => {
//     // JSON verisi elde edildi
//     console.log(data);
//   })
//   .catch(error => {
//     // Hata durumunda işlemler
//     console.error(error);
//   });