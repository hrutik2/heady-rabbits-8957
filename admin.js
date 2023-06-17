let fromCurrency=document.getElementById("fromCurrency")


// Get the select element
data3=[]
fetchdata()
function fetchdata(){
    fetch("https://64889f370e2469c038fe1ba1.mockapi.io/currency")
      .then(res=>res.json())
      
      .then(data=>{
        appendoption(data)
        data3=data
        graph1(data)
    })
      .catch(error => console.error('Error logging in:', error));

  }

  function appendoption(data){
    fromCurrency.innerHTML=""
    data.forEach(element => {
        //console.log(element)
        let option = document.createElement("option");
        option.value = element.name;
        option.textContent =`${element. value}(${element.name})`;
        fromCurrency.append(option)
    });
  }



  let data1=[]
  let date=""
  
  let container=document.getElementById("container")
  fromCurrency.addEventListener("change",()=>{
      fetchdata2(fromCurrency.value)
     
  
  }) 
  fetchdata2("USD")
  function fetchdata2(fromCurrency){
    fetch(`https://v6.exchangerate-api.com/v6/4e91992fdfbf260b8a901831/latest/${fromCurrency}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //console.log(data.conversion_rates)
        data1=data.conversion_rates
       date=data.time_last_update_utc
       console.log(data)
       //console.log(date,data3)
       
        graph1(data3)
      })
      .catch(error=>console.log("error")) 
      
     
  }
  
  function graph1(data){
    let a=[]
   data.forEach(element => {
    console.log(element)
       let exchangeRates={}
        exchangeRates.name=`${element.value}(${element.name})`
       exchangeRates.value=data1[element.name]
       a.push(exchangeRates)
     
   });
   console.log(a)
    let str1=""
    let n=date.length
    for(let i=5;i<16;i++){
     str1=str1+date[i]
    }
    creting(a,str1)
  }
  
  
  function creting(data,date){
      
   container.innerHTML=""
   
   data.forEach(element => {
      console.log(element)
      let tr=document.createElement("tr")
      let td=document.createElement("td")
      let td1=document.createElement("td")
      let td2=document.createElement("td")
      let td3=document.createElement("td")

      td.innerText=element.name
      td1.innerText=element.value
      td2.innerText=date 
      td3.innerText="Delete"
      tr.append(td,td1,td2,td3)
      container.append(tr)
   });
  }
 
  var modal = document.getElementById("addcurrency");
let bt=document.getElementById("bt")
 bt.addEventListener("click" ,()=>{
   modal.style.display="block"

  })

  var close = document.getElementById("close");
  
close.onclick = function() {
  
         addata()
        modal.style.display = "none";
    
}

 function addata(){
    let input1=document.getElementById("co1");
    let input2=document.getElementById("co");
   
    let newdata={}
    newdata.name=input1.value
    newdata.value=input2.value
    fetch('https://64889f370e2469c038fe1ba1.mockapi.io/currency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newdata)
      })
        .then(response => response.json())
        .then(data => {
          // Save the new user object to local storage
          console.log(data)
        })
        .catch(error => console.error('Error creating user:', error));
    
 }

  
