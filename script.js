

let div1 = document.getElementById("mainDiv");
let btn = document.getElementById("btn");
let textBox = document.getElementById("textBox");

btn.onmousedown = () => {
    div1.innerHTML = "clicked"

}

btn.ondblclick = () => {
    div1.innerHTML = "double_cicked"

}

btn.onmouseout = () => {
    div1.innerHTML = "mouse_out_of_buton"

}

btn.onmouseover = () => {
    div1.innerHTML = "mouse_on_button"

}
textBox.onfocus = () =>{
    div1.innerHTML = "text box focus"

}

textBox.onblur = () => {
    div1.innerHTML = "text box focus removed"

}



