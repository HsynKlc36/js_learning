// While Dongusu
// https://www.w3schools.com/js/js_loop_while.asp

let counter = 0
while (counter < 10) {
    console.log(counter)//9 da dahil olmak olma üzere console'a yazar!
    counter++
}

let userName=""
while (!userName) {
   userName = prompt('kullanıcı adını giriniz:')
   console.log(userName)

}

let arabaa = ["audi", "mercedes", "volvo", "porsche", "kartal", "honda", "bmw", "nissan"]

let i=0
while (i < arabaa.length) {
    console.log(arabaa[i])
    i++;
}