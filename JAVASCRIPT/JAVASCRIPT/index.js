// document.getElementById("bir");
// document.getElementsByClassName("ikki");
// document.getElementsByTagName("div");

// let teg = document.getElementById("bir")
// if(teg == 0){
//       teg.innerHTML = ("Salom Java")
// }

// function creat() {
//       let element = document.getElementsByClassName("one");
//       let div = element[1]
//       if(div != 0){
//             div.innerHTML = ("Yangi text")
//       }
// }
// document.baseURI.appendChild(btn)

//Toplamlar- Arrey,Object

// let person = ["Palonchiyev","Sitora",100,true]

// console.log(person[2],person[3]);

// let person = {
//       fam:"Palonchiyev",
//       ism:"Sitora",
//       yosh:100,
//       study:true,
//       hoby:["music","bekorchi","uyquchi"],
//       manzil:{
//             tuman:"Qo'rgontepa",
//             Mfy:["jchjc","kjbck"]
//       }
// }
// console.log(person.manzil.Mfy[1]);

// let ism = ["Daniel","Omadbek",12,26]

// console.log(ism[0],ism[2]);

// let maktab = {
//       son:{
//             2009:20,
//             2010:100
//       },
//       manzil:["Andijon","Qorgon","oyim"],
//       oquv:12000
// }
// console.log(maktab.son[2010]);




//Arrey metot

// let str = ["Abdulloh","Daniel","Qobiljon","Omadbek","Odiljon"]
// str.shift()
// str.unshift('Azizbek');
// console.log(str);

//   .join (…) – arrayni stringga aylantiradi
//   .length – arradagi ma’lumotlar soni
//   .concat(…) – bir nechta arrayni yaxlit bitta arrayga aylantiradi
//   .unshift(…) – array boshiga yangi element qo’shadi
//   .shift(…) – array boshidagi elementni o’chiradi
//   .push(…) – array oxiriga yangi element qo’shadi
//   .pop(…) – array oxiridan elementni olib tashlaydi
//   .reverse() – arrayni teskari tartibda saralaydi
//   .sort() – arraydagi ma’lumotni tartib bilan saralaydi

// for(let a = 0; a < son.length;a++)

// const std = [20,30];
// const yig = 40
// function plus(std) {
//       let a = 0;
//     for(let sep of std){
//         if(a += sep){ 
//            console.log([a]);
//         }

//     }
// }
// plus(std);


// let son = [1,2,3,3,4];
// let tar = 7;
// function get(son) {
//       for(let a = 0; a <= son.length;a++){
//             for(let i = a;i < son.length;i++){
//                   if(son[a] + son[i] == tar){
//                        return [a,i]
//                   }
//             }
//       }
// }
// console.log(get(son));



// let x = [20,30]

// function plus(x) {
//       for(let a = 0; a < x.length;a++){
//      for(let i = 0; i < x.length;i++){
//       if(a + i <= 30){
//             console.log("jhdsf");
//            }
//            else{
//             console.log('uhiu');
//            }
//      }
//       }
// }
// plus(x);




// function plus(pul) {
//       for(let a = 1;a < pul.length;a++){
            
//                   if(pul[a]+pul[a-1] === sovga){
//                         console.log('Chiqadi!');
//                   }else{
//                         console.log('Chiqmidi!');
//                   }
//       }
// }
// plus(pul)


// let inter = setInterval(run, 300);

// let num = [1,2,3,4,5,6,7,8,9,10,11];
// let item = 0;

// function run(params) {
//       item++;
//       if(item == num.length){
//             item = 0
//       }
//       document.getElementById("hed").innerHTML = num[item]
// }

// let names = ["Guli","Aziz","Barno","Lola"]

// for(let name of names){
//       console.log(name[0]);
// }

// let pul = [20,50,70]
// function Gift(pul) {
//       let son = 0;
//       for(let num of pul){
//             if(son += num /2){
//                   console.log(son);
//             }
//       }
// }
// Gift(pul)

// const movie = [
      
//             {title:"Avatar", yil:2022, rey:1},
//            {title:"Gari Potter", yil:1991,rey:2},
//            { title:"Legenda",yil:2015, rey:1},
//             {title:"O'tkan Kunlar",yil:1980,rey:4}
      
// ]

// let title = movie
//       .filter(b => b.yil == 2000 && b.rey == 1)
//       .sort((a,b) => a.yil - b.yil)
//       .map(b => b.title)

//       console.log(title);



// function plus(a,n) {
//       for(let i = 1;i <= n;i++){
//             console.log((a ** i) + (a ** i));
//       }
// }
// plus(2,8);


// function narx(kg,n) {
//       for(let i = 1;i <= n;i++){
//             console.log(kg ** i);
//       }
// }
// narx(3,6)

// let yosh = prompt("Yoshni yoz");

// if(yosh <= 13){
//       alert(`Togri ${yosh}`);
// }
// else{
//      alert(`Notogri ${yosh}`);
// }

// 3

function plus(a,b) {
      
}

plus(2,8)