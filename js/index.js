const remote = require('electron').remote;
const fs = require('fs-extra');
const graceful = require('../modules/graceful.js');
particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
try {
    const gameFile = fs.readFile('./game.json','utf-8')
    .then(gameFile => {
        const game = JSON.parse(gameFile);
        if(game.options.fullscreen) remote.getCurrentWindow().maximize();
        //remote.getCurrentWindow().setResolution
    })
    $('#btn_continue').show().click(() => {

    })
}catch(err) {
    $('#btn_continue').hide();
}

//btn_continue, btn_start, btn_options, btn_exit 
$('#btn_start').click(async() => {
    //start
    const defaultFile = await fs.readFile('./assets/game.default.json','utf-8');
    console.log(defaultFile)
    const file = await fs.writeFile('./game.json',defaultFile)
    alert('game started');
})
$('#btn_options').click(() => {
    graceful('options.html');
    //remote.getCurrentWindow().loadFile('./html/options.html');
})
document.getElementById('btn_quit').addEventListener('click',(e) => {
    remote.getCurrentWindow().close();
})