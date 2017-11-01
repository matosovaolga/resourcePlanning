'use strict';

const dateFormat = require('dateformat'),
        fs = require('fs');

class Logger {

    constructor() {
        this.date = new Date();
        this.dir = __dirname + '/../../logs/';
        this.file = dateFormat(this.date, 'yyyymmdd') + '.log';
        this.timeFormat = 'HH:MM:ss yyyy-mm-dd';
    }

    write(text) {
        let time = dateFormat(new Date(), this.timeFormat);
        let logFile = fs.createWriteStream(this.dir + this.file, {flags : 'a'});
        logFile.write(time + ';' + text + '\n', () => {
            logFile.end();
            logFile.close();
        });
        logFile.on('error', function(err) {
            console.error('log fail');
            console.error(err);   
        });
    }
    
    editPoject(editor, user, oldData, newData ) {
        let text = editor.firstname + ' ' + editor.lastname + ';' +
        '"changed plan for ' + user.firstname + ' ' + user.lastname + 
        ', project name: ' + oldData.project.name + ' -> ' + newData.project.name + 
        ', start date: ' + this.dateFromUnix(oldData.start_time) + ' -> ' + this.dateFromUnix(newData.start_time) + 
        ', end date: ' + this.dateFromUnix(oldData.end_time) + ' -> ' + this.dateFromUnix(newData.end_time) + 
        ', busy time: ' + oldData.percent + '%' + ' -> ' + newData.percent + '%' + 
        ', approved: ' + oldData.approved + ' -> ' + oldData.approved;
        this.write(text);
    }
    
    createPoject(editor, user, oldData, newData ) {//todo
        let text = editor.firstname + ' ' + editor.lastname + ';' +
        '"changed plan for ' + user.firstname + ' ' + user.lastname + 
        ', project name: ' + oldData.project.name + ' -> ' + newData.project.name + 
        ', start date: ' + this.dateFromUnix(oldData.start_time) + ' -> ' + this.dateFromUnix(newData.start_time) + 
        ', end date: ' + this.dateFromUnix(oldData.end_time) + ' -> ' + this.dateFromUnix(newData.end_time) + 
        ', busy time: ' + oldData.percent + '%' + ' -> ' + newData.percent + '%' + 
        ', approved: ' + oldData.approved + ' -> ' + oldData.approved;
        this.write(text);
        //$creatorFirstName . ' ' . $creatorLastName . ';' . '"add new plan for ' . $forWhomFirstName . ' ' . $forWhomLastName . ', project name: ' . $projectName . ', start date: ' . date('Y-m-d',$startTime) . ', end date: ' . date('Y-m-d',$endTime) . ', busy time: ' . $percent . '%, approved: ' . $approved . '"'
    }
    
    deletePoject(editor, user, oldData, newData ) {//todo
        let text = editor.firstname + ' ' + editor.lastname + ';' +
        '"changed plan for ' + user.firstname + ' ' + user.lastname + 
        ', project name: ' + oldData.project.name + ' -> ' + newData.project.name + 
        ', start date: ' + this.dateFromUnix(oldData.start_time) + ' -> ' + this.dateFromUnix(newData.start_time) + 
        ', end date: ' + this.dateFromUnix(oldData.end_time) + ' -> ' + this.dateFromUnix(newData.end_time) + 
        ', busy time: ' + oldData.percent + '%' + ' -> ' + newData.percent + '%' + 
        ', approved: ' + oldData.approved + ' -> ' + oldData.approved;
        this.write(text);
        //$creatorFirstName . ' ' . $creatorLastName . ';' . '"delete plan for ' . $forWhomFirstName . ' ' . $forWhomLastName . ', project name: ' . $projectName . '"'
    }
    
    dateFromUnix(time) {
        return dateFormat(new Date(time * 1000) , 'yyyy-mm-dd');
    }
}

module.exports = new Logger();