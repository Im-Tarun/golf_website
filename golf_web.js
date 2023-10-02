
// scroll effect 

gsap.to("#navbar", {
    backgroundColor: "black",
    duration: 2,
    height: "90px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers: true,
        start: "top -20px",
        end: "top -20px",
        scrub: .7
    }
})
gsap.to("main", {
    backgroundColor: "black",
    // duration:2,
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start: "top -3%",
        end: "top -60%",
        scrub: 2
    }
})
gsap.to("#bottom-gradient", {
    display:"none",
    scrollTrigger:{
        trigger:"#bottom-gradient",
        scroller:"body",
        // markers: true,
        start: "top 90px",
        end: "top 90px",
        scrub: true
    }
})


// cursor

const cursor1 = document.getElementById("small-cursor")
const cursor2 = document.getElementById("large-cursor")

document.addEventListener("mousemove",(movement) => {
    // console.log(movement)
    const left = movement.clientX
    const top = movement.clientY

    cursor1.style.left = left + "px"
    cursor1.style.top = top  +"px"
    cursor2.style.left = left + "px" 
    cursor2.style.top = top +"px"

    cursor1.animate({
        left: left + "px",
        top: top + "px"
    },{
        duration: 400, fill: "forwards"
    })
    cursor2.animate({
        top: top + "px",
        left: left + "px"
    },{
        duration: 4000, fill: "forwards"
    })
})

// cursor hover properties

const hovercursor = document.querySelectorAll(".hovercursor")


hovercursor.forEach(function (element){
    element.addEventListener("mouseenter", ()=>{
        cursor1.animate({
            backgroundColor: "transparent",
            height: "80px",
            width: "80px",
            border: "1.5px solid white"
        },{
            duration: 350, fill: "forwards"
        })
    
    })
})
hovercursor.forEach(function (element){
    element.addEventListener("mouseleave", ()=>{
        cursor1.animate({
            backgroundColor: "#a2d122",
            height: "20px",
            width: "20px",
            border: "none"
        },{
            duration: 200, fill: "forwards"
        })

    })
})

// nav content color black on hover 

let heading = document.querySelectorAll(".blackin")
let navbar = document.getElementById("navbar")

heading.forEach(function (elem){
   elem.addEventListener("mouseenter", () =>{
        if(navbar.style.backgroundColor == "black"){
            elem.style.color = "#a2d122"
        }
        else{
            elem.style.color = "black"

        }
   }) 
})
heading.forEach(function (elem){
   elem.addEventListener("mouseleave", () =>{
        elem.style.color = "white"
   }) 
})

// image scrolltrigger

gsap.from("#card-1, #card-2, #card-3",{
    scale: 0.1,
    y: 250,
    opacity:0,
    stagger: 3,
    duration: 10,
    scrollTrigger:{
        trigger: "#card-trigger",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start:" 39%",
        end:" 34%",
    }

})
gsap.to("#card-1, #card-2, #card-3",{
    y:0,
    scale:1,
    opacity:1,
})


//three large button functioning

let big_btn = document.querySelectorAll(".big-buttons")
let bact_txt = document.getElementById("btn-back-text")

big_btn.forEach((box) =>{
    box.addEventListener("mouseenter",() =>{
        bact_txt.style.textShadow = "1px 1px 0 #95c11e,-1px -1px 0 #95c11e,-1px 1px 0 #95c11e, 1px -1px 0 #95c11e "
    })
})
big_btn.forEach((box) =>{
    box.addEventListener("mouseleave",() =>{
        bact_txt.style.textShadow = "1px 1px 0 white,-1px -1px 0 white,-1px 1px 0 white, 1px -1px 0 white "
    })
})

// back text translate on scroll

gsap.to("#btn-back-text", {
    y: -140,
    scrollTrigger:{
        trigger:".big-buttons",
        scroller:"body",
        // markers: true,
        start: "top 90%",
        end: "top 90%",
        scrub: 1.5
    }
})

// project closed 


