
let div1 = document.getElementById("mainDiv");
let btn = document.getElementById("btn");
let textBox = document.getElementById("textBox");

btn.onmousedown = () => {
    div1.innerHTML = "clicked"
    div1.style.backgroundColor = "#b369a6";
    alert(textBox.value);
}

btn.ondblclick = () => {
    div1.innerHTML = "double_cicked"
    div1.style.backgroundColor = "#69b369";

}

btn.onmouseout = () => {
    div1.innerHTML = "mouse_out_of_buton"
    div1.style.backgroundColor = "#4e7982";

}

btn.onmouseover = () => {
    div1.innerHTML = "mouse_on_button"
    div1.style.backgroundColor = "#4a598c";

}
textBox.onfocus = () =>{
    div1.innerHTML = "text box focus"
    div1.style.backgroundColor = "#7d8c81";
    textBox.style.borderWidth = "4px";
    textBox.style.borderColor = "green";

}

textBox.onblur = () => {
    div1.innerHTML = "text box focus removed"
    div1.style.backgroundColor = "#92bf5c";

}

textBox.onkeyup = () => {
    div1.innerHTML = textBox.value+"|";
    div1.style.backgroundColor = "#6479c4";
}


setTimeout(testTimeOut, 3000);
function testTimeOut(){
    div1.innerHTML = "After 3 seconds of Page Load";
}

