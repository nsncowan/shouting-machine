window.onload = function(){ 

  let form = document.querySelector("form");
  form.onsubmit = function(e){
  
    e.preventDefault();

  const input = document.getElementById("input").value;

  document.querySelector("span#shouting").innerText = input.toUpperCase();
  document.querySelector("div#shout_message").removeAttribute("class");
  
  };
};