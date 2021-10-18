const validator = require('validator');
const yargs = require('yargs')
const chalk = require('chalk');
const notes = require('./notes.js');
const { describe } = require('yargs');


// Customize yargs version 


    yargs.version('1.0.1');





    //  add , remove , read , list 

    //  Create Add command

    yargs.command({

        command: 'add',
        describe: 'Add a new note' ,
        builder : {
            title : {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            },
            body : {

                describe:'This is body of the note',
                demandOption: true,
                type:'string'
            }
        },
        handler:(argv)=>{
            notes.addNote(argv.title , argv.body)
        }
    })


    yargs.command({
        command: 'remove',
        describe:'Remove a Note',
        builder:{

            title:{
                describe: 'remove a note',
                demandOption:true,
                type: 'string'
            }
        },
        handler:(argv)=>{
            notes.removeNotes(argv.title)
        }
    })
    yargs.command({

            command: 'list',
            describe: 'List The notes',
            handler: function(){
                notes.listNotes();
            },

    })

    
    yargs.command({
        command:'read',
        describe:'Reading The Notes',

        builder:{

            title:{
                demandOption:true,
                type:'string'
            }
        },

        handler: function(argv){
            notes.readNote(argv.title);
        }
    })
        
    // debugger


yargs.parse();
// console.log(yargs.argv);





