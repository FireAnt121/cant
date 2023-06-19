const init = (canvas, draw) => {
    console.log("Initialized")
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "blue";

    
    ctx.fillRect(0, 0, window.innerWidth, canvas.height);
    draw();
    return ""
}

export default init;
