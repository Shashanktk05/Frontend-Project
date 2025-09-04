// let a=54;
// let b=7;
// console.log("Sum of",a ,"and", b ,":",a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// a++;
// console.log(a);
// b--;
// console.log(b); 


//Conditionals

// let a=prompt("Enter the age");
// a=Number.parseInt(a)


// let a=prompt("Enter the age");
// a=Number.parseInt(a)
// console.log(typeof(a))

// alert("Warning")
// undefined
// let a=prompt("Enter the age")
// a=Number.parseInt(a);
// 4

// let a=prompt("Enter the age")
// a=Number.parseInt(a);
// if(a>=18){
//     alert("Eligible");
// }else{
//     alert("Not Eligible");
// }


//Switch

// let a=prompt("Enter the Number")
// a=Number.parseInt(a)
// let b=prompt("Enter the Number")
// b=Number.parseInt(b)
// let sym=prompt("Enter +,-,*,/")
// switch(sym){
//     case "+":
//         alert(a+b);
//         break;
//     case "-":
//         alert(a-b);
//         break;
//     case "*":
//         alert(a*b);
//         break;
//     case "/":
//         alert(a/b);
//         break;
//     default:
//         alert(" Invalid Opertator " ,sym)
//         break;
// }


//Ternary Operator
// let age=8;
// console.log(age>=18?"Eligible":"Not Eligible")


// let a=prompt("Enter the Number")
// a=Number.parseInt(a)
// if(a<20 && a>10){
//     alert("Lies Between 10 And 20")
// }else{
//     alert("Not Lies Between 10 And 20")
// }


//  let a=prompt("Enter the Number")
// a=Number.parseInt(a)
// if(a%2==0 && a%3==0){
//     alert("Divisible By 2 and 3")
// }else{
//     alert("Not Divisible By 2 and 3")
// }

// let a=prompt("Enter the Number")
// a=Number.parseInt(a)
// if(a%2==0 || a%3==0){
//     alert("Divisible By either 2 and 3")
// }else{
//     alert("Not Divisible By either 2 nor 3")
// }

// let age=25;
// console.log(age>=18?"You can Drive":"You cannot drive")


// let n=10,sum=0;
// for(let i=1;i<=n;i++){
//     sum+=i;
// }console.log(sum)

// let n=3,sum=1;
// for(let i=1;i<=n;i++){
//     sum*=i;
// }console.log(sum)

// const item={
//     "Shashank":45,
//     "Rohan":78,
//     "Anjali":99,
//     "Priya":67
// }
// for (let a in item){
//     console.log("marksof ",a,"are",item[a])
// }

// for (let a of "Shashank"){
//     console.log(a)
// }
// let n = prompt("Enter the value");
// n=Number.parseInt(a);
// let n=1;
// while(n<4){
//     console.log(n);
//     n++;
// }

// Functions
// let a=10;
// let b=20;
// let c=30;
// function avg(a,b){
//     return (a+b)/2;
// }
// console.log("Average of ", a ,"and",c ,avg(a,c))

// const hello=()=>{
//     console.log("Hello World")
// }


// const item={
//     "Shashank":45,
//     "Rohan":78,
//     "Anjali":99,
//     "Priya":67  
// }
// for(let a in item){
//     console.log("Marks of",a,"are",item[a])
// } 

// const mean=(a,b,c,d,e)=>{
//     return(a+b+c+d+e)/4;
// }
// console.log(mean(1,2,3,4,5))


//Strings

// let a="Hello";
// console.log(a.length)

//  let a ="Shashank "
//  let b ="T K"
//  let sen=`my name \r  is ${a}${b}`
//  console.log(sen)

// let a="Jello";
// for (let i=0;i<a.length;i++){
//     console.log(a[i])
// }
// let b=a.replace("J","H");
// console.log(b)
// console.log(b.toUpperCase())
// console.log(b.toLowerCase())
// let d="Hello World"
// console.log(d.slice(2,8))
// let e="     Hello World     "
// console.log(e);
// console.log(e.trim());

// console.log("Hello/".length)

// const a =[10,20,30,40,50]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// b=a.pop();
// console.log(b,a)


// c=a.join(" And ")
// console.log(c)

// const compare=(a,b)=>{
//     return a-b;
// }
// let num=[1453,25,213,412,55,643,7,128,9]
// num.sort(compare)
// console.log(num)

// const a=[10,20,30,40,50]
// a.forEach((element)=>{
//     console.log(element*element )
// })

// const arr=[1,2,3,4,5,6];
// let a=arr.map((value)=>{
//     console.log(value);
//     return value+1
// })
// console.log(a);

// const arr=[1,2,3,4,5,6,7];
// let b=arr.reduce((a,value)=>{
//     return a+value
// })
// console.log(b);


// let n=Number.parseInt(prompt("Enter the N value"))
// const arr=[]
// for(let i=0;i<n;i++){
//     arr[i]=Number.parseInt(prompt("Enter the value"))
// }console.log(arr)

// const a=[10,15,20,25,30]
// let n=a.filter((value)=>{
//     return value%10==0;
// })
// console.log(n);


// const a=[1,2,3,4,5,6,7,8,9]
// let n=a.map((value)=>{
//     return value*value;
// })
// console.log(n);

// const a=[1,2,3]
// let fact=a.reduce((a,value)=>{return a*value})
//     console.log(fact);