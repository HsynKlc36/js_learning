// Break & Continue
// https://www.w3schools.com/js/js_break.asp
const LOREM_LIST = [
    'lorem','ipsum','dolar','amet','consectetur','adipisicing','elit'
    ]
    
    
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            break // döngüden çıkar yani döngüyü kırmaya yarar!
        }
        console.log(i)
    }
    
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            continue // bunu es geç ve başa dön i değerini 1 arttır ve tekrar işlemi yap
        }
        console.log(i)
    }
    
    const UL_DOM = document.querySelector('#userList')//ul
    for (var i = 0; i < LOREM_LIST.length; i++) {
        if (LOREM_LIST[i]=== 'amet') {
            continue
        }
        if (LOREM_LIST[i] === 'adipisicing') {
            const li = document.createElement('li')
            li.innerHTML = 'ben yoruldum hayat'
            UL_DOM.appendChild(li)
            break
        }
        console.log(LOREM_LIST[i])
    }