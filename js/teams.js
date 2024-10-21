const imgBox = document.querySelectorAll(".img__box");
const wrap = document.getElementById("wrap");
const imgBlock = document.querySelectorAll(".img__block");
const toggleTeam = document.querySelectorAll(".toggle");



let docWidth = document.body.clientWidth;

let slidesWidth = wrap.clientWidth;
let currentOffset = 0;
let targetOffset = 0;
let isAnimating = false;



window.addEventListener("resize", () => {
    docWidth = document.body.clientWidth;
    slidesWidth = wrap.clientWidth;
});

document.addEventListener("mousemove", (e) => {
    let mouseX = e.pageX;

    targetOffset = -1 * ((mouseX / docWidth) * slidesWidth - mouseX / 2);

    if (!isAnimating) {
        requestAnimationFrame(updateOffset);
    }
});


const updateOffset = () => {
    isAnimating = true;
    currentOffset = lerp(currentOffset, targetOffset, 0.075);

    if (Math.abs(currentOffset - targetOffset) < 0.5) {
        currentOffset = targetOffset;
        isAnimating = false;
    }

    for (let i = 0; i < imgBlock.length; i++) {
        imgBlock[i].style.transform = `translate3d(${currentOffset}px, 0, 0)`;
    }

    if (isAnimating) {
        requestAnimationFrame(updateOffset);
    }
}

const lerp = (a, b, t) => {
    return (1 - t) * a + t * b;
}


const tl = gsap.timeline({ paused: true });

const path = document.querySelector(".path");

const revealCards = () => {
    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 Z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 Z";

    tl.to(".wines", 0.1, {
        opacity: 1,
        ease: "power2.inOut"
    });

    tl.to(path, 0.8, {
        attr: { d: start },
        ease: Power3.easeIn
    }).to(path, 0.4, {
        attr: { d: end },
        ease: Power3.easeOut
    })

    tl.from(".img__block", 1, {
        clipPath: "inset(0 100% 0 0)",
        ease: "power4.out",
        stagger: 0.25
    });


}

const generateEle = (team, idx) => {
    return `
        <div class="relative flex justify-center z-20 w-[400px] h-[500px] mx-4 bg-[#2b2b2b6b] overflow-clip img__block"
                                style="clip-path: inset(0 0 0 0);">
                                <div class="relative block w-[400px] h-[500px] z-20 p-8 product">
                                    <img src="/images/team/${team}/${idx}.png" alt="team" class="w-full h-full object-contain">
                                </div>
        </div>
`
}

const createTeamData = (team) => {
    wrap.innerHTML = "";
    for (let idx = 0; idx < 4; idx++) {
        const ele = generateEle(team, idx);
        wrap.innerHTML += ele;
    }
}

const showCards = () => {
    revealCards();

    toggleTeam.forEach((toggleBtn) => {
        toggleBtn.addEventListener("click", (e) => {
            const parent = toggleBtn.parentElement;
            const team = e.target.getAttribute("data-team");

            setTimeout(() => {
                parent.classList.remove("left-1/2", "-translate-x-1/2");
                toggleBtn.classList.remove("text__stroke", "hover:text-black");
                toggleBtn.classList.add("text-white");
            }, 1000);

            toggleTeam.forEach((el) => {
                setTimeout(() => {
                    el.classList.add("t__stroke_white")
                }, 1000);
            });
            // createTeamData(team);

            tl.reversed(!tl.reversed());
            tl.play();
        });
    })

}

document.addEventListener("DOMContentLoaded", showCards);