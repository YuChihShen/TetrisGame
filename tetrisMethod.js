let timer;
let cellWidth = 28;
let random = Math.random();
let mapPosX = -30, mapPosY = -60;
let score = 0;
const mapRow = 24, mapCol = 14;
let map = new Array(mapCol * mapRow);
let wallLeft = 1, wallRight = 12, wallBottom = 23;
let ctype = -1; cturn = -1; ntype = -1; nturn = -1; htype = -1;
let tPosX = 4, tPosY = 4, tMapX = 5, tMapY = 0;
let nPosX = 400; nPosY = 0; hPosX = nPosX; hPosY = 120; amp = 0.8
let shadowY;
let t = 500;
let color = 0;
const shape = [
    //I
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0]
    ],
    //J
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0]
    ],
    //L
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3],
        [0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 0],
        [0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3, 0, 0]
    ],
    //O
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0]
    ],
    //S
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0],
        [0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0],
        [0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 0]
    ],
    //Z
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 0, 0, 6, 0, 0]
    ],
    //T
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 7, 7],
        [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 7, 0, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 7, 0, 0, 7, 0, 0]
    ]];

function createMap() {
    map.fill(0);
}
function setWall() {
    for (let i = wallLeft; i <= wallRight; i++) {
        for (let j = 0; j < mapRow; j++) {
            if ((i === wallLeft) || (j === wallBottom) || (i === wallRight)) {
                map[j * mapCol + i] = 1
            }
        }
    }
}
function createT() {
    tMapX = 5; tMapY = 0;
    if ((ctype === -1) && (cturn === -1)) {
        ctype = Math.floor(random * 7);
        cturn = 0
    } else {
        ctype = ntype; cturn = nturn;
    }
    random = Math.random();
    ntype = Math.floor(random * 7);
    nturn = 0

    if (Boolean(isgameover())) {
        window.alert("U r Game Over , Loser");
        pause();
    }

}

function iscanmove() {
    this.tPosY = tPosY
    for (let i = 0; i < tPosX; i++) {
        for (let j = 0; j < tPosY; j++) {
            if ((shape[ctype][cturn][i + j * tPosY] >= 1) && (map[(tMapX + i) + (tMapY + j) * mapCol]) >= 1) {
                return null;
            }
        }
    } return true;
}

function isgameover() {
    if (Boolean(iscanmove())) {
        return null;
    } return true;
}

function turn() {
    cturn = (cturn + 1) % shape[0].length;

    while (Boolean(iscanmove()) === false) {
        if ((tMapX + tPosX - 1) >= wallRight) {
            tMapX--;
        } else if (tMapX <= wallLeft) {
            tMapX++
        } else {
            cturn = (cturn + 3) % shape[0].length;
            break;
        }
    }
}

function moveDown() {
    tMapY++;
    if (!Boolean(iscanmove())) {
        tMapY--;
        fixT();
        checkLine();
        createT();
    }
}
function auto() {
    timer = setInterval(function () {
        if (t > 36) {
            t *= 0.9977; color = ((500 - t) * 0.6) / 320;
        }
        moveDown();
    }, t);
}
function superDown() {
    clearInterval(timer);
    do {
        tMapY++;
    }
    while (Boolean(iscanmove()));
    tMapY--;
    fixT();
    checkLine();
    createT();
    auto();
}

function moveLeft() {
    tMapX -= 1;
    if (!Boolean(iscanmove())) {
        tMapX += 1;
    }
}

function moveRight() {
    tMapX += 1;
    if (!Boolean(iscanmove())) {
        tMapX -= 1;
    }
}

function fixT() {
    for (let i = 0; i < tPosX; i++) {
        for (let j = 0; j < tPosY; j++) {
            if (shape[ctype][cturn][i + j * tPosY] >= 1) {
                map[(tMapX + i) + (tMapY + j) * mapCol] =
                    shape[ctype][cturn][i + j * tPosY];
            }
        }
    }
}

function checkLine() {
    let count;
    for (let i = 0; i < wallBottom; i++) {
        count = 0;
        for (let j = wallLeft + 1; j < wallRight; j++) {
            if (map[j + i * mapCol] >= 1) {
                count++;
                if (count === 10) {
                    score += 10;
                    console.log(score);
                    for (let p = i; p > 0; p--) {
                        for (let k = wallLeft + 1; k < wallRight; k++) {
                            map[k + p * mapCol] = map[k + (p - 1) * mapCol]
                        }
                    }
                }
            }
        }
    }
}

function paint() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let nextArea = document.getElementById('nextArea');
    let area = nextArea.getContext('2d');

    area.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    let frame = new Image(); frame.src = "frame.png";
    let wall = new Image(); wall.src = "wall.png";
    let cell01 = new Image(); cell01.src = 'cell01.png';
    let cell02 = new Image(); cell02.src = 'cell_orange.png';
    let cell03 = new Image(); cell03.src = 'cell_green.png';
    let cell04 = new Image(); cell04.src = 'cell_yellow.png';
    let cell05 = new Image(); cell05.src = 'cell_red.png';
    let cell06 = new Image(); cell06.src = 'cell_Ryan.png';
    let cell07 = new Image(); cell07.src = 'cell_purple.png';
    let copy = new Image(); copy.src = 'copy.png';
    let bg = new Image(); bg.src = 'back01.png';

    area.drawImage(frame, nPosX, nPosY, 4 * cellWidth, 4 * cellWidth);
    area.drawImage(frame, hPosX, hPosY, 4 * cellWidth, 4 * cellWidth);
    //地圖內容
    for (let i = wallLeft + 1; i < wallRight; i++) {
        for (let j = 3; j < wallBottom; j++) {
            if (map[j * mapCol + i] > 0) {
                switch (map[j * mapCol + i] - 1) {
                    case 0: ctx.drawImage(cell01, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 1: ctx.drawImage(cell02, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 2: ctx.drawImage(cell03, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 3: ctx.drawImage(cell04, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 4: ctx.drawImage(cell05, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 5: ctx.drawImage(cell06, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                    case 6: ctx.drawImage(cell07, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth); break;
                }
            } else {
                ctx.drawImage(bg, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth);
                ctx.lineWidth = 0.2;
                ctx.strokeRect(mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth);
            }
        }
    }
    //邊界
    for (let i = wallLeft; i <= wallRight; i++) {
        for (let j = 3; j < mapRow; j++) {
            if ((i === wallLeft) || (j === wallBottom) || (i === wallRight)) {
                ctx.drawImage(wall, mapPosX + (i * cellWidth), mapPosY + (j * cellWidth), cellWidth, cellWidth);
            }
        }
    }
    //方塊
    for (let i = 0; i < tPosX; i++) {
        for (let j = 0; j < tPosY; j++) {
            if (ctype === -1) {
                break;
            } else {
                if (shape[ntype][nturn][i + j * tPosY] >= 1) {
                    switch (ntype) {
                        case 0: area.drawImage(cell01, nPosX + (i + 1.3) * cellWidth * amp * 0.75, nPosY + (j) * cellWidth * amp, cellWidth * amp * 0.75, cellWidth * amp * 0.75); break;
                        case 1: area.drawImage(cell02, nPosX + (i + 1) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 2: area.drawImage(cell03, nPosX + (i) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 3: area.drawImage(cell04, nPosX + (i + 0.5) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 4: area.drawImage(cell05, nPosX + (i) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 5: area.drawImage(cell06, nPosX + (i + 1) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 6: area.drawImage(cell07, nPosX + (i) * cellWidth * amp, nPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                    }
                }
                if ((htype !== -1) && shape[htype][0][i + j * tPosY] >= 1) {
                    switch (htype) {
                        case 0: area.drawImage(cell01, hPosX + (i + 1.3) * cellWidth * amp * 0.75, hPosY + (j) * cellWidth * amp, cellWidth * amp * 0.75, cellWidth * amp * 0.75); break;
                        case 1: area.drawImage(cell02, hPosX + (i + 1) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 2: area.drawImage(cell03, hPosX + (i) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 3: area.drawImage(cell04, hPosX + (i + 0.5) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 4: area.drawImage(cell05, hPosX + (i) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 5: area.drawImage(cell06, hPosX + (i + 1) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                        case 6: area.drawImage(cell07, hPosX + (i) * cellWidth * amp, hPosY + (j) * cellWidth * amp, cellWidth * amp, cellWidth * amp); break;
                    }
                }
                if ((shape[ctype][cturn][i + j * tPosY] >= 1)) {
                    if (tMapY + j >= 2) {
                        switch (ctype) {
                            case 0: ctx.drawImage(cell01, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 1: ctx.drawImage(cell02, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 2: ctx.drawImage(cell03, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 3: ctx.drawImage(cell04, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 4: ctx.drawImage(cell05, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 5: ctx.drawImage(cell06, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                            case 6: ctx.drawImage(cell07, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth); break;
                        }
                    }
                    shadowY = tMapY;
                    while (tMapY <= wallBottom) {
                        tMapY++;
                        if (!Boolean(iscanmove())) {
                            tMapY--
                            ctx.drawImage(copy, mapPosX + (tMapX + i) * cellWidth, mapPosY + (tMapY + j) * cellWidth, cellWidth, cellWidth);
                            tMapY = shadowY;
                            break;
                        }
                    }
                }
            }

        }
    }

    for (let i = wallLeft; i <= wallRight; i++) {
        ctx.drawImage(wall, mapPosX + (i * cellWidth), mapPosY + (2 * cellWidth), cellWidth, cellWidth);
    }
    // area.drawImage(frame, nPosX, nPosY, 4 * cellWidth, 4 * cellWidth);
    // area.drawImage(frame, hPosX, hPosY, 4 * cellWidth, 4 * cellWidth);

    area.beginPath();
    let x = 500, y = 250;
    area.moveTo(820 - x, 300 - y);
    area.lineTo(675 - x, 300 - y);
    area.bezierCurveTo(625 - x, 300 - y, 600 - x, 300 - y, 562 - x, 329 - y);
    area.lineTo(538 - x, 349 - y);
    area.lineTo(520 - x, 366 - y);
    area.lineTo(520 - x, 400 - y);
    area.lineTo(563 - x, 375 - y);
    area.bezierCurveTo(615 - x, 345 - y, 625 - x, 345 - y, 675 - x, 345 - y);
    area.lineTo(820 - x, 345 - y);
    let gradient = area.createLinearGradient(0, 0, 320, 0);


    let color1 = (color).toString();
    let color2 = (color + 0.115).toString();
    let color3 = (color + 0.13).toString();
    gradient.addColorStop(color1, "rgba(240,120,0,0.7)");
    gradient.addColorStop(color2, "rgba(240,240,240,1)");
    gradient.addColorStop(color3, "rgba(240,20,20,1)");
    gradient.addColorStop(color3, "rgba(0,0,0,0)");
    area.fillStyle = gradient;

    //斷點
    area.moveTo(76.5, 116); area.lineTo(76.5, 67);
    area.moveTo(82.5, 116); area.lineTo(82.5, 65);
    // ctx.moveTo(80, 116); area.lineTo(80, 67);
    area.moveTo(136.5, 95); area.lineTo(136.5, 50);
    area.moveTo(142.5, 95); area.lineTo(142.5, 50);
    //ctx.moveTo(140, 95);  area.lineTo(140, 50);
    area.moveTo(196.5, 95); area.lineTo(196.5, 50);
    area.moveTo(202.5, 95); area.lineTo(202.5, 50);
    // ctx.moveTo(200, 95); area.lineTo(200, 50);
    area.moveTo(256.5, 95); area.lineTo(256.5, 50);
    area.moveTo(262.5, 95); area.lineTo(262.5, 50);
    // ctx.moveTo(260, 95); area.lineTo(260, 50);
    area.moveTo(320, 95); area.lineTo(320, 50);
    area.fill();
    area.lineWidth = 0.5;

    // area.strokeStyle = 'red'
    // area.stroke()

    // area.clearRect(10 + speed, 40, 311 - speed, 120);
    // area.fillRect(10 + speed, 40, 311 - speed, 120);

    // ctx.fillStyle = 'white'
    // ctx.fillRect(77.5, 116, 5, 50)

    area.strokeStyle = 'white'
    area.stroke()
    area.clearRect(77.5, 117, 5, -50)
    area.clearRect(137.5, 96, 5, -50)
    area.clearRect(197.5, 96, 5, -50)
    area.clearRect(257.5, 96, 5, -50)
    // setTime()
    let th9 = new Image(); th9.src = "9.png";
    let th8 = new Image(); th8.src = "8.png";
    let th7 = new Image(); th7.src = "7.png";
    let th6 = new Image(); th6.src = "6.png";
    let th5 = new Image(); th5.src = "5.png";
    let th4 = new Image(); th4.src = "4.png";
    let rd3 = new Image(); rd3.src = "3.png";
    let nd2 = new Image(); nd2.src = "2.png";
    let st1 = new Image(); st1.src = "1.png";
    let zero = new Image(); zero.src = "0.png";
    //第一個數字
    switch (Math.floor(score / 100)) {
        case 9: area.drawImage(th9, 140, 120, 50, 70); break;
        case 8: area.drawImage(th8, 140, 120, 50, 70); break;
        case 7: area.drawImage(th7, 140, 120, 50, 70); break;
        case 6: area.drawImage(th6, 140, 120, 50, 70); break;
        case 5: area.drawImage(th5, 140, 120, 50, 70); break;
        case 4: area.drawImage(th4, 140, 120, 50, 70); break;
        case 3: area.drawImage(rd3, 140, 120, 50, 70); break;
        case 2: area.drawImage(nd2, 140, 120, 50, 70); break;
        case 1: area.drawImage(st1, 140, 120, 50, 70); break;
        case 0: area.drawImage(zero, 140, 120, 50, 70); break;
    }
    // area.drawImage(th8, 140, 110, 50, 70);
    //第二個數字
    switch (Math.floor((score % 100) / 10)) {
        case 9: area.drawImage(th9, 200, 120, 50, 70); break;
        case 8: area.drawImage(th8, 200, 120, 50, 70); break;
        case 7: area.drawImage(th7, 200, 120, 50, 70); break;
        case 6: area.drawImage(th6, 200, 120, 50, 70); break;
        case 5: area.drawImage(th5, 200, 120, 50, 70); break;
        case 4: area.drawImage(th4, 200, 120, 50, 70); break;
        case 3: area.drawImage(rd3, 200, 120, 50, 70); break;
        case 2: area.drawImage(nd2, 200, 120, 50, 70); break;
        case 1: area.drawImage(st1, 200, 120, 50, 70); break;
        case 0: area.drawImage(zero, 200, 120, 50, 70); break;
    }
    //area.drawImage(th8, 200, 110, 50, 70);
    //第三個數字
    switch (Math.floor((score % 100) % 10)) {
        case 9: area.drawImage(th9, 260, 120, 50, 70); break;
        case 8: area.drawImage(th8, 260, 120, 50, 70); break;
        case 7: area.drawImage(th7, 260, 120, 50, 70); break;
        case 6: area.drawImage(th6, 260, 120, 50, 70); break;
        case 5: area.drawImage(th5, 260, 120, 50, 70); break;
        case 4: area.drawImage(th4, 260, 120, 50, 70); break;
        case 3: area.drawImage(rd3, 260, 120, 50, 70); break;
        case 2: area.drawImage(nd2, 260, 120, 50, 70); break;
        case 1: area.drawImage(st1, 260, 120, 50, 70); break;
        case 0: area.drawImage(zero, 260, 120, 50, 70); break;
    }
    //area.drawImage(th8, 260, 110, 50, 70);

    window.requestAnimationFrame(paint);
}
function disableScrolling() {
    document.body.style.overflow = 'hidden'
}
function enableScrolling() {
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
}
function start() {
    if (ctype === -1) {
        createMap();
        setWall();
        createT(); auto();
    } else {
        clearInterval(timer);
        auto();
    }
    // document.getElementById("start").style.display = 'none';
    // document.getElementById("pause").style.display = 'block';
    document.getElementById("start").blur();
}
function restart() {
    clearInterval(timer);
    ctype = -1; cturn = -1; ntype = -1; nturn == -1; htype = -1; t = 500;
    start();
    document.getElementById("restart").blur();
}
function pause() {
    clearInterval(timer);
    // document.getElementById("pause").style.display = 'none';
    // document.getElementById("start").style.display = 'block';
    document.getElementById("pause").blur();
}
function hold() {

    if (htype === -1) {
        htype = ctype;
        ctype = ntype
        random = Math.random();
        ntype = Math.floor(random * 7);
    } else {
        let x = ctype;
        ctype = htype; cturn = 0;
        while (Boolean(iscanmove()) === false) {
            if ((tMapX + tPosX - 1) >= wallRight) {
                tMapX--;
            } else if (tMapX <= wallLeft) {
                tMapX++
            } else {
                cturn = (cturn + 3) % shape[0].length;
                break;
            }
        }
        htype = x;
    }
}
















































































