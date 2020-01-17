window.onload = function() {
    document.getElementById("rain").play();
};

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//End Section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    //how many pixels to scroll; 5000 = 5 seconds = duration of video
    duration: 5000,
    //when something should be triggered
    triggerElement: intro,
    //
    triggerHook: 0,
})
//see scrolling markers
.addIndicators()
//prevent img from scrolling until trigger meets end
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim= TweenMax.fromTo(text, 12, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 12000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//Video Animation
//frame rate of video upon scroll stop ("easing", allowing frame rate to catch up)
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

//event listener on scroll from ScrollMagic
scene.on('update', e => {
    //convert scroll ms to seconds
    scrollpos = e.scrollPos / 1000;
    //tracks scroll position event
    console.log(e);
});

setInterval(() => {
    //add whatever we scroll to to delay, then accelerate by 0.1
    delay += (scrollpos - delay) * accelamount;
    //shows that delay catches up to scroll position
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 41.67); //accounting for framerate, 1000/framerate)
