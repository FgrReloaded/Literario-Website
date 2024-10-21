/*
    Developer: Nitish Singh
*/

const searchIcon = document.getElementById("search__icon");
const menuIcon = document.getElementById("menu__icon");
const menuText = document.getElementById("menu__text");
const menuCross = document.getElementById("menu__cross");
const verticalLineContainer = document.getElementById("vertical__line");
const cursor = document.querySelector(".cursor");
const roundedCircle = document.getElementById("rounded__circle");
const textContainer = document.querySelector(".text__container");
const posterContainer = document.querySelector(".poster__container");
const eventCard = document.querySelector(".event__card");


let isActiveSearch = false;
let isActiveMenu = false;


document.querySelectorAll('div[href^="#"]').forEach(anchor => {
    console.log('anchor', anchor);

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            lenis.scrollTo(targetElement, {
                offset: 0,
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        }else{
            window.location.href = "/index.html#about";
        }
    });
});

// Registering ScrollTrigger
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".nav__text", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
    let literarioSpans = textContainer.querySelectorAll("span");
    gsap.from(literarioSpans, {
        y: -200,
        opacity: 0,
        stagger: 0.075,
        duration: .5,
        ease: "power4.out"
    });

    gsap.registerPlugin(ScrollTrigger);

});

// Cursor
window.addEventListener("mousemove", (e) => {
    cursor.animate([
        { left: `${e.clientX + 10}px`, top: `${e.clientY}px` }
    ], {
        duration: 100,
        fill: "forwards"
    });
});

// Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const addMultipleVerticalLines = () => {
    for (let i = 0; i < 120; i++) {
        const verticalLine = document.createElement("span");
        verticalLine.innerText = "|";
        verticalLineContainer.appendChild(verticalLine);
    }
}


searchIcon.addEventListener("click", () => {
    if (!isActiveSearch) {
        gsap.to(".search__box", {
            height: "100%",
            paddingBottom: "1rem",
            paddingTop: "3rem",
            borderBottom: "1px solid #fff",
            duration: 0.75,
            ease: "power4.out",
            onComplete: () => {
                isActiveSearch = true;
            }
        })
        return;
    }

    gsap.to(".search__box", {
        height: "0",
        paddingBottom: "0",
        paddingTop: "0",
        borderBottom: "none",
        duration: 0.75,
        ease: "power4.out",
        onComplete: () => {
            isActiveSearch = false;
        }
    })
});

menuIcon.addEventListener("click", () => {
    if (!isActiveMenu) {
        gsap.to(".menu__box", {
            height: "75vh",
            duration: 0.75,
            ease: "power4.out",
            onComplete: () => {
                isActiveMenu = true;
            }
        })

        gsap.to(".menu__bar", {
            borderBottomLeftRadius: "0",
            duration: 0.75,
            ease: "power4.out"
        })
        menuText.textContent = "Close";
        gsap.to("#menu__cross", {
            rotate: "45deg",
            duration: 0.75,
            ease: "power4.out"
        })

        return;
    }

    gsap.to(".menu__box", {
        height: "0",
        duration: 0.75,
        ease: "power4.out",
        onComplete: () => {
            isActiveMenu = false;
        }
    })

    gsap.to(".menu__bar", {
        borderBottomLeftRadius: "1.5rem",
        duration: 0.75,
        ease: "power4.out"
    })
    menuText.textContent = "Menu";
    gsap.to("#menu__cross", {
        rotate: "0deg",
        duration: 0.75,
        ease: "power4.out"
    })
});

addMultipleVerticalLines();



const defaultScale = 1;
const hoverScale = 1.35;
const neighbourScale = 1.15;


if (textContainer) {
    const spans = textContainer.querySelectorAll("span");

    textContainer.addEventListener("mouseover", (e) => {
        const target = e.target;
        const idx = Array.from(spans).indexOf(target);

        const mouseX = e.pageX - textContainer.offsetLeft;
        const boxCenterX = textContainer.offsetWidth / 2;

        gsap.to(textContainer, {
            x: -(mouseX - boxCenterX) / 20,
            duration: 1,

        });

        spans.forEach((span, i) => {
            let scale = defaultScale;

            if (i === idx) {
                scale = hoverScale;
            } else if (i === idx - 1 || i === idx + 1) {
                scale = neighbourScale;
            }

            gsap.to(span, {
                scale,
                duration: 0.5,
                ease: "power4.out"
            })

            if (i === idx) {
                gsap.to(span, {
                    duration: 0.5,
                    ease: "power4.out"
                })
            }
        })
    });

    textContainer.addEventListener("mouseleave", () => {
        spans.forEach((span) => {
            gsap.to(span, {
                scale: defaultScale,
                rotate: "0deg",
                duration: 0.5,
                ease: "power4.out"
            })
        })
    })
}

// Rounded Circle
const roundedText = (ele) => {
    ele.innerHTML = ele.innerText.split("").map((char, i) => {
        return `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`;
    }).join("");
}

roundedText(roundedCircle);

// Event
if (eventCard) {
    eventCard.addEventListener("mouseover", (e) => {
        posterContainer.style.pointerEvents = "none";
        // posterContainer.classList.add("w-52", "h-52");
        // const img = `<img src='/images/events/jam.png' alt='bulb' class="rounded-full object-cover w-full h-full">`;
        // posterContainer.innerHTML = img;

        const img = posterContainer.querySelector(".up_event__img");
        img.classList.add("active");
    });

    eventCard.addEventListener("mouseleave", (e) => {
        posterContainer.style.pointerEvents = "auto";

        const img = posterContainer.querySelector(".up_event__img");
        img.classList.remove("active");
    });
}




// Marque
tailwind.config = {
    theme: {
        extend: {
            animation: {
                'marquee': 'marquee var(--marquee-duration) linear infinite',
                'marquee-vertical': 'marquee-vertical var(--marquee-duration) linear infinite',
            },
            keyframes: {
                marquee: {
                    '100%': { transform: 'translateX(-50%)' }
                },
                "marquee-vertical": {
                    '100%': { transform: 'translateY(-50%)' }
                }
            }
        }
    }
}