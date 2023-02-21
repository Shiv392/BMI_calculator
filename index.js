
const weight=document.getElementById('weight');
const height=document.getElementById('height');


const btn=document.querySelector('#submit');
btn.addEventListener('click',(e)=>{
   
    if(!weight.value||!height.value){
      if(!weight.value){
        alert('Plz Enter Your Weight');
      }
      if(!height.value){
        alert('Plz Enter Your Height')
      }
    }
    else{
        // let heightinmeter=Math.floor(height.value/10);
        // const resbmi=Math.round(weight.value/heightinmeter**2);
        
        // alert(resbmi)
        const resblock=document.querySelector('.res');
        resblock.style.display='block'
        let res=calculatebmi(weight.value,height.value);
        // alert(res.toFixed(1));
        let  index=document.getElementById('index');
        let  index_val=document.getElementById('index_res')
        index.innerHTML=`Your BMI is ${res.toFixed(1)}`
        // index_val.innerHTML='fit'
        if(res<=18.44){
            index_val.innerHTML=`Underweight`;
            index_val.style.color='yellow'
        }
        else if(res>=18.44&&res<=24.99){
            index_val.innerHTML=`Normal`;
            index_val.style.color='green';
        }
        else if(res>=25&&res<=40){
            index_val.innerHTML=`Overweight`;
            index_val.style.color='orange'
        }
        else{
            index_val.innerHTML=`Obbise`;
            index_val.style.color='red'
        }
    }

   
   
});

function calculatebmi(weight,height){
    height=height/100;
    height=height**2;
    return (weight/height);
}