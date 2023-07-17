// Object ve Array Destructuring Nasil Kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

  let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1", 
    serverName: "atsepete.com"
  }

  let auths = {
    userName: "resulMutluer",
    password: "GoodPassword",
    isActive: true,
    ip: "127.0.1.1", 
    serverName: "devhell.com"
  }
  
  // obje icindeki bilgilerin tek seferde cikarilmasi
  // let userName = settings.userName
  // console.log(userName)
  
  // rename && destructuring
  let { userName:user, password:pass, isActive, ip:serverIP, serverName} = settings// burada settings içerisindeki userName property'sine karşılık gelen yeni nesnedeki userName'i normal şartlarda kullanmadan direkt olarak user ile yakalayamayız.Ancak userName:user dersek artık user propety name ile yakalayabiliriz!

  let {userName: rename, password:pass_word, ...other} = auths;
  console.log(user, pass, isActive, serverIP, serverName)
  console.log(settings)
  console.log(auths)
  console.log(user)
  console.log(pass)
  console.log(rename)
  console.log(pass_word)
  console.log(other)
  
  
  // obje icindeki bazi bilgilerin cikarilmasi
  let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
  // eger degisken ismi daha once tanimlanmadiysa:
  // let {userName, password, isActive, ...newSettings} = settings
  
  console.log(userName2, password2, isActive2, newSettings)
  
  // objenin destructuring ile kopyalanmasi
  
  // HATALI!!!
//   let settings2 = settings
//   settings2.userName = "Degisen Bilgi"
//   console.log("settings", settings)
//   console.log("settings2", settings2)
  
  // DOGRUSU :)
  let settings2 = {...settings}//burada başka bir nesne referansı kullanmadan yani 50.satırdaki gibi shallow copy yapmadan doğrudan yeni bir nesne tanımlar gibi tanımlıyoruz
  settings2.userName = "Degisen Bilgi"
  console.log("settings", settings)
  console.log("settings2", settings2)

  
  let score = [100, 200, 300, 400,500,600,700]
  console.log(...score)
  
  let [score1, score2, ...otherScore] = score
  console.log(score1, score2, otherScore)
  
  // object kopyalama ile ayni... let settings2 = {...settings} //Deep copy yapılır farklı referanslar ve aynı nesneyi işaretlemez farklı nesneleri işaretler böylelikle herhangi birinde yapılan değişiklik diğerini etkilemez!
  let copyOfScore = [...score]
  copyOfScore[0]=500;
  console.log(copyOfScore)//[500, 200, 300, 400,500,600,700]
  console.log(score)//[100, 200, 300, 400,500,600,700]