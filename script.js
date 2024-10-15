var inputtext = document.getElementById("text")
var showtext = document.getElementById("show")

var btn1 = document.getElementById("btn")
btn1.addEventListener("click", function () {
    showtext.textContent = inputtext.value

})



