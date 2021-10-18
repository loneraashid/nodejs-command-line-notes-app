const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){

return "Your Notes...";

}


const addNote =(title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=> note.title === title
    );

    if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    });

 saveNotes(notes);
 console.log(chalk.bgGreen('note added successfully'));
}else{
    console.log(chalk.bgRed('title already in use'));
}
}




const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    }catch(e){
        return []
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//  removing Notes//


const removeNotes = (title)=>{

        const notesAvailable = loadNotes();
        
            const ExistingNotes = notesAvailable.filter((noteToRemove)=>noteToRemove.title!==title
            );


            if(notesAvailable.length>ExistingNotes.length){

                console.log(chalk.bgGreen('Removed Successfully'));
            saveNotes(ExistingNotes);               


            }else{

                console.log(chalk.bgRed('No Note Found'));
            }



}

        const listNotes = ()=>{
            const notes  = loadNotes();
            console.log(chalk.bgGreen('Your Notes'));
            notes.forEach((note)=>{
                console.log(note.title);
            })
        }

        const readNote = (title)=>{
            const notes = loadNotes();

            const toFind = notes.find((note)=> note.title === title);


                if(toFind){
                    console.log(chalk.bgRed.inverse.bold(toFind.title));
                    console.log(toFind.body);

            }else{
                console.log(chalk.red('note not found'));
            }

        }
module.exports = {

    getNotes: getNotes,
    addNote: addNote, 
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
};