/* CARD PARALLAX EFFECT */

/*class parallaxTiltEffect {
    constructor({element, tiltEffect}) {
        this.element = element;
        this.container = this.element.querySelector(".container");
        this.size = [300, 360];
        [this.w, this.h] = this.size;

        this.tiltEffect = tiltEffect;
        this.mouseOnComponent = false;

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init = this.init.bind(this);

        this.init();
    }

    handleMouseMove(event) {
        const {offsetX, offsetY} = event;
        let X, Y;

        if (this.tiltEffect == "normal") {
            X = (-(offsetX - (this.w / 2)) / 3) / 3;
            Y = ((offsetY - (this.h / 2)) / 3) / 3;
        }

        this.setProperty('--rY', X.toFixed(2));
        this.setProperty('--rX', Y.toFixed(2));

        this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
        this.setProperty('--bX', (80 - (Y/4).toFixed(2)) + '%');
    }

    handleMouseEnter() {
        this.mouseOnComponent = true;
        this.container.classList.add("active-mode");
    }

    handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
    }

    defaultStates() {
        this.container.classList.remove("active-mode");
        this.setProperty('--rY', 0);
        this.setProperty('--rX', 0);

        this.setProperty('--bY', '80%');
        this.setProperty('--bX', '50%');
    }

    setProperty(p, v) {
        return this.container.style.setProperty(p, v);
    }

    init() {
        this.element.addEventListener('mousemove', this.handleMouseMove);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
}

const $ = e => document.querySelector(e);

const wrap1 = new parallaxTiltEffect({
    element: $('.card-wrap-1'),
    tiltEffect: 'normal'
})

const wrap2 = new parallaxTiltEffect({
    element: $('.card-wrap-2'),
    tiltEffect: 'normal'
})

const wrap3 = new parallaxTiltEffect({
    element: $('.card-wrap-3'),
    tiltEffect: 'normal'
})*/

/* - - - - - - - - - - MENU BUTTON ANIMATION - - - - - - - - - -*/

const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.side-navbar');
let menuOpen = false;

menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('open');

        sidebar.classList.remove('close');
        sidebar.classList.add('open');
        //sidebar.style.display = "flex";
        menuOpen = true;
    }
    else {
        menuButton.classList.remove('open');
        
        sidebar.classList.remove('open');
        sidebar.classList.add('close');
        //sidebar.style.display = "none";
        menuOpen = false;
    }
});

/* GIF LOADER */

/*
setTimeout(function(){
    document.getElementById('gif').style.display = "initial";
   }, 9000);
*/

/* ARROW LOADER */

/*setTimeout(function(){
    var temp_x = document.getElementById('landing-arrow__component');
    temp_x.style.display = "block";
   }, 6000);*/

/* ARROW ACTION */


/* DEVLOPER SECTION TEXT */

/* TEXT ANIMATOR */

/*
const title = document.querySelectorAll("#title polygon")

for (let i = 0; i < title.length; i++) {
    console.log(`Letter ${i} is ${title[i].getTotalLength()}`);
}
*/

/* UNHIDE RIGHT BRAIN */

var rightBrainHover = document.getElementById('hlbo')
var rightBrainGifHover = document.getElementById('hrb')

var rightBrainArrowSection = document.getElementById('landing-arrow-icon')

rightBrainHover.addEventListener("click", function() {
    if (rightBrainGifHover.classList.contains('active')) {
        var path = document.querySelectorAll('.cls-2');

        rightBrainGifHover.classList.remove('active');

        rightBrainArrowSection.classList.remove('active');

        var revealRightSection = document.getElementById('right-brain-things');

        revealRightSection.classList.remove('active');
    }
    else {
        rightBrainGifHover.classList.add('active');

        rightBrainArrowSection.classList.add('active');

        /* RIGHT BRAIN ANIMATION */

        var path = document.querySelectorAll('.cls-2');

        for (let i = 0; i < path.length; i++) {
            var length = path[i].getTotalLength();

            path[i].style.transition = path[i].style.WebkitTransition = 'none';

            path[i].style.strokeDasharray = length;
            path[i].style.strokeDashoffset = length;

            path[i].getBoundingClientRect();

            path[i].style.transition = path[i].style.WebkitTransition = 'stroke-dashoffset 10s ease-in-out';

            path[i].style.strokeDashoffset = '0';
        }

        var revealRightSection = document.getElementById('right-brain-things');

        revealRightSection.classList.add('active');

        /*var toFill = document.getElementById('hlbo');

        toFill.style.fill = 'none';
        toFill.style.opacity = '0.1';

        toFill.style.transition = toFill.style.WebkitTransition = 'to-fill 5s ease-in-out';

        toFill.style.fill = '#00cbe7';
        toFill.style.opacity = '1';*/

        

    }
}, false);

/* SCROLLING ANIMATION */

/*var temp = 0;
var currentScroll = 0;

window.addEventListener('scroll', function() {
    var nextScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    developerSectionScroll = document.getElementById('developer-page').offsetTop;
    developerSectionScrollTwo = developerSectionScroll + 300;

    if (nextScroll > currentScroll){
        if (nextScroll < developerSectionScrollTwo && nextScroll >= developerSectionScroll) {
            if (temp >= -44) {
                temp--;
            }
        }
    }
    else {
        if (nextScroll < developerSectionScrollTwo && nextScroll >= developerSectionScroll) {
            if (temp <= -1) {
                temp++
            }
        }
    }

    console.log(temp)

    if (nextScroll >= developerSectionScroll) {
        document.getElementById('first-section').setAttribute("style", "position: fixed; top: 50%; margin-top: 0;");
        document.getElementById('bottom-first-section').style.opacity = (250 - (nextScroll - developerSectionScroll)) / 250;
        document.getElementById('bottom-first-section').style.transform = "translateY(" + temp + "px)";
    }

    if (nextScroll < developerSectionScroll) {
        document.getElementById('first-section').setAttribute("style", "position: absolute; top: none; margin-top: 50vh;");
        document.getElementById('bottom-first-section').style.transform = "translateY(" + 0 + "px)";
    }

    document.getElementById('bottom-second-section').style.opacity = (nextScroll - developerSectionScroll) / 275;

    currentScroll = nextScroll;
}, false);*/
