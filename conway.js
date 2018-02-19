

var PIXEL_SIZE = 2;

function paint(ctx, coord) {
    ctx.fillRect(coord.x,coord.y,size,size);
}

window.addEventListener('resize', function(event){
    var canvas = document.getElementById('painting');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(0,0,0,0.2)";
});

window.addEventListener("load", function(event){
    //console.log("Loaded!");
    var canvas = document.getElementById('painting');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(0,0,0,0.2)";

    for (var i = 0; i < window.innerWidth/size)


});


