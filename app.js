const b = document.querySelector('button.btn_yes')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;


    b.style.right = i + "px"
    b.style.bottom = j + "px"


}