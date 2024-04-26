const button=document.getElementById("button")
const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',changebackground);
    function changebackground(){
let hexcolor='#'
for(let i=1;i<=6;i++){
    hexcolor=hexcolor+randomvalue()
    }
    wrap.style.backgroundColor=hexcolor
    color.innerHTML=hexcolor
    console.log(hexcolor)
}
function randomvalue(){
let hexvalue=Math.floor(Math.random()*16)
return hex[hexvalue]
}