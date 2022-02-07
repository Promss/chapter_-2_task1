function draw() {
    var canvas = document.getElementById('smile');
    var ctx = canvas.getContext('2d');
      
    ctx.beginPath();
    ctx.arc(150,150,100,0,Math.PI*2,true); // Внешняя окружность
    ctx.moveTo(220,150);
    ctx.arc(150,150,70,0,Math.PI,false);  // рот (по часовой стрелке)
    ctx.closePath();
    ctx.moveTo(130,130);
    ctx.arc(120,130,10,0,Math.PI*2,true);  // Левый глаз
    ctx.moveTo(190,130);
    ctx.arc(180,130,10,0,Math.PI*2,true);  // Правый глаз
    ctx.stroke();
    
    // Styling
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.restore();
}

