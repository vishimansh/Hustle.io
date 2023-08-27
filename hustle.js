var anime=gsap.timeline()
var got=gsap.timeline()
anime.from("#navp1 h3",{
    x:-100,
    opacity:0,
    duration:0.4,
    delay:0.4,
    stagger:0.3  
})
anime.from("#navp2 a",{
    y:100,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.3
})
anime.from("#navp3 form,#navp3 button",{
    x:100,
    opacity:0,
    duration:0.4,
    delay:0.4,
    stagger:0.3
})
anime.from("#left1 h1,#left1 h2,#downloads1,#right1 img,#downloads h4,#downloads i",{ 
opacity:0,
delay:0.3,
duration:0.3
})

anime.from("#left1 button",{ 
    opacity:0,
    delay:0.3,
    duration:0.4
    })
gsap.from("#page2 h1",{
x:-100,
opacity:0,
duration:0.6,
delay:0.5,
scrollTrigger:{
trigger:"#page2 h1",
scroller:"body",
start:"top 30%"
}
})
gsap.from("#creators",{
    x:-100,
    opacity:0,
    duration:1,
    delay:0.6,
    scrollTrigger:{
    trigger:"#creators",
    scroller:"body",
    start:"top 30%"
    }
    })
    gsap.from("#page2 h2",{
        x:100,
        opacity:0,
        duration:0.5,
        delay:0.2,
        scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        start:"top -20%"
        }
        })
        gsap.from("#page3 h1",{
            
            opacity:0,
            duration:0.9,
            delay:0.55,
            scrollTrigger:{
            trigger:"#page3 h1",
            scroller:"body",
            start:"top 70%"
            }
            })
            gsap.from("#courseflex1,#courseflex2",{
            
                opacity:0,
                duration:1.2,
                delay:0.3,
                scrollTrigger:{
                trigger:"#coursflex1,#courseflex2",
                scroller:"body",
                start:"top 90%"
             
                }
                })
                gsap.from("#ech1,#feature",{
            
                    opacity:0,
                    duration:0.6,
                    delay:0.4,
                    scrollTrigger:{
                    trigger:"#ech1,#feature",
                    scroller:"body",
                  
                    start:"top 60%"
                 
                    }
                    })
                    gsap.from("#footer",{
            
                        opacity:0,
                        duration:0.6,
                        delay:0.4,
                        scrollTrigger:{
                        trigger:"#footer",
                        scroller:"body",
                        start:"top 90%"
                     
                        }
                        })
       
                     