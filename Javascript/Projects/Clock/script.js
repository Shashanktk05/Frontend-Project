
setInterval(function(){
    let a= new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let d=a.getDate()
    let mon=a.getMonth()
    let year=a.getFullYear()
    document.getElementById('hour').innerText= h+" : "
    document.getElementById('min').innerText= m +" : "
    document.getElementById('sec').innerText= s
    document.getElementById('date').innerText= d+"/"
    document.getElementById('mon').innerText= mon+"/"
    document.getElementById('year').innerText= year
},1000)