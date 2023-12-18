const list=[];
debugger;
if(list.length==0)
{
    document.getElementById("studentList").innerHTML=("There are no records");
}
 

function display()
{
   
    record="";
    for(var i=0;i<list.length;i++)
    {
         record += "<li>"+list[i].name+' '+list[i].address+' '+list[i].batch+"</li>";
    }
    document.getElementById("studentList").innerHTML=record;
}


function addRecord()
{
   document.getElementById("div1").style.display="block";
}

function deleteRecord()
{
    if(confirm("Do you want to delete record?"))
    {
        list.pop();
    }
}

var record="";
var Name="";
var Address="";
var Batch="";
var objectlist="";
 
function GetControlDetails()
{
    debugger;
    Name=document.getElementById("txtname").value;
    
    Address=document.getElementById("txtaddress").value;
   
    Batch=document.getElementById("txtbatch").value;
    
    objectlist = {name:Name, address:Address, batch:Batch};
}
 
function Add(event)
{
    GetControlDetails();
    if(event.key=="Enter")
    {

        list.push(objectlist);
        alert(objectlist);
        console.log(Name);
        console.log(Address);
        console.log(Batch);
    }
    display();
}
