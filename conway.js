

function pixel_intensity(data, x, y) {
    if (x >= data.width || y >= data.height || x < 0 || y < 0) { return 1020; }
    pixel = 4 * (y * data.width + x);
    intensity = 0;
    for (var i = 0; i < 4; i++) {
        intensity+= data.data[pixel + i];
    }
    return intensity;
}

function paint(ctx, coord, data) {
    var size = 2;
    var thresh0 = 100;
    var thresh = 200;
    var thresh2 = 400;
    var thresh3 = 600;
    var intensity = pixel_intensity(data, coord.x, coord.y)

    // Draw a picture.
//    if (intensity < thresh0) {
        //ctx.fillStyle = "#1f1f1f";
        ctx.fillRect(coord.x,coord.y,size,size);
 //   } else if (intensity < thresh) {
 //       //ctx.fillStyle = "#3f3f3f";
 //       ctx.fillRect(coord.x,coord.y,size,size);
 //   } else if (intensity < thresh2) {
 //       //ctx.fillStyle = "#5f5f5f";
 //       ctx.fillRect(coord.x,coord.y,size,size);
 //   } else if (intensity < thresh3) {
 //       //ctx.fillStyle = "#9f9f9f";
 //       ctx.fillRect(coord.x,coord.y,size,size);
 //   }

    var vx = Math.random() > 0.5 ? -1 : 1;
    var vy = Math.random() > 0.5 ? -1 : 1;
    /*while (intensity > thresh) {
        // Occassionally jump.
        if (Math.random() < 0.002) {
            coord.x = (Math.floor(Math.random() * ctx.canvas.width) >> 1) << 1;
            coord.y = (Math.floor(Math.random() * ctx.canvas.height) >> 1) << 1;
        }
        vx = Math.random() > 0.5 ? -1 : 1;
        vy = Math.random() > 0.5 ? -1 : 1;
        intensity = pixel_intensity(data, coord.x + vx, coord.y + vy);
    }*/

    if (coord.vx == -vx && coord.vy == -vy) {
        vx = coord.vx;
        vy = coord.vy;
    }

    if (coord.x > ctx.canvas.width) {
        vx = -1;
    } else if (coord.x < 0) {
        vx = 1;
    }
    if (coord.y > ctx.canvas.height) {
        vy = -1;
    } else if (coord.y < 0) {
        vy = 1;
    }
    return {x:coord.x+size*vx, y:coord.y+size*vy, vx:vx, vy:vy };
}

window.addEventListener('resize', function(e){
    var canvas = document.getElementById('painting');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(0,0,0,0.1)";
});

window.addEventListener("load", function(event){
    console.log("Loaded!");
    var canvas = document.getElementById('painting');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(0,0,0,0.1)";

    //var imageObj = new Image();
    //imageObj.onload = function(e) {
        //var img = imageObj;
        var mock_canvas = document.createElement('canvas');
        mock_canvas.height = ctx.canvas.height;
        mock_canvas.width = ctx.canvas.width;
        var mock_ctx = mock_canvas.getContext('2d');
        mock_ctx.fillStyle = "rgba(255,255,255,1)";
        mock_ctx.fillRect(0, 0, mock_canvas.width, mock_canvas.height);
        var data = mock_ctx.getImageData(0, 0, mock_canvas.width, mock_canvas.height);

        // Now start drawing
        var x = (Math.floor(Math.random() * ctx.canvas.width) >> 1) << 1;
        var y = (Math.floor(Math.random() * ctx.canvas.height) >> 1) << 1;
        var vx = Math.random() > 0.5 ? -1 : 1;
        var vy = Math.random() > 0.5 ? -1 : 1;
        var coord = {x:x, y:y, vx:vx, vy:vy };
        var iters = window.innerWidth/30;
        setInterval(function() {
            for (var i = 0; i < iters; i++) {
                coord = paint(ctx, coord, data);
                console.log(coord.x);
                console.log(coord.y);
            }
        }, 1);
    //}

    //imageObj.src = "me2.png";

});

