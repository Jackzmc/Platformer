const {app, BrowserWindow} = require('electron');
const fs = require('fs-extra');
require('electron-debug')();
let mainWindow;

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

async function createWindow () {
    const settings = await getSettings().catch(err => {
        throw err;
    })
    mainWindow = new BrowserWindow({width: 1920, height: 1080, titleBarStyle:'hidden',fullscreen:settings.options.fullscreen})
    //mainWindow.openDevTools();
    mainWindow.loadFile('./html/index.html')
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
}

function getSettings() {
    return new Promise(async(resolve,reject) => {
        fs.readFile('./game.json','utf-8')
        .then(gamefile => resolve(JSON.parse(gamefile)))
        .catch((err) => {
            if(err.code !== 'ENOENT') return reject(err);
            fs.readFile('./assets/game.default.json','utf-8')
            .then(gamedefault => {
                fs.writeFile('./game.json',gamedefault)
                .then(() => resolve(JSON.parse(gamedefault)));
            }).catch(err => reject(err))      
        })
    })
}