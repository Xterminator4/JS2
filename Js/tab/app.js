const hsbtn = document.querySelector("#hs")
const vsbtn = document.querySelector("#vs")
const gsbtn = document.querySelector("#gs")

const hsct = document.querySelector("#history")

const vsct = document.querySelector("#vision")

const gsct = document.querySelector("#goals")

hsbtn.addEventListener("click",function(){
    vsbtn.classList.remove("active")
    vsct.classList.remove("active")
    gsbtn.classList.remove("active")
    gsct.classList.remove("active")
    hsbtn.classList.add("active")
    hsct.classList.add("active")
})

vsbtn.addEventListener("click",function(){
    hsbtn.classList.remove("active")
    hsct.classList.remove("active")
    gsbtn.classList.remove("active")
    gsct.classList.remove("active")
    vsbtn.classList.add("active")
    vsct.classList.add("active")
})

gsbtn.addEventListener("click",function(){
    hsbtn.classList.remove("active")
    hsct.classList.remove("active")
    vsbtn.classList.remove("active")
    vsct.classList.remove("active")
    gsbtn.classList.add("active")
    gsct.classList.add("active")
})