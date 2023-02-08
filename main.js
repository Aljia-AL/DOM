 var btn1 = document.getElementsByClassName('btn1')
 var btn2 = document.getElementsByClassName('btn2')
 let quantity= document.getElementsByClassName('quantity');
let PriceUnitaire= document.getElementsByClassName('PriceUnit');


console.log(btn1)
console.log(btn2)
for (let mines of btn1) {
    mines.addEventListener('click',function(){
        mines.nextElementSibling.innerText--
        totalPrice()
    })
   
}

for( let plus of btn2){
    plus.addEventListener('click',function(){
        plus.previousElementSibling.innerText++
        totalPrice()
    })
    
}
// for( var i=0; i<=btn2.lenght;i++){
//     let incrementBtn = btn2[i]
//     incrementBtn.addEventListener('click',function(){
//         incrementBtn.previousElementSibling.innerText++
//     })
// }



function totalPrice(){
    let sum =0;
    for (let i=0; i<PriceUnitaire.length;i++){
        sum+= quantity[i].innerText * PriceUnitaire[i].innerText;
        document.getElementById('totalPrice').innerText= sum
    }
}