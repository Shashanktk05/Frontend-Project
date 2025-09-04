let a= Math.round(Math.random()*100)
let j=0
for (let i=1;i<50;i++){
    let n=Number.parseInt(prompt("Enter the number"))
    console.log("The random number is",a>n?"Too Low":"Too High")
    j++;
    if (a==n){
        console.log("You guessed it right which is",n)
        console.log("You took",j,"Chance")
        break;
    }
}