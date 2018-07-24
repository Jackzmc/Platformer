const remote = require('electron').remote
const BrowserWindow = remote.BrowserWindow;
module.exports = (html,options = {}) => {
    return new Promise(async(resolve,reject) => {
        //TODO: check if 'html' exists
        options.show = false;
        const newWindow = new BrowserWindow(options);
        newWindow.loadFile(`./html/${html}`)
        newWindow.once('ready-to-show', () => {
            const old = remote.getCurrentWindow();
            newWindow.show();
            old.close();
        })
    })
}