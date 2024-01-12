let id = 0;

function todo() {
   let input1 = document.getElementById("field1");
   if(input1.value==""){
      return
   }
   let container = document.getElementById("container");
   let div = document.createElement("div");
   let h3 = document.createElement("h3");
   let button = document.createElement("button");
   button.addEventListener("click",
      Delete
   )
   div.appendChild(h3)
   div.appendChild(button)
   container.appendChild(div)
   h3.textContent = input1.value;
   button.textContent = "Delete"
   input1.value="";


   div.classList.add("row");
   div.setAttribute('id', "uniqueid" + id)
   id++;

}

function Delete(id) {
   let parent=this.parentElement;
   parent.remove();


}


















