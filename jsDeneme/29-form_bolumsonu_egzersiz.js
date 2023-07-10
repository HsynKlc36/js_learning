// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)// form submit edildiğinde aşağıdaki formHandler metodu çalışacaktır.
let alertDOM = document.querySelector('#alert')//div'i getirir ve daha sonrasında div içerisine aşağıdaki fonksiyonu ekleyerek boş submit edilirse ekranda alert yazısının verilmesini sağlarız.

const alertFunction = (title, message, className = "warning") => `<div class="alert alert-${className}" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
//bootstraptan aldığımız kodu fonksiyon haline getirerek dinamik hal kazandırdık
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username').value
    const SCORE = document.querySelector('#score').value
    if (USER_NAME && SCORE) {
        addItem(USER_NAME, SCORE)// aşağıdaki addItem metodunu çalıştırır ve userListDOM(ul) içerisine li eklemek için kullanılır. 
        USER_NAME = ""// gönderdikten sonra sıfırladık
        SCORE=""
    } else {
        
        alertDOM.innerHTML = alertFunction('Başlık bilgisi','eksik bilgi girdiniz','danger')
    }
    
}

const userListDOM = document.querySelector('#userList')// ul'yi verir  
const addItem=(userName, score) => {
    let li = document.createElement('li')
    li.innerHTML = `${userName}  <span class="badge bg-primary rounded-pill">${score}</span> `
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(li)
}