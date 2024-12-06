let list1=document.createElement('h1');
list1.textContent="welcome"
let container=document.getElementById("container")
container.append(list1)
let btn= document.getElementById("btn");
btn.addEventListener("click",function(){
    let list2=document.createElement('p');
   list2.textContent="do your task"
   container.prepend(list2)
});
let del=document.getElementById("two");
let deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click",function(){
    del.remove()
});
function deleteElement (event){console.log(event.target.remove())

}