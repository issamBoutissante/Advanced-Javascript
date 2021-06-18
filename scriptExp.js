//Execution Stack
// function first(){
//     var a="Hello"
//     second()
//     var b=a+" My Code"
// }

// function second(){
//     var b="Azol flawn"
//     third()
//     var c=b+" ingbiwn i3zaan"
// }

// function third(){
//     var c="Done"
// }

// first()






//Hoisting

// f()

// function f(){
//   console.log("hi")
// }



// console.log(firstname)
 
// var firstname ="issam"



// function f(){
//   console.log(this)
// }
// f()
// var issam={
//     name:"issam",
//     age:"20",
//     sayHi:()=>{
//         console.log(this)
//     }
// }
// issam.sayHi()




// Contructor 

// function Constructor

// function Person(name,age){
//     this.name=name,
//     this.age=age
// }
// Person.prototype.showInfo=function(){
//     console.log(`${this.name} ${this.age}`)
// }

// console.log(Person.hasOwnProperty('ame'))

// var issam= new Person("issam",20)
// var chaimae= new Person("chaimae",21)
// var zakaria= new Person("zakaria",`🤔`)



// console.log(issam)
// console.log(chaimae)
// console.log(zakaria)





//Functions


//Function Declaration/Statement

// function f(){

// }

// //Function Expression
// var f2=function(){

// }

//Anonymous function

// function(){
//     console.log("hi")
// }

//IIFE function auto run

// (function(){
//     console.log("hi")
// }())

//Named function Expression

// var f2=function ft(){
//     ft()
// }


//Arrow Functions

// var f=()=>{

// }

// var f2=(a,b)=>a+b
// var f3=b=>b

// console.log(f2(2,3))

























//First Class Functions/Citizens




// var f=function(){

// }



// function square(a){
//     return a*a
// }
// function puissance(a){
//     return a**a
// }
// function somme(a){
//     return a+a
// }

// function x(f2){
//     console.log(f2(3))
// }

// x(somme)

































// function retirement(retirementAge){
//     var year=" years left for retirement"
//     return function(yearOfBirth){
//         var age=2021-yearOfBirth
//         console.log((retirementAge-age)+year)
//     }
// }
// var retirementMaroc=retirement(50)
// retirementMaroc(2000)












//example where we need clausers






//problem


// var count=0

// document.getElementById("login").
// addEventListener('click',function(){
//     console.log(`you have tried to login ${++count}`)
// })




// solution


// function attachEventListener(){
//     var count=0
//     document.getElementById("login").addEventListener('click',function(){
//         console.log(`you have tried to login ${++count}`)
//     })
// }
// attachEventListener()






// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();
// console.log(counter);

// The counter should now be 3


//////////////////////////////////////////////////////////////////////


// Asyncronous Vs Synchronous






//  Synchronous Example

// function second(){
//     console.log("mamka tgit ??")
// }

// function first(){
//     console.log("afin!")
//     second()
//     console.log("tsnt tachlhit ??")
// }

// first()






//  Asynchronous Example


// function second(){
//     setTimeout(function(){
//         console.log("mamka tgit ??")
//     },2000)
// }

// function first(){
//     console.log("afin!")
//     second()
//     console.log("tsnt tachlhit ??")
// }

// first()







//we will get products from china
//then when we receive the products we will send a product to a client
//then when the client receive product he will send us money







//  setTimeout(function(products){
//     try{
//         console.log(products)
//         console.log("the products have been received")
//         setTimeout(function(product){
//             try{
//                 console.log(`the ${product} has been received`)
//                 setTimeout(function(money){
//                     try{
//                         console.log(`wslatna ${money}`)
//                     }catch(error){
//                         console.log(error)
//                     }
//                 },2000,"3000 DH")
//             }catch(error){
//                 console.log(error)
//             }
//         },2000,products[2])
//     }catch(error){
//         console.log(error)
//     }
// },2000,["pc","mouse","TV"])








//promise


// var GetNatija=new Promise(function(resolve,reject){
//     try{
//         throw new Error("")
//         resolve(['data1','data2'])
//     }catch(err){
//         reject(err)
//     }
// })

// GetNatija.
// then(function(){
//     console.log("chri tonobila")
// })
// .catch(function(err){
//     console.log("khrj mn dar")
// })









// from callback hell to promises



//we will get products from china

var GetProdusts= new Promise(function(resolve,reject){
    try{
        setTimeout(() =>{
            resolve(["pc","mouse","TV"])
        },2000)
    }catch(error){
        reject(error)
    }
})


//then when we receive the products we will send a product to a client

function TakeProductToClient(product){
    return new Promise((resolve,reject) =>{
        try{
            setTimeout(() =>{
                resolve(product)    
            },2000)
        }catch(error){
            reject(error)
        }      
    })
}

//then when the client receive product he will send us money

function GetMoney(money){
    return new Promise((resolve,reject) =>{
        try{
            setTimeout(() =>{
                resolve(money)
            },2000)
        }catch(error){
           reject(error)
        }
    })
}




// GetProdusts
// .then(function(products){
//     console.log("the products have been received")
//     console.log(products)
//     return TakeProductToClient(products[2])
// }).
// then((product) =>{
//     console.log(`the ${product} has been received`)
//     return GetMoney("3000 DH")
// })
// .then(money =>{
//     console.log(`wslatna ${money}`)
// })
// .catch(function(error){
//     console.log(error)
// })






// async function Work(){
//     //2 seconds
//     var products=await GetProdusts
//     console.log("the products have been received")
//     console.log(products)
//     var product =await TakeProductToClient(products[2])
//     console.log(`the ${product} has been received`)
//     var money=await GetMoney(product)
//     console.log(`wslatna ${money}`)
// }
// Work()









// //fetch






// fetch("https://privae-anon-9f2bc59b05-goquotes.apiary-proxy.com/api/v1/random?count=30")
// .then(function(response) {
//     return response.json()
// })
// .then(function(data){
//     data.quotes.forEach(function(quote){
//         AppendQuoteToList(quote.text)
//     })
// })
// .catch(function(err){
//     showError(err)
// })




document.getElementById('btnGetQuotes').onclick=()=>{
     fetch("https://private-anon-9f2bc59b05-goquotes.apiary-proxy.com/api/v1/random?count=20")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.quotes.forEach(function(quote) {
            AppendQuoteToList(quote.text)
        })
    })
    .catch(error=>{
        console.log(error)
        showError(error)
    })
}






















function AppendQuoteToList(quote){
    var element=document.createElement("div")
    element.textContent = quote
    element.classList.add("quote")
    document.getElementById("quotes").append(element)
}


function showError(error){
    var element=document.createElement("div")
    element.textContent = error
    element.classList.add("quoteError")
    document.getElementById("quotes").append(element)
}



















// how to declare promise



// var GetData=new Promise(function(resolve,reject){
//     try{
//         setTimeout(function(){
//             resolve()
//         },2000)
//     }catch(e){
//         setTimeout(function(){
//             reject();
//         })
//     }
// })

// GetData.
// then(function(){
//     console.log("the data has been retrieved")
// }).
// catch(function(){
//     console.log("there was an error of connection")
// })

























































