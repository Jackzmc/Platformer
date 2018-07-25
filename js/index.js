const remote = require('electron').remote;
const fs = require('fs-extra');
const menumusic = new Audio('../assets/audio/menu.mp3');
const graceful = require('../modules/graceful.js');

const {getSettings,newGame} = require('../modules/utils')
particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
if(stash.get('player'))  {
    $('#btn_continue').show().click(() => {
        graceful('game.html')
    })
}

//btn_continue, btn_start, btn_options, btn_exit 
$('#btn_start').click(async() => {
    const gameDefault = await fs.readFile('./assets/game.default.json','utf-8');
    stash.set('player',JSON.parse(gameDefault).player);
    graceful('game.html')
})
$('#btn_options').click(() => {
    graceful('options.html');
    //remote.getCurrentWindow().loadFile('./html/options.html');
})
document.getElementById('btn_quit').addEventListener('click',(e) => {
    remote.getCurrentWindow().close();
})

const settings = stash.get('settings');
if(settings.menu_music) {
    menumusic.volume = 0.1;
    menumusic.play();
}