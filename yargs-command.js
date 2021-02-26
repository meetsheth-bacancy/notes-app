const yargs = require('yargs');
const {rnote,cnote,lnote,readNotes} = require('./notesLogic.js');
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
            cnote(argv.title, argv.body);
            //console.log("Title : "+argv.title + " Body : "+argv.content)
        }
    });

    yargs.command({
        command : 'remove',
        builder : { 
            title : {
            describe : "Title switch for the remove command",
            demandOption : true, // makes it a required switch
            type : "string" // always ensures that it returns string if value not provided by the user 
            } 
        },
        describe : "Remove command",
        handler : (argv) => {rnote(argv.title);}

    });

    yargs.command({
        command:'list',
        describe: 'list command',
        handler : () => {lnote();}
    });

    yargs.command({
        command:'read',
        builder :{
            title : {
                describe : "Title switch for the read command",
                demandOption : true, // makes it a required switch
                type : "string" // always ensures that it returns string if value not provided by the user 
                } 
        },
        describe: 'read command',
        handler : (argv) => {readNotes(argv.title)}
    });
    

    yargs.parse();
    //console.log(yargs.argv);  // bit diffrent than process.argv ; gives pasrsed output
    