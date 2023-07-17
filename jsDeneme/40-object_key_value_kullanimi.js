// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// const { entries } = require("../03-bootstrap-kategorisi/bolum-sonu-projesi/fontawesome/js/v4-shims")

// [key1:value1, key1:value2, key3:value3, .... ]
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,// rakam ile başlatmak istiyorsak tırnaklar içerisine almalıyız 
    modelName: "MacBook Pro",
    // model-name: "MacBook Pro",
    model_name: "MacBook Pro"
}

console.log(laptop1)
// Dogru Anahtar Bilgisi Olusturmak

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
laptop1['version2'] = "10.15.8"
console.log(laptop1)

// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
laptop1Keys = Object.keys(laptop1)// key bilgilerinde sadece ve sadece keyler gelecektir onlara atanan değerler gelmez.brand,model,version bunlar gelecektir ve keyler dizi halinde gelecektir.
console.log(laptop1Keys)// ['brand', 'model', '2kg', 'modelName', 'model_name', 'version', 'version2']
console.log(Object.keys(laptop1))// ['brand', 'model', '2kg', 'modelName', 'model_name', 'version', 'version2']

laptop1Keys.forEach(item => {
    console.log(item)
    console.log(laptop1[item])
})

// Deger Bilgilerine Ulasmak (values) -> Object.values(item) nesne dizi değildir ama values değerlerini dizi seklinde döndürür.
console.log(
    Object.values(laptop1)//['Mac1', 'MacBook Pro', 2, 'MacBook Pro', 'MacBook Pro', '10.15.7', '10.15.8']
)

let values = Object.values(laptop1)

values.forEach((value,index )=> {
    console.log("value: ", value)
    console.log(values[index])
})

// tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)
let setting = {
    password: 1234,
    userName: 'user1'
}
// entries =>nesne yi key value olarak diziye çevirir [[2],[2],[2]] key value ikilisi olarak dizi şeklinde getirir.
console.log(Object.entries(laptop1));
console.log(Object.entries(setting));