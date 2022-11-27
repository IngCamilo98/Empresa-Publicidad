const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    cargo:{type: String,required: true},
    email:{type: String,required: true},
    compania:{type: String, required: true},
    canal:{type: String, required: true}
},{
    timestamps: true
});

module.exports = model('Note',NoteSchema);