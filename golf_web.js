
// scroll effect 

gsap.to("#navbar", {
    backgroundColor: "black",
    duration: 2,
    height: "90px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers: true,
        start: "top -10px",
        end: "top -30px",
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
        start: "top -1%",
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

    // cursor1.animate({
    //     left: left + "px",
    //     top: top + "px"
    // },{
    //     duration: 100, fill: "forwards"
    // })
    cursor2.animate({
        top: top + "px",
        left: left + "px"
    },{
        duration: 4000, fill: "forwards"
    })
})
