

const mobileNav=document.getElementById("mnav")
const closeBtn=document.getElementById("mnav_close_btn")
const closeBtnIcon=document.getElementById("mnav_close_btn_icon")


closeBtn.addEventListener("click",()=>{
    if (mobileNav.classList.contains("-left-[300px]")) {
        mobileNav.classList.toggle("left-0")
        
        closeBtnIcon.classList.toggle("fa-angle-left")
        closeBtnIcon.classList.toggle("fa-angle-right")
        
    }
    
})