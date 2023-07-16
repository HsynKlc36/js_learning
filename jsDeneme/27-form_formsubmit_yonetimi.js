
// FORM SUBMİT

let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit', formSubmit)//submitlerde formun eventleriyle işlem yaparız yani butonuna clicklendiğinde değilde form submit edildiğinde olarak düşünürüz.

function formSubmit(event) {
     event.preventDefault();// get işlemini yapma ben söyleyene kadar hiçbir işlem yapma demek default işlemi engelledik.Yani get işleminde kalır butona tıklasanda formu göndermez.İşlemin yapılmasını engeller.
    //event.stopPropagation();//yayılmayı engeller!
    console.log("işlem gerçekleştirildi")
    
}
    //örnek2
    var username;
    var password;
    function handleSubmit(e) {
        e.preventDefault();
        console.log("username:" + username + "-" + "password:" + password);
    }


    function handleChange(e) {
        if (e.target.name === "username") {
            username = e.target.value;
            console.log(username)
        }
        if (e.target.name === "password") {
            password = e.target.value;
            console.log(password)
        }
    }

/*Yukarıdaki örneğimizde onSubmit event'i için handleSubmit, onChange event'i için handleChange function'larını kullanıyoruz. handleChange'e ve handleSubmit'e tetiklenen değeri yani event'i gönderiyoruz ve function'larımızda karşılıyoruz. handleChange'te(e.target.name) hangi input'un değerini okuduğumuzu e.target.value ise o input'un value'sunu verir.Bu değerleri globalde tanımladığımız değişkenlere atadık. Böylece submit olduğumuz anda bu değerleri artık kullanabilir duruma geldik. Bu değer ile artık formumuz submit olduğunda ne yapmak istiyorsak onu yapabiliriz.*/
// e burada eventtir yani tetiklenen değer.ve bunları fonkisyonlarımızda karşılıyoruz. e.target.name=>hangi inputun değerini okuduğumuzu e.target.value=>o input'un value'sunu verir.

//onSubmit ve onChange Eventleri

//onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.

//onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.

//Şimdi gelin aklımızda daha çok canlanması için iki farklı methodu kullanarak bir örnek geliştirelim ve bir kullanıcı giriş formu tasarlayalım.

/*GET Methodu: Form verilerini URL üzerinden gönderir.Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun.Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.*/

/*POST Methodu: Verileri arka planda gönderir.Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.*/

//Form Özellikleri
//ACTION: action = Formunuzu submit ettikten sonra nasıl bir aksiyon alacağını belirlersiniz.Genellikle formlarda gönderi işlemi tamamlandıktan sonra form datası server'a gönderilir. Fakat server haricinde kendimiz bu form datasını başka bir dosyaya atayabiliriz. Örneğimizde görüleceği gibi dosyamız "script.js" adlı bir dosyaya gönderiliyor. Form datasının yönetimi bundan sonra bu dosya üzerinden yürütülür.
//Örnek kullanım < form action = "/script.js" ></form >

//    METHOD: method = Form datanızın hangi methodla gönderileceğine karar verir. "Get" veya "Post" request olarak.Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır.
//Örnek kullanım < form action = "/script.js" method = "get" > " veya " < form action = "/script.js" method = "post" >

//    AUTOCOMPLETE: autocomplete = Ingilizce isminden de anlaşılacağı üzere formunuzda otomatik tamamlama özelliğini açıp veya kapatmak için işinize yarar.Bu özelliği açmak daha önceki entry'lerinize göre formun tamamlama yapmasını sağlayacaktır.
//Örnek kullanım < form action = "/script.js" autocomplete = "on" > veya < form action = "/script.js" autocomplete = "off" >

//    NOVALIDATE: novalidate = Aktif olduğu sürece gönderdiğiniz form datanızın otomatik olarak doğrulanmamasını söyler.
//Örnek kullanım "<form action=" / my_script.js" novalidate>"

//Form tag'lerinizde birden fazla element bulundurabilirsiniz. Bunlardan olmazsa olmazı input'lar & butonlardır.Input elemanlarının başlıca özellikleri olarak;

//fname = Görünecek olan yazıyı belirler.Bu yazı, adete bir html etiketi gibi görünür.

//    type = Bu kısımda formunuzun text / numerik bir form olacağına karar verirsiniz.

//        name = Input'unuzun name özelliğini belirlersiniz. Genelde isimlendirme küçük harf verilir backend kısmına uygun olması için

//value = Input'taki aktif görünecek olan yazı için verilir. Örnek olarak butonların üzerindeki yazı gibi düşünebiliriz.