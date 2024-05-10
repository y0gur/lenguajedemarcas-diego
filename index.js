//document.getElementById("count-el").innerText = 5;

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
console.log(countEl)
let count = 0

function suma1(){
    count = count+1   //count += 1 
    countEl.textContent = count 
}

function suma2(){
    count = count+2   //count += 2 
    countEl.textContent = count 
}

function suma5(){
    count = count+5   //count += 5 
    countEl.textContent = count 
}

function suma10(){
    count = count+10   //count += 10 
    countEl.textContent = count 
}

function resta1(){
    count = count-1   //count -= 1 
    if (count > 0) {
    countEl.textContent = count        
    } else {
        alert("No puede haber menos de 0 pasajeros")
        count = count+1   //count += 1
        countEl.textContent = count
    }

}

function resta2(){
    count = count-2   //count -= 2 
    if (count > 0) {
    countEl.textContent = count 
    } else {
        alert("No puede haber menos de 0 pasajeros")
        count = count+2   //count += 2
        ountEl.textContent = count
    }

}
function resta5(){
    count = count-5   //count -= 5 
    if (count > 0) {
    countEl.textContent = count 
    } else {
        alert("No puede haber menos de 0 pasajeros")
        count = count+5   //count += 5
        countEl.textContent = count
    }
}

function resta10(){
    count = count-10   //count -= 10 
    if (count > 0) {
    countEl.textContent = count 
    } else {
        alert("No puede haber menos de 0 pasajeros")
        count = count+10   //count += 10    
        countEl.textContent = count
    }
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = count 
    count = 0
    countEl.textContent = count
}


