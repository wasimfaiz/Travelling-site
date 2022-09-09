const boxes = gsap.utils.toArray('.fadin');

boxes.forEach((box, i) => {
  var anim = gsap.fromTo(box, {autoAlpha: 0, y: 100, opacity: 0}, {duration: 1.5, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

var tl = gsap.timeline();
tl
gsap.from("#sec1 #top", {
    opacity: 0,
    y: 40,
    duration: 2,

})

gsap.from("#sec1 #rgt", {
    opacity: 0,
    width: 0,
    // y: 50,
    duration: 2,

})

gsap.from("#sec1 #rgt .a", {
    opacity: 0,
    stagger: .2,
    delay: 2,
    y: 30,
    duration: 2,

})

gsap.from("#sec1 #blft", {
    opacity: 0,
    // width: 0,
    y: -50,
    x: 50,
    duration: 2,
})

// gsap.from(".b", {
//     x: -1000,
//     delay: 5,
//     duration: 2,
// })

var anim = gsap.from(".b", {
    x: -1000,
    delay: 1,
    duration: 2,
});
ScrollTrigger.create({
  trigger: ".b",
  animation: anim,
  toggleActions: 'play none none none',
  once: true,
});

var txt = gsap.from("#txt1", {
   height: 0,
   opacity: 0,
   duration: 2,
});
ScrollTrigger.create({
  trigger: "#txt1",
  animation: txt,
  toggleActions: 'play none none none',
  once: true,
});

var txt = gsap.from("#txt1 h2", {
    height: 0,
    opacity: 0,
    x: -1000,
    duration:2,
    delay:1
 });
 ScrollTrigger.create({
   trigger: "#txt1",
   animation: txt,
   toggleActions: 'play none none none',
   once: true,
 });

 var txt = gsap.from("#para1", {
    opacity: 0,
    duration:2,
    delay:1
 });
 ScrollTrigger.create({
   trigger: "#para1",
   animation: txt,
   toggleActions: 'play none none none',
   once: true,
 });

 var txt = gsap.from("#main3 #imgs #patti", {
  opacity: 0,
  duration:2,
  delay:0,
  width: 0
});
ScrollTrigger.create({
 trigger: "#para3",
 x: -20,
 animation: txt,
 toggleActions: 'play none none none',
 once: true,
});

