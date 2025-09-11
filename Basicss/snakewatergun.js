let a=1
let words=["s","w","g"];
let user =0;
let compu=0;
let draw=0;
while(a){
    let comp=words[Math.floor(Math.random()*words.length)]
    let i = prompt("Enter Any one S W G")
    if( i=="w"){
        if(comp=="g"){
            alert("You Won")
            user++
        }else if(comp=="s"){
            alert("Computer Won");
            compu++
        }else{
            alert("Both Same")
            draw++
        }
    }
    else if( i=="s"){
        if(comp=="g"){
            alert("Computer Won")
            compu++
        }else if(comp=="w"){
            alert("You won")
            user++
        }else{
            alert("Both Same")
            draw++
        }
    }
    else{
        if(comp=="g"){
            alert("Both Same")
            draw++
             
        }else if(comp=="w"){
            alert("Computer Won")
            compu++
             
        }else{
            alert("You Won")
            user++
             
        }
       
    }
     a=confirm("Do You Want to play again")
         
}console.log("The Score of You :",user,"Computer :",compu,"Draw :",draw)