// Object icinde metot nasil ekleriz

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName:()=> `${user1.firstName[0].toUpperCase()}. ${user1.lastName} ${user1.score[2]}`,
    shortName2 : function() {
         return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
     }
};

//Not: this keyword'ü klasik function tanımlamada kullanılır. Arrow function'larda tanımaz!

console.log(user1)
console.log(user1.shortName())
console.log(user1.shortName2())
console.log(user1.hasOwnProperty('lastName')) //user1 içerisinde böyle bir prop varsa true yoksa false döner!

//Metot Nedir ?
//    JavaScript'in referans veri tiplerinden biri olan ve Türkçede "nesne" anlamına gelen object key-value (anahtar-değer) yapı mantığına sahip bir veri tipidir. Yani bir nesne oluştururken bu nesnemiz için bir veya birden fazla property (özellik) tanımlanabilir ve key-value mantığındaki gibi nesnemizin sahip olduğu özellikler için değerler verilmelidir. Özelliklerin sahip olduğu değerler farklı veri tiplerinde olabileceği gibi bir fonksiyonu da işaret edebilir. Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe metot denir.

//Bir nesneye metot 2 şekilde eklenebilir.Bunlardan biri yukarda bahsedildiği üzere nesneye property olarak eklemek, bir diğeri ise prototype(prototip) fonksiyonu üzerinden eklemektir.