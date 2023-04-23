import save from 'save';
import Note from './models/Note';


export default(io)=> {
  io.on('connection', (socket)=> {

    const emitNotes = async() => {
      const notes = await Note.find()
      console.log(notes);
      io.emit('server:loadnotes',notes)
    }
    emitNotes(); 
       // console.log('New user connected');
    socket.on('client:newnote',async (data) => {
      const newNote = new Note(data);
      const saveNote = await newNote.save();
      io.emit('server:newnote',saveNote)
    })

    socket.on('client:deletenote',async(id)=>{
      await Note.findByIdAndDelete(id)
      emitNotes()
    })
    socket.on('client:getnote',async id=>{
       const note = await Note.findById(id);
       io.emit('server:selectednote',note)
    })
    socket.on('client:updatenote', async(updatedNote)=>{
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description
      })
      emitNotes();
    })
  })
}