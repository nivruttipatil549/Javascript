// const inputBox=document.getElementById("input-box");
// const listContainer=document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value===''){
//         alert("You must write something");
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value= "";
//     saveData();
// }
// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if (e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);

// }
// function showTask(){
//     listContainer.innerText=localStorage.getItem("data");
// }
// showTask();


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let tasks = [];

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        tasks.push(inputBox.value);
        updateList();
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        const taskIndex = Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentElement);
        tasks.splice(taskIndex, 1);
        updateList();
        saveData();
    }
}, false);

function updateList() {
    listContainer.innerHTML = '';
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
}

function saveData() {
    localStorage.setItem("data", JSON.stringify(tasks));
}

function showTask() {
    tasks = JSON.parse(localStorage.getItem("data")) || [];
    updateList();
}

showTask();

