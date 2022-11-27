const notesCrtl = {};
const Note = require('../models/Note');

notesCrtl.renderNoteForm = function(req,res){
    res.render('notes/new-note');
};

notesCrtl.createNewNote = async function(req,res){    
    const {
        nombre,
        apellido,
        cargo,
        email,
        compania,
        canal
    }= req.body;
    const newNote = new Note({
        nombre,
        apellido,
        cargo,
        email,
        compania,
        canal
    });
    await newNote.save();
    req.flash('success_msg','Note added Succesfully');
    res.redirect('/notes');
};

notesCrtl.renderNotes = async function(req,res){
    const notes = await Note.find({}).lean().sort({date:'desc'});
    res.render('notes/all-notes',{notes});
};

notesCrtl.renderEditForm = async function(req,res){
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-note',{note});
};

notesCrtl.updateNote = async function(req,res){
    const {
        nombre,
        apellido,
        cargo,
        email,
        compania,
        canal
    } = req.body;
    await Note.findByIdAndUpdate(req.params.id,{
        nombre,
        apellido,
        cargo,
        email,
        compania,
        canal
    });
    req.flash('success_msg','Note Upgrate Succesfully');
    res.redirect('/notes');
};

notesCrtl.deleteNote = async function(req,res){
    await Note.findByIdAndDelete(req.params.id);   
    req.flash('success_msg','Note Deleted Succesfully');
    res.redirect('/notes');
};

module.exports = notesCrtl;