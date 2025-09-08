console.log("hello")
// var naam= prompt("what your name?")
// console.log("your name is:",naam)
// var a ="sathak"
// var b =4
// console.log(a%b)
// var age=prompt("Enter your age")
//  if(age>=18){
//     console.log("you can vote")
//  }
//  else{ 
//     console.log("you can't vote")
//  }
  
 var a = 10 
 while(a>0){
    console.log(a)
    a--
   }
 for( var x=4;x<0;x--){ 
   console.log(x)
 }
 var a=8
 var b=8
 if (a==b){ console.log("right")}
 else{console.log("wrong")}

function hi(a){ 
   console.log("ga raha hu isme filme",a)
}
function hlo(a){
   console.log("dekh raha hu tumko code likh raha ho",a)
}
function day(){
   console.log("this is your game")

}
hi("good morning")
hlo("shyam")
day()

var guy =  (a)=> { console.log("hello validglobe",a)
   return "follow back"

}
var w= guy("how are you")
console.log(w)

// "var" and "let" may be same but if we use "const" then value never update 
const g = "rohan"
const y = "riya"

console.log(g,"weds",y)

var heydek = [10,"rahul","rohan",34.5]
   console.log(heydek)
   console.log(heydek[0])
   heydek.push(120)
   console.log(heydek)
   heydek.pop()
   console.log(heydek)
     
   var arr= [10,20,30,40,50,]
arr.forEach( function(h) {console.log("hello",h)})

function hy(u){
   console.log("hello children",u)
   return "take medicine if you are not felling well"
}
var hue= hy("how are you")
console.log(hue)
 var arre=[10,20,30,40,50,60,70,]

 arre.forEach(function(srt){
   console.log("count",srt)
 })

 arre.push(10)
 console.log(arre)
 
 arre.pop()
 console.log(arre)

 console.log(arre.length)
 console.log(arre[5])  //to call something in array

 var obj ={tem:"samsung",price:5000,color:"blue"}
 var obj1= {tem:"iphone",price:750000,color:"golden"}
 console.log(obj)    
 console.log(obj.tem)  //to call something in obj

var arr1 =[
   {name:"lalit",course:"btech"},
   {name:"rahul",course:"coaching"}
]
console.log(arr1)
console.log(arr1[1].name)

//DOM= document object model

var a = document.querySelector("h1")
console.log(a)



a.addEventListener("click",function(){ 
   console.log("hello")
   a.innerHTML= "there is no rahul"
a.style.color = "white"
a.style.backgroundColor= "crimson"
})

var rim =["software","hardware","there","hello"]
   console.log(rim)
consolole.log()
