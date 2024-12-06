let inputBox=document.getElementById("inputBox");
let addBtn=document.getElementById("addBtn");
let container=document.getElementById("container");
addBtn.addEventListener('click' , function(){
    let newli=document.createElement('li');
    newli.textContent=inputBox.value;
    container.append(newli)
});