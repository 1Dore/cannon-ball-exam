var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function simular()
{
    var angulo = document.getElementById('angulo');
    var vo = document.getElementById('vo');

    let voValue = parseFloat(vo.value);
    let anguloVal = parseFloat(angulo.value);

    let anguloRad = (anguloVal * Math.PI) / 180;

    let vx = voValue * Math.cos(anguloRad);
    let vy = -voValue * Math.sin(anguloRad);

    let x = 0;
    let y = canvas.height -10;

    let gravedad = 9.8;


    function updatePos()
    {
        x += vx;
        y += vy;
        vy += gravedad;
        drawball(x,y);

        if (x > canvas.width || y > canvas.height)
        {
            cancelAnimationFrame(animation);
        }
    }

    function animar() 
    {
        animation = requestAnimationFrame(animar);
        updatePos();
    }

    animar();

    console.log(voValue);
    console.log(anguloVal);
    console.log(vx);
    console.log(vy);
    console.log("posx: " + x);
    console.log("posy: " + y);
    console.log(canvas.height);

}



function drawball(x, y) 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

