let dataurl=`https://648d87622de8d0ea11e7f250.mockapi.io/PayWisee`;

fetchdata(dataurl);
function fetchdata(data){
let fetched=fetch(data).then(function(res){
     return res.json();
}).then(function(list){
     display(list);
}).catch(function(err){
     console.log(err);
});
return fetched;
}
tbody=document.querySelector("tbody");
function display(data){
     tbody.innerHTML="";
     data.forEach(function(ele){
        tbody.append(createtd(ele));
     });
     function createtd(ele){
let tr=document.createElement("tr");
let id=document.createElement("td");
id.innerHTML=ele.id;
let name=document.createElement("td");
name.innerHTML=ele.username;
let email=document.createElement("td");
email.innerHTML=ele.email;
let password=document.createElement("td");
password.innerHTML=ele.password;
let adhar=document.createElement("td");
adhar.innerHTML=ele.aadhar;
let address=document.createElement("td");
address.innerHTML=ele.address;
let mobileno=document.createElement("td");
mobileno.innerHTML=ele.mobileno;
let cardno=document.createElement("td");
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
cardno.innerHTML=random(1111111111111111,9999999999999999);
let edittd=document.createElement("td");
let edit=document.createElement("button");
edittd.setAttribute("class","editbtn");
edit.innerHTML="Edit";
edit.addEventListener("click",function(){
     editdata(ele);
   });
edittd.append(edit);
let deletetd=document.createElement("td");
let deleteb=document.createElement("button");
deletetd.setAttribute("class","deletebtn");
deleteb.innerHTML="Delete";
deleteb.addEventListener("click",function(){
     deletedata(ele.id);
   });
deletetd.append(deleteb);
tr.append(id,name,email,password,adhar,address,mobileno,cardno,edittd,deletetd);
return tr;
     }
}

let newname=document.getElementById("newusername");
let newemail=document.getElementById("newuseremail");
let newpass=document.getElementById("newuserpassword");
let newaadhar=document.getElementById("newuseraadhar");
let newaddress=document.getElementById("newuseradress");
let newmobile=document.getElementById("newusermobileno");
let newcard=document.getElementById("newusercardno");
let adduserbtn=document.getElementById("adduser");
adduserbtn.addEventListener("click",adduser);
function adduser(){
     fetch(dataurl,{
      method:"POST",
      headers:{
       'Content-type':'application/json'
     },
      body:JSON.stringify({
           email:newemail.value,
           password:newpass.value,
           aadhar:newaadhar.value,
           address:newaddress.value,
           username:newname.value,
           mobileno:newmobile.value,
           cardno:newcard.value,
      })
     }).then(function(res){
   return res.json();
     }).then(function(list){
          alert("Data Added");
          fetchdata(dataurl);
     }).catch(function(err){
       console.log(err);
     });
}
   function deletedata(id){
     fetch(`${dataurl}/${id}`,{
          method:"DELETE",
         }).then(function(res){
       return res.json();
         }).then(function(list){
           fetchdata(dataurl);
         }).catch(function(err){
           console.log(err);
         })
   }
   let updateid =document.getElementById("updateid");
      let updatename  =document.getElementById("updateusername");
      let updateemail  =document.getElementById("updateuseremail");
      let updatepassword  =document.getElementById("updateuserpassword");
      let updateaadhar  =document.getElementById("updateuseraadhar");
      let updateaddress  =document.getElementById("updateuseradress");
       let updatemobile =document.getElementById("updateusermobileno");
      let updatecard =document.getElementById("updateusercardno");
        let updatebtn=document.getElementById("userupdate"); 

   function editdata(ele){
     event.preventDefault();
     updateid.value=ele.id;
     updatename.value=ele.username;
      updateemail.value=ele.email ;
      updatepassword.value=ele.password ; 
      updateaadhar.value=ele.aadhar ;
      updateaddress.value=ele.address;  
      updatemobile.value=ele.mobileno; 
      updatecard.value=ele.cardno ;

   }

   updatebtn.addEventListener("click",updatedata)

   function updatedata(){
     fetch(dataurl,{
          method:"PATCH",
          headers:{
           'Content-type':'application/json'
         },
          body:JSON.stringify({
               username:updatename.value,
                email:updateemail.value,
                password:updatepassword.value, 
                aadhar:updateaadhar.value,
                address:updateaddress.value, 
                mobileno:updatemobile.value, 
                cardno:updatecard.value,
          })
         }).then(function(res){
       return res.json();
         }).then(function(list){
           fetchdata(dataurl);
         }).catch(function(err){
           console.log(err);
         })
   }