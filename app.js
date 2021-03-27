const btn= document.querySelector(".btn");
const h1= document.querySelector("h1")
btn.addEventListener("click",()=>{
    const changec= newcolor()
    document.body.style.backgroundColor=changec
    h1.innerText=newcolor()
})

function newcolor(){
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`

}
