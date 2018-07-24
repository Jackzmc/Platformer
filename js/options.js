const remote = require('electron').remote;
const fs = require('fs-extra');
const graceful = require('../modules/graceful.js');
particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
fs.readFile('./game.json','utf-8')
.then(game => {
    game = JSON.parse(game);
    $('#opt_fullscreen').prop("checked",game.options.fullscreen)

    $('#btn_save').click(async() => {
        game.options.fullscreen = $('#opt_fullscreen').prop('checked');
        if(game.options.fullscreen) remote.getCurrentWindow().maximize();
        //game.options.res = 
        await fs.writeFile('./game.json',JSON.stringify(game))
        .then(() => graceful('index.html'))
        .catch(err => {
            alert(`ERR: ${err.message}`)
        })
    })
    $('#btn_cancel').click(() => {
        graceful('index.html');
        //remote.getCurrentWindow().loadFile('./html/index.html');
    })
})