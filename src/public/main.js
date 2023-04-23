import {loadNotes, onNewNote, onSelected} from "./socket.js";
import {onHandleSubmit, renderNotes, appendNote, fillForm} from './ui.js';

onNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm)

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit',onHandleSubmit);