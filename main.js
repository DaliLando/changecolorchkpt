let colBox=document.getElementById("color-box");
let colBtn=document.getElementById("change-color-btn");
let palette= ["red","blue","green","black","pink","aqua","teal","lawngreen"]
function getRandomColor(){
for (let i=0;i<palette.length;i++){
    let result = palette[Math.floor(Math.random()*palette.length)];
    return result;

}
}
console.log(getRandomColor())

colBtn.addEventListener("click", function(){
    colBox.style.backgroundColor= getRandomColor();
})

