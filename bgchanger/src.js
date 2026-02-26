const changeColor = document.querySelector(".main");

changeColor.addEventListener("click", (e) => {

document.body.style.backgroundColor = e.target.id;

});~~