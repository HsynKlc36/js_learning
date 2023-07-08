//Local Storage Islemleri

let user = {
    username: "hüseyin",
    surname:"kilic",
    isActive: true,
    price:100,
    score:50,
    age:null
};
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user))//bu şekilde yazmamızın sebebi object olarak değilde string olarak almak için.
localStorage.setItem('user',user)//direkt object olarak görünecektir local storage' de [object Object] json verisi.
let userInfo = localStorage.getItem('userInfo')//bilgiyi al fakat bilgiyi string olarak alacaktır ben içerisindeki veriye ulaşamam yani userfInfo.username yaparsam bilgi gelmez çünkü string
console.log(userInfo)
userInfo = JSON.parse(userInfo) //json nesnesine parse ettik ve 19. satırda bu nesnenin içerisindeki veriye ulaştık!
console.log(userInfo)
console.log(userInfo.isActive) // true gelecektir çünkü ulaşabiliyorum

//ARRAY
let items = [1, 2, 3, user]
localStorage.setItem('newItem', JSON.stringify(items))
let itemInfo = localStorage.getItem('newItem')// string olarak alırım
console.log(itemInfo)
itemInfo = JSON.parse(itemInfo)
console.log(itemInfo)
console.log(itemInfo[3])// artık obje olarak çagırdğım için içerisinden herhangi bir veriyi alabilitim
console.log(itemInfo[3].username)// 3. indeksin içerisindeki veriyede ulaşabildim
console.log(itemInfo[3].isActive)// 3. indeksin içerisindeki veriyede ulaşabildim ve verinin türü neyse o türde ulaşırım yani nesne içerisindeki property'si isActive' e ulaşıyorsam boolean olarak true ya da false dönecektir.age döneceksem number vermişsem nesnede yine number olarak dönecektir!