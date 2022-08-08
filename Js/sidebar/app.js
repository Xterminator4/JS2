const openn =  document.querySelector(".sidebar-toggle")
const close = document.querySelector(".close-btn")
const side = document.querySelector(".sidebar")

openn.addEventListener('click',function(){
    side.classList.toggle("show-sidebar")
})

close.addEventListener('click', function(){
if(side.classList.contains("show-sidebar")){
side.classList.remove("show-sidebar")
}
})
