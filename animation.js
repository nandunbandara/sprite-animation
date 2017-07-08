/**
 * Created by root on 7/8/17.
 */

//create new Image object and load the sprite image
var image = new Image();
image.src = "./coin-sprite-animation-sprite-sheet.png";


function sprite(options){
    var obj = {};

    obj.image = options.image;
    obj.width = options.width;
    obj.height = options.height;
    obj.context = options.context;
    
    return obj;
}

var canvas = document.getElementById('coinAnimation');
canvas.width = 100;
canvas.height = 100;

var coin = sprite({
    context: canvas.getContext('2d'),
    width: 100,
    height: 100,
    image: image
});

