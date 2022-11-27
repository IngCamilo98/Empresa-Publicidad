const {Schema, model} = require('mongoose');

const CompanySchema = new Schema({
    nombre:{type:String,require:true},
    direccion:{type:String,require:true},
    email:{type:String,require:true},
    telefono:{type:String,require:true},
    ciudad:{type:String,require:true}
},{
    timestamps: true
});

module.exports = model('Company',CompanySchema);