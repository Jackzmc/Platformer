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
    /*const settings = await getSettings().catch(err => {
        throw err;
    })*/
    mainWindow = new BrowserWindow({titleBarStyle:'hidden'})
    //mainWindow.openDevTools();
    mainWindow.loadFile('./html/index.html')
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
}

