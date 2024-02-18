// Set IntervalId
let intervalID;

// Setinterval
function flashtext(){
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000)
    }
}

// To change Color
function changeColor(){
    const OElem= document.getElementById('my_box');
    OElem.className = OElem.className === 'go' ? 'stop' : 'go';
}

// To stopColor
function stopColor(){
    clearInterval(intervalID);
    intervalID = null;
}

document.getElementById('start').addEventListener('click',flashtext);
document.getElementById('stop').addEventListener('click',stopColor)