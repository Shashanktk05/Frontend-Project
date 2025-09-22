const btn=document.getElementById('create')
const userinput=document.getElementById('userinput')
const apiUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

async function createqr(value) {
   try{
    qr.style.display='block';
    ii.src=`${apiUrl}${value}`
   }catch(e){
     error.style.display="block";
     document.getElementById('e').innerHTML="Ivalid ";
   }
   }

btn.addEventListener('click',()=>{
     if(userinput.value.length > 0){
      createqr(userinput.value)
     }else{
        userinput.classList.add('ani')
        setTimeout(()=>{
            userinput.classList.remove('ani')
        },10000)
     }
       
})


