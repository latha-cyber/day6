let inputBox=document.getElementById("inputBox");
let addBtn=document.getElementById("addBtn");
let container=document.getElementById("container");
addBtn.addEventListener('click' , function(){
let li=document.createElement('li');
li.innerHTML=inputBox.value + "<button onclick='deleteElement(event)'> Delete</button>"
    container.append(li)
})
    function deleteElement (event){
        event.target.parentElement.remove()
    }
    
