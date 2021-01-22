var Aball;
var database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    Aball = createSprite(250,250,10,10);
    Aball.shapeColor = "red";
    var ballref = database.ref('Ball/position');
    ballref.on("value", readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref('Ball/position').set({
    x:position.x + x,
    y:position.y + y,
})
}

function readPosition(data){
    position = data.val()
    Aball.x = position.x
    Aball.y = position.y
}
