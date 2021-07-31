const body=document.querySelector("body")
const formone=document.querySelector(".formone")
const formtwo=document.querySelector(".formtwo")
const formthree=document.querySelector(".formthree")
const form1=document.querySelector("#form1")
const form2=document.querySelector("#form2")
const form3=document.querySelector("#form3")
const edison=document.querySelector("#edison")
const graham=document.querySelector("#graham")
const peter=document.querySelector("#peter")
const daniel=document.querySelector("#daniel")
const johannes=document.querySelector("#johannes")
const george=document.querySelector("#george")
const henlein=document.querySelector("#henlein")
const nikola=document.querySelector("#nikola")
const heddy=document.querySelector("#heddy")
const tim=document.querySelector("#tim")
const james=document.querySelector("#james")
const brahma=document.querySelector("#brahma")
const info=document.querySelector(".info")
const info2=document.querySelector(".info2")
const info3=document.querySelector(".info3")
const empty=document.querySelector(".empty")
const empty2=document.querySelector(".empty2")
const empty3=document.querySelector(".empty3")
edison.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    empty.innerText="🥺😭"
})
graham.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="lime"
    info.value="CORRECT!!!"
    info.className="right"
    empty.innerText="😊😃"
})
peter.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    empty.innerText="🥺😭"
})
daniel.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    empty.innerText="🥺😭"
})
johannes.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="lime"
    info2.value="CORRECT!!!"
    info2.className="right"
    empty2.innerText="😊😃"
})
george.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    empty2.innerText="🥺😭"
})

henlein.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    empty2.innerText="🥺😭"
})
nikola.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    empty2.innerText="🥺😭"
})
heddy.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    empty3.innerText="🥺😭"
})
tim.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    empty3.innerText="🥺😭"
})
james.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="lime"
    info3.value="CORRECT!!!"
    info3.className="right"
    empty3.innerText="😊😃"
})
brahma.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    empty3.innerText="🥺😭"
})