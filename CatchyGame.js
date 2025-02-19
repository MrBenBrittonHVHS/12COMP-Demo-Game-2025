/*******************************************************/
// Catchy game
// Written by Mr Britton 
/*******************************************************/
const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 400;

const PLAYER_SIZE = 20;
const PLAYER_SPEED = 10;

const COIN_SIZE=10;

var player;
var coin;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    player = new Sprite(SCREEN_WIDTH/2 - PLAYER_SIZE/2,  SCREEN_HEIGHT - PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, 'd');
    
//Create a coin
	coin = new Sprite(random(0, SCREEN_WIDTH), -20, 10, "d");
    coin.color="yellow";
    coin.vel.y = 4;
    coin.bounciness = 1.2;
    coin.friction = 0;
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background("green")



    // Player Movement
    if (kb.pressing('left')) {
		player.vel.x = -PLAYER_SPEED;
	} else if (kb.pressing('right')) {
		player.vel.x = PLAYER_SPEED;
	} else {
		player.vel.x = 0;
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/
