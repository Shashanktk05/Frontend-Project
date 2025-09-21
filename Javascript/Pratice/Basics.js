//Printing in console

// console.log("Hello World")

//VARIABLES

// var a=57
// console.log(a)
// a="hello"
// console.log(a)

// Var,const,let

// var a=45

// {a="hello"
// console.log(a)
// }
// console.log(a)


// let a=5
// {
//     let a="hello"
//     console.log(a)
// }
// console.log(a)

// const a=5
// console.log(a)


//primitive data types
//nn bb ss u
// let a=5;
// let b=null;
// let c= true;
// let d=BigInt("567");
// let e="String"
// let f=Symbol("I am a symbol")
// let g=undefined
// console.log(a,b,c,d,e,f,g)
// console.log(typeof(b))  


//Non-primitive data types
//Objects in Js

// const item={
//     "Hello":45,
//     "World":true,
//     "name":"Shash",
//     "roll no":undefined
// }

// console.log(item["World"])

//Praticeeeee!!!!

// let a="Shashank"
// let b=5;
// console.log(a+b)
// console.log(typeof(a+b)) 

// const dict={
//     help:"assistance",
//     exit:"leave",
//     enter:"come in" 
// }

// console.log(dict["help"])

//  let promise = new Promise(function(resolve,reject){
//             console.log("Promise is pending")
//             setTimeout(()=>{
//                 console.log("I am a promise and i have fulfilled")
//                 resolve(true)
//             },5000)
//         })
//          let promise1 = new Promise(function(resolve,reject){
//             console.log("Promise is pending")
//             setTimeout(()=>{
//                 console.log("I am a promise and i have failed")
//                 reject(new Error("I am an error"))
//             },5000)
//         })
// promise.then((value)=>{
//     console.log(value)
// })

// promise1.catch((error)=>{
//     console.log("Some occured in promise 2 ")
// })
//      //console.log("Hello")
//       //setTimeout(function(){
//        // console.log("Hello in 2 seconds")
//       //},2000)
//       //console.log("Hello 3")
//       //console.log(promise) 

// let p1= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("resolve after 2 seconds")
//             resolve(56)
//         },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")   
//         },2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
 
// })

// const loadScript=(src)=>{
//     return new Promise((resolve,reject) => {
        
    
//     let script=document.createElement("script")
//     script.type='text/javascript'
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//         resolve(1)
//     }
//     script.onerror=()=>{
//         reject(0)
//     }
// })
// }

// let p1=loadScript("http://127.0.0.2:5501/js/index.html")
// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("We are sorry we are having error")
// })



// Promise API

// 1) promise.all()

// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 2")
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })
// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })
// // p3.then((value)=>{
// //     console.log(value)
// // })

// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })


// //2) Promise.allSettle()
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        reject(new Error("Error"))
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })
// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })
// // p3.then((value)=>{
// //     console.log(value)
// // })

// let promise=Promise.allSettled([p1,p2,p3])
// promise.then((value)=>{
//     console.log(value)
// })

//3) Promise.race()
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },10000)
// })

// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })

// let promise=Promise.race([p1,p3])
// promise.then((value)=>{
//     console.log(value)
// })

// //4) Promise.any()
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        reject(new Error("Error"))
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })

// let promise_all=Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// //5) Promise.reslove()
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        reject(new Error("Error"))
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })

// let promise_all=Promise.resolve([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// //6) Promise.reject()
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 1")
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        reject(new Error("Error"))
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        resolve("Value 3")
//     },3000)
// })

// let promise_all=Promise.reject([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })


//Async//Await


// async function shashank(){
//     let dw= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("24 Deg")
//     },2000)
// })

// let bw= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("21 Deg")
//     },5000)   
// })

// let a = await dw
// let b= await bw
// return [a,b]
// }

// let r =shashank()
// r.then((value)=>{
//     console.log(value)
// })


//Error handling try and catch
// setTimeout(() => {
//     console.log("Hacking wifi please wait....")
// }, 1000);

// try {
//     console.log(Found)
// } catch (error) {
//     console.log(error)
// }
// setTimeout(() => {
//     console.log("Feching user name and password....")
// }, 2000);

// setTimeout(() => {
//     console.log("Near by susheels phone found!")
// }, 3000);

// setTimeout(() => {
//     console.log("user name is OnePlus NORD CE fetching password...")
// }, 4000);

// setTimeout(() => {
//     console.log("Password : 12345678")
// }, 5000);

