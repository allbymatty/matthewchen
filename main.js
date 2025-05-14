window.onload = function(){
    setTimeout(loadLanding, 1000)
    setTimeout(loadLandingAnimation, 1800);
};

function loadLanding() {
    document.getElementById('regular-screen').classList.add('active');
}

function loadLandingAnimation() {
    document.getElementById('matt-page').style.display = "block";
}; // load paint strokes and name animation

const cursor = document.querySelector('.cursor');
const innerCursor = document.querySelector('.inner-cursor');
const leftArrowCursor = document.querySelector('.left-arrow-cursor');
const rightArrowCursor = document.querySelector('.right-arrow-cursor');

const screenModeTag = document.querySelector('#light-dark-tag');
const sectionsTag = document.querySelector('#click-tag');
const exploreTag = document.querySelector('#explore-tag');
const emailTag = document.querySelector('#contact-tag');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;");
    
    innerCursor.style.top = e.pageY;
    innerCursor.style.left = e.pageX;

    leftArrowCursor.style.top = e.pageY;
    leftArrowCursor.style.left = e.pageX;

    rightArrowCursor.style.top = e.pageY;
    rightArrowCursor.style.left = e.pageX;

    screenModeTag.style.top = e.pageY;
    screenModeTag.style.left = e.pageX + 40;

    sectionsTag.style.top = e.pageY;
    sectionsTag.style.left = e.pageX + 40;

    exploreTag.style.top = e.pageY;
    exploreTag.style.left = e.pageX + 40;

    emailTag.style.top = e.pageY;
    emailTag.style.left = e.pageX - 150;
});

document.addEventListener('click', e => {
    cursor.classList.add("click");

    setTimeout(() => {
        cursor.classList.remove("click");
    }, 200)
});

const socialsButton = document.querySelectorAll('.socials-title');

socialsButton.forEach(element => {
    element.addEventListener("mouseover", e => {
        innerCursor.style.opacity = 0;
        leftArrowCursor.style.opacity = 0;
        rightArrowCursor.style.opacity = 1;
        cursor.classList.add('active');
    });

    element.addEventListener("mouseleave", e=> {
        innerCursor.style.opacity = 1;
        leftArrowCursor.style.opacity = 0;
        rightArrowCursor.style.opacity = 0;
        cursor.classList.remove('active');
    });
})

const screenMode = document.querySelectorAll('.light-dark-toggle');
const mobileScreen = document.querySelector(".mobile-screen");
const desktopScreen = document.querySelector(".regular-screen");

screenMode.forEach(element => {
    element.addEventListener("click", e => {
        console.log("hi")
        if (mobileScreen.classList.contains("light") || desktopScreen.classList.contains("light")) {
            mobileScreen.classList.remove("light");
            mobileScreen.classList.add("dark");

            desktopScreen.classList.remove("light");
            desktopScreen.classList.add("dark");

            innerCursor.style.removeProperty('background');
        }
        else {
            mobileScreen.classList.remove("dark");
            mobileScreen.classList.add("light");

            desktopScreen.classList.remove("dark");
            desktopScreen.classList.add("light");

            innerCursor.style.removeProperty('background');
        }
    })

    element.addEventListener("mouseover", e => {
        screenModeTag.style.display = "block";
    })

    element.addEventListener("mouseleave", e => {
        screenModeTag.style.display = "none";
    })
});

const contact = document.querySelector(".contact-wrapper");
const contactH3Content = document.querySelector("#contact-tag");

contact.addEventListener("mouseover", e => {
    contact.classList.add('active');
    cursor.classList.add('active');
    emailTag.style.display = "block";
    innerCursor.style.background = "#9FBBC9"
})

contact.addEventListener("mouseleave", e => {
    contact.classList.remove('active');
    cursor.classList.remove('active');
    emailTag.style.display = "none";
    if (mobileScreen.classList.contains("light") || desktopScreen.classList.contains("light")) {
        innerCursor.style.background = "#EAD8BF"
    }
    else {
        innerCursor.style.background = "#F3F3F3"
    }
})

contact.addEventListener("click", e => {
    var copyText = "matthewchen@g.ucla.edu";
    copyToClipboard(copyText);
    contactH3Content.style.paddingLeft = "15px";
    contactH3Content.innerHTML = "copied email";
    setTimeout(() => {
        contactH3Content.style.paddingLeft = "0px";
        contactH3Content.innerHTML = "send me an email";
    }, 500)
})

function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

const circle_developer = document.querySelector('#circle2a');
const circle_designer = document.querySelector('#circle3a');
const circle_student = document.querySelector('#circle4a');
const circle_photographer = document.querySelector('#circle1a');

const description_regular = document.querySelector('#about-me');
const description_developer = document.querySelector('#developer');
const description_designer = document.querySelector('#designer');
const description_student = document.querySelector('#student');
const description_photographer = document.querySelector('#photographer');

circle_developer.addEventListener("mouseover", e => {
    description_regular.classList.remove("active");
    description_developer.classList.add("active");
})

circle_developer.addEventListener("mouseleave", e => {
    //setTimeout(() => {
        description_developer.classList.remove("active");
        description_regular.classList.add("active");
    //}, 500)
})

circle_designer.addEventListener("mouseover", e => {
    description_regular.classList.remove("active");
    description_designer.classList.add("active");
})

circle_designer.addEventListener("mouseleave", e => {
    description_designer.classList.remove("active");
    description_regular.classList.add("active");
})

// circle_designer.addEventListener("click", e => {
//     design_section.classList.add('active')
// })

circle_student.addEventListener("mouseover", e => {
    description_regular.classList.remove("active");
    description_student.classList.add("active");
})

circle_student.addEventListener("mouseleave", e => {
    description_student.classList.remove("active");
    description_regular.classList.add("active");
})

circle_photographer.addEventListener("mouseover", e => {
    description_regular.classList.remove("active");
    description_photographer.classList.add("active");
    sectionsTag.style.display = "block";
})

circle_photographer.addEventListener("mouseleave", e => {
    description_photographer.classList.remove("active");
    description_regular.classList.add("active");
    sectionsTag.style.display = "none";
})

circle_photographer.addEventListener("click", e => {
    photograph_section.classList.add("active");
})

const design_section = document.querySelector('#designer-page');
const designs = document.querySelectorAll('.design');

design_section.addEventListener("mouseover", e => {
    designs.forEach(element => {
        element.addEventListener('mouseover', e => {
            innerCursor.style.opacity = 1;
            leftArrowCursor.style.opacity = 0;
            cursor.classList.remove('active');
        })
    
        element.addEventListener('mouseleave', e => {
            innerCursor.style.opacity = 0;
            leftArrowCursor.style.opacity = 1;
            cursor.classList.add('active');
        })
    })
})

design_section.addEventListener("mouseleave", e => {
    innerCursor.style.opacity = 1;
    leftArrowCursor.style.opacity = 0;
    cursor.classList.remove('active');
})

design_section.addEventListener("click", e => {
    if (cursor.classList.contains('active')) {
        design_section.classList.remove('active')
    }
})

const photograph_section = document.querySelector('#photographer-page');
const photographs = document.querySelectorAll('.photograph');

document.onkeydown = (e) => {
    if ((e.key == "Escape" || e.key == "Esc") && photograph_section.classList.contains('active')) {
        photograph_section.classList.remove('active');
    }
    if ((e.key == "Escape" || e.key == "Esc") && design_section.classList.contains('active')) {
        design_section.classList.remove('active');
    }
}

photograph_section.addEventListener("mouseover", e => {
    photographs.forEach(element => {
        element.addEventListener('mouseover', e => {
            innerCursor.style.opacity = 1;
            leftArrowCursor.style.opacity = 0;
            cursor.classList.remove('active');
        })
    
        element.addEventListener('mouseleave', e => {
            innerCursor.style.opacity = 0;
            leftArrowCursor.style.opacity = 1;
            cursor.classList.add('active');
        })
    })
})

photograph_section.addEventListener("mouseleave", e => {
    innerCursor.style.opacity = 1;
    leftArrowCursor.style.opacity = 0;
    cursor.classList.remove('active');
})

photograph_section.addEventListener("click", e => {
    if (cursor.classList.contains('active')) {
        photograph_section.classList.remove("active");
    }
})
