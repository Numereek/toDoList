const inputVal = document.getElementById("inputVal");
const selectVal = document.getElementById("selectVal");
const insertPoint = document.getElementById("insertPoint");

let selectValue="";
let addDate ="";
const addedItem = [...JSON.parse(localStorage.getItem("Save"))];

window.onload = refreshData;

function refreshData(){
    insertPoint.insertAdjacentHTML("afterbegin",addedItem.join("") )
}


function handleChange(){
    selectValue = selectVal.value
}

function addItem (){
    let d = new Date();
    addDate= d.getDate().toString().padStart(2,"0")+"-"+(d.getMonth()+1).toString().padStart(2,"0")+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes().toString().padStart(2,"0")

    let html = `<div class="item" class="${selectValue}" ><input type="checkbox" id="task" style="margin: 0px 10px"><label for="task" style="display: inline-block; width: 245px">${inputVal.value}</label><span style="display: inline-block; width: 125px; font-size:8px; user-select:none">updated on : ${addDate}</span><span onclick="this.parentElement.remove()" class="close">✖</span></div>   
    `;
    insertPoint.insertAdjacentHTML("afterbegin",html);
    addedItem.push(html)

    inputVal.value="";
    selectVal.value="--Select--"
}

function checkValue(){
    if (inputVal.value=="" || selectVal.value=="--Select--"){
        alert("Add Item and/or Select can't be blank.")
    }else{
        addItem ();
        localStorage.setItem("Save", JSON.stringify(addedItem));
    }
}



//localStorage.removeItem("Save")