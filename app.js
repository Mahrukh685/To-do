function todolist(){
   let fieldtext=document.getElementById("field1")
   let container=document.getElementById("container")
   let div=document.createElement("div")
   let h2=document.createElement("h2")
   let button=document.createElement("button")
   div.appendChild(h2)
   div.appendChild(button)
   button.textContent="delete"
   container.appendChild(div)
   h2.textContent=fieldtext.value;
   div.classList.add("row")
   






    




}






