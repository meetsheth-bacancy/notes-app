const yargs = require('yargs');
const addNote = require('./notesLogic.js');
yargs.command(
    {
        command:'add',
        describe:'add command',
        builder : {
            title : {
            describe : "Title switch for the add command",
            demandOption : true, // makes it a required switch
            type : "string" // always ensures that it returns string if value not provided by the user 
            } ,

           body : {
                    describe : "Body switch for the add command",
                    demandOption : true,
                    type : "string"
                }
            
        },
        handler : (argv) =>  {
            addNote(argv.title, argv.body);
            //console.log("Title : "+argv.title + " Body : "+argv.content)
        }
    });

    yargs.command({
        command : 'remove',
        describe : "Remove command",
        handler : () => {console.log("Inside remove handler")}

    });

    yargs.command({
        command:'list',
        describe: 'list command',
        handler : () => {console.log("Inside list handler")}
    });

    yargs.command({
        command:'read',
        describe: 'read command',
        handler : () => {console.log("Inside read handler")}
    });
    

    yargs.parse();
    //console.log(yargs.argv);  // bit diffrent than process.argv ; gives pasrsed output
    