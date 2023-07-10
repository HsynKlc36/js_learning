// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapilacak islem
// }

let users = ["lorem", "ipsum", "mahmut", "resul", "hüseyin", "furkan"]
let domxxx = document.querySelector('#xxx')//ul
for (let i = 0; i < users.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = users[i]
    console.log(users[i]);
    domxxx.appendChild(li)
        
}