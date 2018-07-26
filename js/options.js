const remote = require('electron').remote;
const fs = require('fs-extra');
const graceful = require('../modules/graceful.js');

const RESOLUTIONS = [
    ['640','480'],['720','480'],['1280','720'],['1440','1080'],['1920','1080'],['2560','1440'],['3840','2160']
];
particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const options = stash.get('settings');
RESOLUTIONS.forEach(v => {
    const checked = (options && v[0] === options.width && v[1] === options.height) ? 'checked':'';
    $('#opt_resSelect').append(`<option ${checked} id='res_${v[0]}-${v[1]}'>${v[0]} x ${v[1]}`);
})
$('#opt_fullscreen').prop('checked',options.fullscreen);
$('#opt_menumusic').prop('checked',options.menu_music);
$('#btn_save').click(async() => {
    const settings = {};
    settings.fullscreen = $('#opt_fullscreen').prop('checked');
    settings.menu_music = $('#opt_menumusic').prop('checked');
    let [width,height] = $('#opt_resSelect').val().replace(/\s/g,'').split("x");
    width = parseInt(width), height = parseInt(height);
    settings.width = width, settings.height = height;
    stash.set('settings',settings);
    $('#note').show();
    setTimeout(() => $('#note').hide(),5000)
})
$('#btn_cancel').click(() => {
    graceful('index.html');
    //remote.getCurrentWindow().loadFile('./html/index.html');
})
$('#note').click(() => $('#note').hide())