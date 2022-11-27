const {Router} = require('express');
const router = Router();

const { renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

//create ///////////////
router.get('/notes/add',isAuthenticated,renderNoteForm);
router.post('/notes/new-note',isAuthenticated,createNewNote);

//update Notes////////////////
router.get('/notes/edit/:id',isAuthenticated,renderEditForm);
router.put('/notes/edit-note/:id',isAuthenticated,updateNote);

//Delete Notes //////////////////
router.delete('/notes/delete/:id',isAuthenticated,deleteNote);

//Get all note/////////
router.get('/notes',isAuthenticated,renderNotes);

module.exports = router;