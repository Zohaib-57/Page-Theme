let btn=document.querySelector('button');
let modeFtn =  function modeFunnction(){
    if(btn.innerText==="Night"){
        document.body.style.backgroundColor="black";
         btn.style.backgroundColor = 'white';
        btn.style.color = 'black'
        btn.innerText='Day '
    }else{
        document.body.style.backgroundColor='white';
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white'
        btn.innerText='Night'
    }
}
btn.addEventListener('click',modeFtn)
