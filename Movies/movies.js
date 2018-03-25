
//this is innerHTML <div id="divMovies">innerHTML</div>
//document is webpage body
//everything in html is a node --> element node , text node
function createList(){
  divMovies=document.getElementById("divMovies");
  divMovies.innerHTML="<ul>  <li>Youssef</li>   <li>Mahmoud</li> </ul>";
}