const remote = require('electron').remote;
const window = remote.getCurrentWindow();

const settings = stash.get('settings');
const player = stash.get('player');

if(settings.fullscreen) {
    window.maximize();
}else {
    window.setSize(settings.width,settings.height);
}

const canvas = document.getElementById('canvas');
const 
const ctx;