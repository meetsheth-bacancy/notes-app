const fs = require('fs');
const { exit } = require('process');

const createNote = (title, body) => {
    try
    {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        data.filter((element)=>{
            if(element.title === title)
            {
                console.log("Note with same title already exists. Try with some different title name");
                exit();
            }
        });
        data.push({title : title, body : body });
        //console.log(data);
        console.log("New note added!");
        fs.writeFileSync("notes.json", JSON.stringify(data));
    }
    catch(e)
    {
        fs.writeFileSync("notes.json", "[]");
        createNote(title,body);
    }
    //fs.writeFileSync("notes.json", body)
};

module.exports = createNote;