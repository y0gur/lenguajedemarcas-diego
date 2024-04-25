//document.getElementById("count-el").innerText = 5;

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
console.log(countEl)
let count = 0

function increment(){
    count = count+1   //count += 1 
    countEl.textContent = count 
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = count 
    count = 0
}

