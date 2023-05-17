const btn=document.getElementById('calculate');
btn.addEventListener('click',function(){
    let height=document.querySelector('#height').value;
    let weight=document.querySelector('#weight').value;
    if(height=='' || weight==''){
 alert('please fill out the input fields!')
 return;
    }
    // BMI =weightin KG / (height in M*heighti M)
    height=height/100
            let BMI=(weight/(height*height))
            BMI=BMI.toFixed(2)
            document.querySelector('#result').innerHTML =BMI

            let status=''
            if (BMI < 18.5) {
                 status='Underweight'               
            }
            if (BMI>=18.5 && BMI <25) {
                status='healthy'
            }
            if (BMI>=25 && BMI <30) {
                status='overweight'
            }
            if (BMI>=30 && BMI<=34.5) {
                status='obesity'
            }
            if ( BMI>34.5) {
                status='extreme obesity'
            }
document.querySelector('.comment').innerHTML=`comment:you are <spann id="comment">${status}</spann>`
})