'use strict';

class customError extends Error {
    toJSON() {
        let alt = {};
        Object.getOwnPropertyNames(this).forEach(function (key) {
            alt[key] = this[key];
        }, this);
        return alt;
    }
    
    send(callback) {
        console.log('Error sent: ' + this.message);
        callback({errors: [this.toJSON()]});
    }
}

module.exports = customError;