const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    apellido:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    perfil: {type:String, required: true},
    password: {type: String, required: true},
    admin:{type: String, required: true}
},{
    timestamps: true
});

UserSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    const crypt = await bcrypt.hash(password, salt);
    return crypt;
};

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
};

module.exports = model('User', UserSchema);