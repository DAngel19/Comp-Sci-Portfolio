var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    dropdown = document.getElementById('dropdown');

form.addEventListener('submit', function(evt) {
  var text = field.value;
  
if(dropdown.value == "nothing"){
  todo.innerHTML += '<div>' + text + '</div>';
}
if(dropdown.value == "color"){
  todo.innerHTML += '<div style= "color: blue;">' + text + '</div>';
}
if(dropdown.value == "bold"){
  todo.innerHTML += '<div style= "font-weight: bold;">' + text + '</div>'; 
} 
if(dropdown.value == "underline"){
  todo.innerHTML += '<div style= "text-decoration: underline;">' + text + '</div>'; 
} 

  
  evt.preventDefault();
}, false);

todo.addEventListener('click', function(evt) {
  var tar = evt.target;
  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through"
  }
  evt.preventDefault();

}, false);

