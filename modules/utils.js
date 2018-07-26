const fs = require('fs-extra');
const levels = require('../assets/levels.json')
exports.Entity = function (x,y,w,h,name) {
    this.x = x;
    this.y = y;

    this.width = w;
    this.height = h;

    this.name = name;

    this.setMidX = (val) => {
		this.x = val - (this.width / 2);
	};
	this.setMidY = (val) => {
		this.y = val - (this.height/2);
    }   
}

exports.Level = {
    next: function() {
        if(this.current === levels.length-1) {
            //game over
        }
        this.load(this.current++);
    },
    load: function(id) {
        return new Promise(async(resolve,reject) => {
            //if(!id) return reject('No ID specified');
            if(!levels[id]) return reject('Unknown level !!!');
            resolve(levels[id]);
        })
    }
}

exports.Collision = {

}
//Level.