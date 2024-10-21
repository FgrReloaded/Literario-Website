let ROWS = 6;
let COLS = 6;
const COOLDOWN = 1000;
let isFlipped = false;


const createTiles = (row, col) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.innerHTML = `
        <div class="tile-face tile-front"></div>
        <div class="tile-face tile-back"></div>
    `;
    const bgPosition = `${col * 20}% ${row * 20}%`;
    tile.querySelector('.tile-front').style.backgroundPosition = bgPosition;
    tile.querySelector('.tile-back').style.backgroundImage = `url("../images/team/${row+1}.jpg")`;

    return tile;
}

const createBoard = () => {
    const board = document.querySelector('.board');

    for (let row = 0; row < ROWS; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let col = 0; col < COLS; col++) {
            rowElement.appendChild(createTiles(row, col));
        }
        board.appendChild(rowElement);
    }
}

const flipTile = () => {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile, idx) => {
        let lastEnterTime = 0;
        tile.addEventListener('mouseenter', () => {
            const now = Date.now();
            if (now - lastEnterTime < COOLDOWN) {
                return;
            }
            lastEnterTime = now;
            let tiltY;
            if (idx % 6 === 0) {
                tiltY = -40;
            } else if (idx % 6 === 5) {
                tiltY = 40;
            } else if (idx % 6 === 1) {
                tiltY = -20;
            } else if (idx % 6 === 4) {
                tiltY = 20;
            } else if (idx % 6 === 2) {
                tiltY = -10;
            } else {
                tiltY = 10;
            }

            animateTile(tile, tiltY);

        });

        tile.addEventListener('mouseleave', (e) => {
            revertTile(tile);
        });

    });



}

const animateTile = (tile, tiltY) => {
    gsap
        .timeline()
        .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
        .to(tile, {
            duration: 0.5,
            rotateX: isFlipped ? 0 : 180,
            rotateY: tiltY,
            ease: 'power2.out'
        })
}

const revertTile = (tile) => {
    gsap
        .to(tile, {
            duration: 0.5,
            rotateX: 180,
            rotateY: 0,
            ease: 'power2.out'
        });
}

const init = () => {
    createBoard();
    flipTile();
}

document.addEventListener('DOMContentLoaded', ()=>{

    if(window.innerWidth > 768) {
        init();
    }
});