let id=0;

function todo(){
   let input1=document.getElementById("field1");
   let container=document.getElementById("container");
   let div=document.createElement("div");
   let h3=document.createElement("h3");
   let button=document.createElement("button");
   div.appendChild(h3)
   div.appendChild(button)
   container.appendChild(div);
   h3.textContent=input1.value;
   button.textContent="Delete"
   div.classList.add("row");
   
   div.setAttribute('id',id)
   id++;


}

   






    









