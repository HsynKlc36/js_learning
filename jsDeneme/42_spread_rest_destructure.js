const studentObjList = [
    { name: "Halil Can Toptas", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 80 },
    { name: "Serkan Duman", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 70 },
    { name: "Aysenur Altinsoy", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 90 },
    { name: "Arkin Zat", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 65 },
];

const student1 = { name: "Halil Can Toptas", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 80 };

const studentNames = [
    "Mehmet İkbal Dündar",
    "Arkın Zat",
    "Ayşenur Altınsoy",
    "Derin Perinçek",
    "Enes Cihan"
];



//spread (ES6)
console.log(studentNames[0], studentNames[1], studentNames[2], studentNames[3], studentNames[4]);
console.log(...studentNames);//Mehmet İkbal Dündar Arkın Zat Ayşenur Altınsoy Derin Perinçek Enes Cihan
console.log([...studentNames]);//[ "Mehmet İkbal Dündar","Arkın Zat","Ayşenur Altınsoy","Derin Perinçek","Enes Cihan",]

const newStudentNames = ["Hazel Calkar", ...studentNames, "Serkan Temiz"];
console.log(newStudentNames);//["Hazel Calkar", "Mehmet İkbal Dündar","Arkın Zat","Ayşenur Altınsoy","Derin Perinçek","Enes Cihan","Serkan Temiz"]

const student2 = { ...student1, name: "Osman Bursa", age: 27 };
console.log(student2);// student2 = { name: "Osman Bursa", course: "Frontend Dev", instructor: "Orkun Durmaz", score: 80,age:27 };

//rest
const greetAll = (param1,param2, ...people) => {
    console.log(people)//['Orkun','Osman']
    console.log(param1)//Ikbal
    console.log(param2)//Arkın
}

greetAll("Ikbal", "Arkin", "Orkun","Osman");

const greetArray = ([param1, ...param2]) => {
    console.log(param2)//["Arkın Zat","Ayşenur Altınsoy","Derin Perinçek","Enes Cihan"]
    console.log(param1)//Mehmet İkbal Dündar
}
greetArray(studentNames);

//Not:aşağıda rest uygulamadık! fakat dizinin ilk iki parametresini yakaladık! kalan kısmı rest ile alabilirdik fakat kullanmayacağımız için almadık!
const greetArray2 = ([param1, param2]) => {
    console.log(param1)//Mehmet İkbal Dündar
    console.log(param2)//Arkın Zat
}
greetArray2(studentNames);


//destructure
// const studentName1 = studentNames[0];
// const studentName2 = studentNames[1];
// const studentName3 = studentNames[2];

// const studentProp1 = student.name;
// const studentProp2 = student.course;
// const studentProp3 = student.name;

const [studentName1, studentName2, studentName3, ...restOfStudents] = studentNames;
const [studentName, ...restOf] = studentNames;
console.log(restOf)//['Arkın Zat', 'Ayşenur Altınsoy', 'Derin Perinçek', 'Enes Cihan']
console.log(studentName2);//Arkın Zat
const { name, course, ...instructor } = student1;// nesne içerisinde destructure yapılan öğeler 1 den fazla ise nesne şeklinde fakat 1 tane ise o keye karşılık gelen value'yu doğrudan getirir.İsim olarak propert'ler eşleşmelidir yani name yazmazsak student1 içerisindeki name propert'siyle eşleşmeyecektir! .Sadece ...instructor yerine farklı isimlendirme yapılabilir.Çünkü içerisinde birden fazla prop olacağı için doğrudan bir property'nin adıyla eşleşmeyecek ve bu yüzden doğrudan prop adı  taşımayacağından farklı isimle tanımlanabilir.mesela aşağıda görüldüğü gibi hem instructor hemde score'u tutmaktadır yani ...abc olarak bile tanımlayabilirim !
console.log(instructor);//{instructor:'Orkun Durmaz',score:80}
console.log(course);//Frontend Dev