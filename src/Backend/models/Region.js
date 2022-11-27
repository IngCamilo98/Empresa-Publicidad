const {Schema, model} = require('mongoose');

const regionSchema = new Schema({
    region:{type:String, required: true},
    pais:{type:String, required: true},
    ciudad: {type:String, required: true}
},
{
    timestamps: true
});

module.exports = model('Region',regionSchema);