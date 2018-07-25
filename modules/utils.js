const fs = require('fs-extra')
/*exports.getSettings = function() {
    return new Promise(async(resolve,reject) => {
        fs.readFile('./game.json','utf-8')
        .then(gamefile => resolve(JSON.parse(gamefile)))
        .catch((err) => {
            if(err.code !== 'ENOENT') return reject(err);
            resolve(newGame());
        })
    })
}
exports.newGame = function() {
    return new Promise(async(resolve,reject) => {
        fs.readFile('./assets/game.default.json','utf-8')
        .then(gamedefault => {
            fs.writeFile('./game.json',gamedefault)
            .then(() => {
                gamedefault.newGame = true;
                resolve(JSON.parse(gamedefault))
            });
        }).catch(err => reject(err))      
    })
}*/