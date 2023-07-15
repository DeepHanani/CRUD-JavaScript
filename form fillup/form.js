let myitem = [];

function saveitem()
{
    let item = document.getElementById("item").value;
    let v = document.getElementById("lastname").value;
    let text = document.getElementById("adresss").value;
    let index = document.getElementById("index").value;

    if(index>=0)
    {
      let  myUpdatedData={
           firstname:item,
            lastname:v,
            text:text
       }
    
       myitem[index]=myUpdatedData;
    }
    else
    {
        // myitem.push(item);
        // myitem.push(v);
       
        // myitem.push(text);

        const mydata={
            firstname:item,
            lastname:v,
            text:text
        }

        myitem.push(mydata);
    }
    display();
}

function display()
{
    let myhtml = myitem.map(function(value,index)
    {
       console.log(index,"okk");
        return (`<tr class="row">
        <td>${value.firstname}</td>
        <td>${value.lastname}</td>
        <td>${value.text}</td>
        <td><button onclick="deleteitem(${index})">Delete</button></td>
        <td><button onclick="edititem(${index})">Edit</button></td>
        </tr>`)
    });
document.getElementById("display").innerHTML = myhtml.join("");

}
 

function deleteitem(index)
{

    console.log(index , "jjjj");
  myitem.splice(index,1);
  display();   

}

function edititem(index)
{
//    let newName= myitem[index].firstname;
//    document.getElementById("item").value = newName;

//    let NewSurname=myitem[index].lastname;
//     document.getElementById("lastname").value = NewSurname;a

//     let newAddress=myitem[index].text;
//     document.getElementById("adresss").value = newAddress;
document.getElementById("item").value = myitem[index].firstname;
document.getElementById("lastname").value = myitem[index].lastname;
document.getElementById("adresss").value = myitem[index].text;


    document.getElementById("index").value = index;  
}
