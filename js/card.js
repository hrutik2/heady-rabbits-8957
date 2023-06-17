let arr=[
    {id:1,name:"sarita",address:"kulad",cardno:"resdfet"},
    {id:2,name:"sarita",address:"kulad",cardno:"resdfet"},
    {id:3,name:"sarita",address:"kulad",cardno:"resdfet"},
];
tbody=document.querySelector("tbody");
display(arr);
function display(data){
     data.forEach(function(ele){
        tbody.append(createtd(ele));
     });
     function createtd(ele){
let tr=document.createElement("tr");
let id=document.createElement("td");
id.innerHTML=ele.id;
let name=document.createElement("td");
name.innerHTML=ele.name;
let address=document.createElement("td");
address.innerHTML=ele.address;
let cardno=document.createElement("td");
cardno.innerHTML=ele.cardno;
tr.append(id,name,address,cardno);
return tr;

