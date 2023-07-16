//INPUT içindeki değeri(value) almak
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit', formSubmit)//submitlerde formun eventleriyle işlem yaparız yani butonuna clicklendiğinde değilde form submit edildiğinde olarak düşünürüz.

function formSubmit(event) {
    event.preventDefault();// get işlemini yapma ben söyleyene kadar hiçbir işlem yapma demek default işlemi engelledik.
    console.log("işlem gerçekleştirildi")

    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}

//inputlarda name bilgisi formların içerisinde bulundurulmalıdır.
//<form id="userForm">
//    <input type="number" name="scoreInput" id="score" /> input'a name verdik çünkü event tetiklenirken input name'leri ile kontrol sağlanır.Yani form da bir nesne kullanılmadıysa name'leri sayesinde value değerlerini alırız, post ettiğimiz yerde!
//    <button class="btn-btn-danger" type="reset">sıfırla</button>
//    <button class="btn btn-primary" type="submit">gönder</button>
//</form>

//Input Oluşturma
//Dinamik olarak input oluşturmak için;

var myInput = document.createElement("input");
//Input'umuzu oluşturduktan sonra gerekli olan özellik eklemelerini yapıyoruz.

myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type", "text");
myInput.setAttribute("value", "(dinamik oluşturuldu)");
myInput.setAttribute("name", "dinamik");
myInput.setAttribute('onchange', 'myInputChangeFunc(event)');//2. yol için bunu yazarız yine dinamik bir şekilde!!

//Böylece input ve özellikleri oluşturuldu.Şimdi HTML içine bu input'u yerleştiriyoruz.

//1.adım

//Body içine bir div oluşturalım. (Daha sonra input'u buraya atayacağız.)

var myDiv = document.createElement("div"); //şeklinde yapabiliriz.

//2.adım

//appendChild fonksiyonu ile input'u bu div'e ekleyelim.

myDiv.appendChild(myInput);

//ardından html içerisinde olan dinamik id'li div  ekleyelim
var dinDiv=document.getElementById('dinamik');
dinDiv.appendChild(myDiv);

//1.YOL
//myInputta değişiklik olduğunda burası tetiklenecektir
// myInput.addEventListener('change', (e)=>{
// //Artık input'umuz oluştu ve değerini alabiliriz.
//     var inputDeger = document.getElementById("inputumuz").value; 
//     var inputDeger2 = e.target.value; 
//     //55 ve 56. satırlar aynı değeri döndürür.
//     var inputName = e.target.name; 
// //Değeri alert olarak ekranda göstermek için;
//     window.alert(`${inputDeger} , ${inputDeger2} ve name: ${inputName}`)
// })

//2.YOL
const myInputChangeFunc=(e)=>{
    //Artık input'umuz oluştu ve değerini alabiliriz.
    var inputDeger = document.getElementById("inputumuz").value; 
    var inputDeger2 = e.target.value; 
    var inputName = e.target.name; 
    //Değeri alert olarak ekranda göstermek için;
    window.alert(`${inputDeger} , ${inputDeger2} ve name: ${inputName}`)
}