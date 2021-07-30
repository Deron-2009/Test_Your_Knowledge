const body=document.querySelector("body")
const form=document.querySelector("form")
const edison=document.querySelector("#edison")
const graham=document.querySelector("#graham")
const peter=document.querySelector("#peter")
const daniel=document.querySelector("#daniel")
const info=document.querySelector("#info")
edison.addEventListener("click",
function(){
    body.style.backgroundColor="red"
    info.value="INCORRECT!!! Try Again!!!"
    info.className="wrong"
    form.className="formclass"
})
graham.addEventListener("click",
function(){
    body.style.backgroundColor="lime"
    info.value="CORRECT!!! Yippeee!!!"
    info.className="right"
    form.className="formclass"
})
peter.addEventListener("click",
function(){
    body.style.backgroundColor="red"
    info.value="INCORRECT!!! Try Again!!!"
    info.className="wrong"
    form.className="formclass"
})
daniel.addEventListener("click",
function(){
    body.style.backgroundColor="red"
    info.value="INCORRECT!!! Try Again!!!"
    info.className="wrong"
    form.className="formclass"
})