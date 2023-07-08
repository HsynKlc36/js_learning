//localStorage Egzersiz

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')):0//number .'a cast etmemizin amacı set ederken sitring olarak veriyi tuttugu için gette de string olarak getirecektir fakat ben kaldığı yerden eğer sayı varsa number'a çevir işlem devam etsin diyorum yoksa da  localStorage da değer sıfırdan başla diyorum.eğer Number'a çevirmeseyim örneğin counter=3 dü en son sonra sayfayı yeniden açtığımda arttır dediğim zaman string olacağı için 31111 diye gidecekti!!!
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter;
increaseDOM.addEventListener('click', eventFonk)
decreaseDOM.addEventListener('click', eventFonk)



function eventFonk() {
    console.log(this.id)
    if (this.id == 'increase') {
        counterDOM.innerHTML = counter += 1;
        localStorage.setItem('counter',counter)
    } else {
        counterDOM.innerHTML = counter -= 1;
        localStorage.setItem('counter', counter)
    }

}