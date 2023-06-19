let container=document.getElementById("container")
let count=document.getElementById("count")
fetchdata()
function fetchdata(){
    fetch(`https://648d87622de8d0ea11e7f250.mockapi.io/PayWisee`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //console.log(data.conversion_rates)
       
        console.log(data)
        count.innerText=(data.length)
       //console.log(date,data3)
       
       creting(data)
      })
      .catch(error=>console.log("error")) 
      
     
  }
  function creting(data){
      
   container.innerHTML=""
   
   data.forEach(element => {
      //console.log(element.id)

      let tr=document.createElement("tr")
      let td=document.createElement("td")
      let td1=document.createElement("td")
      let td2=document.createElement("td")
      let td3=document.createElement("td")

      td.innerText=element.id
      td1.innerText=element.username
      td2.innerText=element.email

      td3.innerText="Delete"
      td3.addEventListener("click",(e)=>{
        e.preventDefault()
        d(element.id)
       
      })
      tr.append(td,td1,td2,td3)
      container.append(tr)
   });
  }

  function d(id){
   // console.log(id)
    fetch(`${"https://648d87622de8d0ea11e7f250.mockapi.io/PayWisee"}/${id}`, {
        method: 'DELETE',
        
       
      })
        .then(response => response.json())
        .then(data => {
          // Save the new user object to local storage
          //console.log(data)
        })
        .catch(error => console.error('Error creating user:', error));
    

}