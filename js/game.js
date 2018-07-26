const remote = require('electron').remote;
const {Entity,Level} = require('../modules/utils.js');
const window = remote.getCurrentWindow();

const settings = stash.get('settings');
const Player = stash.get('player');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

if(settings.fullscreen) {
    window.maximize();
}else {
    window.setSize(settings.width,settings.height);
    canvas.width = settings.width;
    canvas.height = settings.height;
}

const player = new Entity(0,canvas.height,10,10);
let level;

Level.load(Player.level).then(lvl => {
    console.log(lvl)
    level = lvl;
    render();
})

function generatePlatforms(platforms) {
    return new Promise(async(resolve,reject) => {
        if(!platforms) return reject('Platforms not defined')
        platforms.forEach(block => {
            //const Platform = new Entity(block.x,block.y,block.width,block.height);
            ctx.fillRect(block[0],block[1],block[2],block[3]);
        })
        
    })
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '12px serif';
    ctx.textAlign="right";
    ctx.textBaseline="top"; 
    ctx.fillText("Platformer by Jackz#7627",canvas.width,0);
    generatePlatforms(level.platforms);
    console.log('render')
    //render();
}