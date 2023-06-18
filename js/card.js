let data=JSON.parse(localStorage.getItem("user"));


let cardno=document.querySelector("number");
let namei=document.querySelector("cardholder");
let userhead=document.getElementById("userhead");
cardno.innerHTML=data.cardno;
namei.innerHTML=data.name;
userhead.innerHTML=data.name;



