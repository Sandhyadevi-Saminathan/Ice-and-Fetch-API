// Create Title tag
var title=document.createElement('h1');
title.setAttribute("id","title");
title.setAttribute("class","text-center");
title.innerHTML=" Ice and Fire API Task"

// Create input field and search button
var div=document.createElement("div");
div.setAttribute("class","input-filter");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("class","filter");
input.setAttribute("id","filter");
input.setAttribute("placeholder","Enter the Book Name");
input.style.width ="500px";

var button=document.createElement("button");
button.innerHTML="search";
button.setAttribute("class","button");
button.setAttribute("id","myBtn");
button.onclick=print;

// Search/Filter the Cards based on book names given by User

function print()
{
    var input, filter, card, h4, a, i;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    card = document.getElementById("row");
    h4 = card.getElementsByTagName("h4");
    for (i = 0; i < h4.length; i++) {
        a = h4[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            var p1=[];
  p1.push( h4[i].parentElement.parentElement.style.display = "");
    
     } else {
        var p2=[];
      p2.push( h4[i].parentElement.parentElement.style.display = "none")
      
      
        }
        
}

// try & Catch.. if user gave a invalid book name then it throws the error.

try {
    if(p1==undefined)
{
    throw new Error("Enter a Valid Book Name");

}
} catch (error) {
    alert(error.message)
    window.location.reload();
}

}

// Create a Bootstrap card
var con=document.createElement("div");
con.setAttribute("class","container");

var div1=document.createElement("div");
div1.setAttribute("class","card-lists");
div1.setAttribute("id","card-lists");

var row= document.createElement("div");
row.setAttribute("class","row");
row.setAttribute("id","row");

// Fetch the data from API and append the data in Bootstrap Card

async function foo()
{
    var res= await fetch("https://www.anapioficeandfire.com/api/books");
    var res1=await res.json();
    //console.log(res1);
 
    for(var i=0;i<res1.length;i++)
   {  
    row.innerHTML +=`<div class="col">
  <div class="card-header" id="crd">
  <h4 class= "cardheader" id="bkname">Book Name:<span>${res1[i].name}</span></h4></div>
  <div class="card-body">
       <h5 class="card-title">ISBN :${res1[i].isbn}</h5>
          <h5 class="card-title">Number of Pages:${res1[i].numberOfPages}</h5>
          <h5 class="card-title">Author Name:${res1[i].authors}</h5>
          <h5 class="card-title">Publisher:${res1[i].publisher}</h5>
          <h5 class="card-title">Released Date:${res1[i].released}</h5>
          <button onclick="characters(${i})">Click here to view a character</button>
  </div>`
}
}
foo();

// To display the Characters. Fetch the API and display it in Alert box

async function characters(res)
{
    let result=await fetch("https://www.anapioficeandfire.com/api/characters/1");
    let result1= await result.json();
    alert(`
    URL:${result1.URL} 
    Gender:${result1.gender}
    Culture:${result1.culture}
    Books:${result1.books}
    Father:${result1.spouse}`);
}

// Append the elements

formgroup.append(input,button);
div.append(formgroup);
div1.append(row);
con.append(div,div1);
document.body.append(title,con);

 




