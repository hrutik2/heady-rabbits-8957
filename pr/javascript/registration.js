let Name=document.getElementById("Name")
let Email=document.getElementById("Email")
let Adhar=document.getElementById("addhar")
let contact=document.getElementById("mobileno")
let address=document.getElementById("address")
let password=document.getElementById("password")
let button=document.getElementById("button")
let data1=JSON.parse(localStorage.getItem("u"))||[]
button.addEventListener("click",(e)=>{
    data1=[]
    e.preventDefault()
    if(!Name.value || !Email.value || !Adhar.value || !contact.value || !address.value || !password.value){
        alert('Please fill in all fields');
      }
    else{
        let newUser = {
            username: Name.value,
            email: Email.value,
            aadhar:Adhar.value,
            mobileno:contact.value,
            address:address.value,
            password: password.value,
            cardno:generateCode(),
            cvc:generateCode2(),
          };
        
        
        console.log(newUser)
        
          fetch('https://648d87622de8d0ea11e7f250.mockapi.io/PayWisee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
            .then(response => response.json())
            .then(data => {
              // Save the new user object to local storage
               data1.push(data)
               localStorage.setItem("u",JSON.stringify(data))
              alert('SignUp Successful');
              location.href ="/login.html"
            })
            .catch(error => console.error('Error creating user:', error));
        
    
    }
})

function generateCode() {
  let code = '';
  
  for (let i = 0; i < 16; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    code += randomNumber;
  }
  
  return code;
}

function generateCode2() {
  let code = '';
  
  for (let i = 0; i <3; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    code += randomNumber;
  }
  
  return code;
}