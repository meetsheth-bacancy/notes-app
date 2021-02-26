const fs = require('fs');
const { exit } = require('process');
const chalk = require('chalk');
const { Console } = require('console');

const createNote = (title, body) => {
    try
    {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        data.find((element)=>{
            if(element.title === title)
            {
                console.log(chalk.red.inverse("Note with same title already exists. Try with some different title name"));
                exit();
            }
        });
        data.push({title : title, body : body });
        //console.log(data);
        console.log(chalk.green.inverse("New note added!"));
        fs.writeFileSync("notes.json", JSON.stringify(data));
    }
    catch(e)
    {   // catch error when we dont find any "notes.json". File does not exist
        // This is when file does not exist. We have to insert [] empty array for the very first time. 
        // From then we can push json objects.
        fs.writeFileSync("notes.json", "[]");
        createNote(title,body);
    }
    
};

const removeNote = (title) => {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data =JSON.parse(dataJSON);

   const notesToKeep = data.filter((element)=>{
       return element.title !== title
   });
   
    fs.writeFileSync("notes.json", JSON.stringify(notesToKeep));
    if(notesToKeep.length < data.length )
    {
        console.log(chalk.green.inverse("Note removed"));
    }
    else if(notesToKeep.length == data.length)
    {
        console.log(chalk.red.inverse("Not note found with the given title"));
    }
}

const listNotes = () => {
    
    const buffer = fs.readFileSync("notes.json")
    const dataJSON = buffer.toString()
    const data = JSON.parse(dataJSON)
    data.forEach((element)=>{
        console.log(chalk.green.inverse(element.title));
    })
}

const readNotes = (title) => {

    const buffer = fs.readFileSync("notes.json")
    const dataJSON = buffer.toString()
    const data = JSON.parse(dataJSON)
    const note_found = data.find((element) => 
        element.title === title);

    if(note_found)
    {
        console.log('Note title is : '+ note_found.title);
        console.log('Note body is : '+ note_found.body);
    }
    else {
         console.log('Note not found');
    }
        
        
    
               
}

module.exports = {
    cnote : createNote,
    rnote : removeNote,
    lnote : listNotes,
    readNotes : readNotes,
};