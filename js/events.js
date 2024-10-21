const scrollContainer = document.getElementById("scroll__container");
const scrollLine = document.querySelector(".scroll__line");
let ourEvents = document.getElementById("our__events");

// Events
let eventsOne = document.querySelectorAll(".event_one");
let eventDescOne = document.querySelectorAll(".event__details_one");
let eventImgOne = document.querySelectorAll(".event__img_one");

let eventsTwo = document.querySelectorAll(".event__two");
let eventDescTwo = document.querySelectorAll(".event__details_two");
let eventImgTwo = document.querySelectorAll(".event__img_two");

let isInView = false;
let containerTop = 0;
let containerHeight = 0;
let maxMove = 0;
let lastScrollTop = 0;
let scrollDirection = "down";

// Animations
const eventScroll = (nameEle, descEle, imgEle, rev = false) => {

    if (rev) {
        gsap.from(nameEle, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: nameEle,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        });

        gsap.from(imgEle, {
            clipPath: "polygon(0 0, 0 100%, 100% 100%, 0% 100%)",
            y: -150,
            ease: Power3.easeIn,
            scrollTrigger: {
                trigger: imgEle,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 1,
            },
        });

    } else {
        gsap.from(nameEle, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: nameEle,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        });

        gsap.from(imgEle, {
            clipPath: "polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)",
            y: 150,
            ease: Power3.easeIn,
            scrollTrigger: {
                trigger: imgEle,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 1,
            },
        });
    }

    const splittedWords = descEle.textContent.split(" ");
    descEle.innerHTML = "";
    splittedWords.forEach((words) => {
        if (words.length > 0) {
            descEle.innerHTML += `<span>${words} </span>`;
        }
    });

    let eventDetailsSpan = descEle.querySelectorAll("span");

    gsap.from(eventDetailsSpan, {
        color: "gray",
        // opacity: 0,
        // skewX: 30,
        stagger: 0.1,
        ease: Power3.easeOut,
        scrollTrigger: {
            trigger: descEle,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        },
    });



}

// Load Animation
document.addEventListener("DOMContentLoaded", () => {
    const text = ourEvents.textContent;

    ourEvents.innerHTML = "";

    text.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter.trim();
        ourEvents.appendChild(span);
    })

    const spans = ourEvents.querySelectorAll("span");

    const r = Array.from(spans).find((span) => span.textContent === "r");
    r.classList.add("mr-4")
    r.classList.add("md:mr-16")


    gsap.from(spans, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        rotate: 60,
        ease: "back.out"
    });


    eventsOne.forEach((event, index) => {
        eventScroll(event, eventDescOne[index], eventImgOne[index]);
    })

    eventsTwo.forEach((event, index) => {
        eventScroll(event, eventDescTwo[index], eventImgTwo[index], true);
    });



});


function updateContainerMetrics() {
    const rect = scrollContainer.getBoundingClientRect();
    containerTop = rect.top + window.scrollY;
    containerHeight = rect.height;
    maxMove = containerHeight - scrollLine.offsetHeight;
}

function checkInView() {
    const rect = scrollContainer.getBoundingClientRect();
    isInView = rect.top < window.innerHeight && rect.bottom > 0;
}

function updateScroll() {
    if (!isInView) return;

    const scrollProgress = (window.scrollY - containerTop + window.innerHeight) / (containerHeight + window.innerHeight);
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    const newY = clampedProgress * maxMove;

    gsap.set(scrollLine, { y: newY });

    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop && scrollDirection !== "down") {
        scrollLine.classList.remove("bg-gradient-to-t");
        scrollLine.classList.add("bg-gradient-to-b");
        scrollDirection = "down";
    } else if (currentScrollTop < lastScrollTop && scrollDirection !== "up") {
        scrollLine.classList.remove("bg-gradient-to-b");
        scrollLine.classList.add("bg-gradient-to-t");
        scrollDirection = "up";
    }
    lastScrollTop = currentScrollTop;
}

function onScroll() {
    checkInView();
    if (isInView) {
        requestAnimationFrame(updateScroll);
    }
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", () => {
    updateContainerMetrics();
    onScroll();
});

updateContainerMetrics();
onScroll();




