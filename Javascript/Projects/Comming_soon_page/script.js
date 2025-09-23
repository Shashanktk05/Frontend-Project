let countDownDate=new Date("Oct 5,2025 00:00:00").getTime();
let x=setInterval(function(){
    let now=new Date().getTime();
    let distance=countDownDate-now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('sec').innerHTML=seconds
    document.getElementById('min').innerHTML=minutes
    document.getElementById('hours').innerHTML=hours
    document.getElementById('days').innerHTML=days

    if(distance<0){
        clearInterval(x);
        document.getElementById('sec').innerHTML="00"
        document.getElementById('min').innerHTML="00"
        document.getElementById('hours').innerHTML="00"
        document.getElementById('days').innerHTML="00"
    }

},1000);

