 import { saveNote,deleteNote, getNoteById, updateNote } from "./socket.js";

 const notesList=document.querySelector('#notes')
 const title = document.querySelector('#title')
  const description = document.querySelector('#description')

  let saveId="";

const noteUI = note => {
  const div = document.createElement('div')
  div.innerHTML=`
    <div class="card card-body  rounded-0 mb-2 animate__animated animate__fadeInUp">
      <div class="d-flex justify-content-between">
      <h1>${note.title}</h1>
      <div>
        <button class="btn btn-danger btn-sm delete" data-id="${note._id}">Delete</button>

        <button class="btn btn-secondary btn-sm update" data-id="${note._id}"> Update</button>
      </div>
      </div>
      <p>${note.description} </p>
      <hr>
      <p><small> Modificado el : ${note.updatedAt} </small></p>
    </div>
  `
  const btnDelete = div.querySelector('.delete')
  const btnUpdate = div.querySelector('.update')
  btnDelete.addEventListener('click',e=> deleteNote(btnDelete.dataset.id))
  btnUpdate.addEventListener('click',e=> getNoteById(btnUpdate.dataset.id))
 //console.log(btnDelete.dataSet.id);
  return div
}



export const renderNotes = notes=>{
  notesList.innerHTML= '';
  notes.forEach(note => notesList.append(noteUI(note)))


} 
export const fillForm=note=>{
  title.value = note.title;
  description.value = note.description;
  saveId = note._id;
}
 export const onHandleSubmit = (e) =>{
  e.preventDefault();
  if (saveId){
    console.log('updatring');
    updateNote(saveId,title.value,description.value);
  }else{
    saveNote(title.value,description.value);
  }
  saveId='';
  title.value="";
  description.value='';
  
};
export const appendNote = note => {
  notesList.append(noteUI(note))
}