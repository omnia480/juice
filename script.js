var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "80% 60%",
        scrub: true,
    }
});

tl.to("#cans", {
    top: "145%",
    left:"77%",
    width:"30%",
    rotate:"-30deg",
},'.cans');
tl.to("#leaf",{
    top:"150%",
    left:"70%",
    rotate: "0deg",
    width: "12%",
},'.cans')
tl.to("#blackberry1",{
    top:"114%",
    left:"5%",
    rotate: "100deg",
    width: "5%",
},'.cans')
tl.to("#blackberry2",{
    top:"125%",
    left:"83%",
    rotate: "100deg",
    width: "12%",
},'.cans')
tl.to("#blackberry3",{
    top:"163%",
    left:"70%",
    rotate: "60deg",
    width: "5%",
},'.cans')
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
    }
});
tl2.to("#cans",{
    top: "242%",
    left:"50%",
    width:"30%",
    rotate:"0deg",
},'.cans')