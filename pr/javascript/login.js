let email=document.getElementById("Email")
let password=document.getElementById("password")
let button=document.getElementById("button")

let data1=JSON.parse(localStorage.getItem("u"))||[]

button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(email.value=="admin"&&password.value=="admin"){
        location.href ="/admin.html"  
    }else{
        if(email.value==data1.email&&password.value==data1.password){
            console.log(data1.email,email.value)
            alert("login Successful")

            location.href ="/card.html"
        }else{
            alert("wrong credentials")
        }
    }
})