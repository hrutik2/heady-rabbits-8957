


const wrapper=document.querySelector(".wrapper")
const login_link=document.querySelector(".login-link")
const register_link=document.querySelector(".register-link")
const btnpop=document.querySelector(".btnlogin-popup")
const iconClose=document.querySelector(".icon-close")
const Registerbtn=document.querySelector("#registrbtn")

let uname=document.querySelector("#name")
let email=document.querySelector("#email")
let pass=document.querySelector("#password")
let aadhar=document.querySelector("#aadha")
let add=document.querySelector("#add")

let mo=document.querySelector("#mo")



register_link.addEventListener("click",()=>{
    wrapper.classList.add('active')
})

login_link.addEventListener("click",()=>{
    wrapper.classList.remove('active')
})

btnpop.addEventListener("click",()=>{
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove('active-popup')
})

//

///fetch
const employeeURL = `https://648d87622de8d0ea11e7f250.mockapi.io/PayWisee`;
async function fetchdata(employeeURL){
    try{
      let resolve = await fetch(employeeURL);
      let data=await resolve.json()
      console.log(data)
    
    }
    catch(error){
      console.log(error)
    }
  }
  fetchdata(employeeURL)

  /////post


 

  Registerbtn.addEventListener("click", (e) => {
    e.preventDefault()

    let newUser= {
      
        aadhar:aadhar.value,
        address:add.value,
        email:email.value,
        mobileno:mo.value,
        password:pass.value,
        username:uname.value,
    };
  
    

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
     
      console.log('User saved to local storage:', data);
      alert('Registration succesfull');
      fetchdata(employeeURL)
  
    })
    .catch(error => console.error('Error creating user:', error));
});







