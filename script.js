console.log('connected');

const input = document.querySelectorAll("input");

console.log(input);


document.addEventListener("click", function(e){
  console.log(e);
  console.log(e.target.id);
  //document.getElementById("demo").innerHTML = "Hello World";
  if(e.target.id === "input"){
    

  }
}); 


