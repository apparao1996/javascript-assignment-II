
function add(){

  let  parent =  document.getElementById("myDiv");

  var iDiv = document.createElement('div');
  //iDiv. = "block";
  iDiv.className = 'block';
  
  
  parent.appendChild(iDiv);


}


function setRandomColor(e) {
  e.target.style.backgroundColor=getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }
 

 document.getElementsByClassName('block').addEventListener("mouseover",setRandomColor);