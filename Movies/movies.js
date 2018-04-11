
//this is innerHTML <div id="divMovies">innerHTML</div>
//document is webpage body
//everything in html is a node --> element node , text node
function createList(){
  divMovies=document.getElementById("divMovies");
  divMovies.innerHTML="<ul>  <li>Youssef</li>   <li>Mahmoud</li> </ul>";
}

//everything in html is node : text node or element node
function createListByNodes(){
    //use for loop better
   title=document.createTextNode("Here is the list :");
   list=document.createElement("ul");
   text1=document.createTextNode("Mahmoud");
   item1=document.createElement("li");
   item2=document.createElement("li");
   text2=document.createTextNode("Youssef");
   item1.appendChild(text1);
   item2.appendChild(text2);
   list.appendChild(item2);
   list.appendChild(item1);
   divMovies=document.getElementById("divMovies");
   divMovies.appendChild(title);
   divMovies.appendChild(list);

}