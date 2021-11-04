let speed = 280;

function draw() {
    let canvas = document.getElementById('canvas');
    let area = canvas.getContext('2d');
    // area.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = area.createLinearGradient(0, 0, 320, 0);
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

    gradient.addColorStop(0.8, "rgba(240,120,0,0.7)");
    gradient.addColorStop(0.915, "rgba(240,240,240,1)");
    gradient.addColorStop(0.93, "rgba(240,20,20,1)");
    gradient.addColorStop(0.93, "rgba(0,0,0,0)");
    area.fillStyle = gradient;

    // area.fillStyle = gradient

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
    // area.stroke()
    // if (speed <= 320) {
    // area.clearRect(10 + speed, 40, 311 - speed, 120)
    // }
    area.strokeStyle = 'red'
    // ctx.fillRect(77.5, 116, 5, 50)
    area.stroke()
    area.clearRect(77.5, 117, 5, -50)
    area.clearRect(137.5, 96, 5, -50)
    area.clearRect(197.5, 96, 5, -50)
    area.clearRect(257.5, 96, 5, -50)
    // setTime()

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
    // switch (Math.floor(score / 100)) {
    // case 8: area.drawImage(th8, 140, 110, 50, 70); break;
    // case 7: area.drawImage(th7, 140, 110, 50, 70); break;
    // case 6: area.drawImage(th6, 140, 110, 50, 70); break;
    // case 5: area.drawImage(th5, 140, 110, 50, 70); break;
    // case 4: area.drawImage(th4, 140, 110, 50, 70); break;
    // case 3: area.drawImage(rd3, 140, 110, 50, 70); break;
    // case 2: area.drawImage(nd2, 140, 110, 50, 70); break;
    // case 1: area.drawImage(st1, 140, 110, 50, 70); break;
    // case 0: area.drawImage(zero, 140, 110, 50, 70); break;
    // }
    // area.drawImage(th8, 140, 110, 50, 70);
    //第二個數字
    // switch (Math.floor((score % 100) / 10)) {
    // case 8: area.drawImage(th8, 200, 110, 50, 70); break;
    // case 7: area.drawImage(th7, 200, 110, 50, 70); break;
    // case 6: area.drawImage(th6, 200, 110, 50, 70); break;
    // case 5: area.drawImage(th5, 200, 110, 50, 70); break;
    // case 4: area.drawImage(th4, 200, 110, 50, 70); break;
    // case 3: area.drawImage(rd3, 200, 110, 50, 70); break;
    // case 2: area.drawImage(nd2, 200, 110, 50, 70); break;
    // case 1: area.drawImage(st1, 200, 110, 50, 70); break;
    // case 0: area.drawImage(zero, 200, 110, 50, 70); break;
    // }
    // area.drawImage(th8, 200, 110, 50, 70);
    //第三個數字
    // switch (Math.floor((score % 100) % 10)) {
    // case 8: area.drawImage(th8, 260, 110, 50, 70); break;
    // case 7: area.drawImage(th7, 260, 110, 50, 70); break;
    // case 6: area.drawImage(th6, 260, 110, 50, 70); break;
    // case 5: area.drawImage(th5, 260, 110, 50, 70); break;
    // case 4: area.drawImage(th4, 260, 110, 50, 70); break;
    // case 3: area.drawImage(rd3, 260, 110, 50, 70); break;
    // case 2: area.drawImage(nd2, 260, 110, 50, 70); break;
    // case 1: area.drawImage(st1, 260, 110, 50, 70); break;
    // case 0: area.drawImage(zero, 260, 110, 50, 70); break;
    // }
    //area.drawImage(th8, 260, 110, 50, 70);

    window.requestAnimationFrame(draw)
}
























function act() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let speed = 0;
    ctx.clearRect(20 + speed, 50, 320, 100)
    console.log(speed)
    timer = setInterval(function () {
        speed++;
    }, 500);
}
