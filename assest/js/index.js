let navlink=document.querySelectorAll(".nav-link");

navlink.forEach(item=>(
    item.addEventListener("click",()=>{
        navlink.forEach(link=>(
            link.classList.remove("active1")
        ))
        item.classList.add("active1")
    })
))
