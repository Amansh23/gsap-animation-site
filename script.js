var t1 = gsap.timeline();



t1
.from( "#left", {
    duration: 2,
    ease: Expo.easeOut,
    width :0,

})
.from( "#right", {
    duration: 2,
    ease: Expo.easeInOut,
    width :0,

},"=-2.5") 
.from( ".nav", {
    duration: 2,
    ease: Expo.easeInOut,
    opacity: 0,
    y : 30,
    x : 30,
    stagger: 0.8,

}, "=-2")
.from( "#box", {
    duration: 2,
    ease: Expo.easeInOut,
    x : -50,
    opacity: 0,

})

.from( "#box3", {
    duration: 2,
    ease: Expo.easeInOut,
    x : -50,
    opacity: 0,

},"=-1.5")
.from( "#ln", {
    duration: 2,
    ease: Expo.easeInOut,
    width :0,
    opacity:0,

}, "=-1")
.from( "#nav22", {
    duration: 2,
    ease: Expo.easeInOut,
    x: 30,
    opacity:0,

}, "=-1")