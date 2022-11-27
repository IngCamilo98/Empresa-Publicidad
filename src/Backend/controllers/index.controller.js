const indexCtrl = {};

const User = require('../models/User');
const Company = require('../models/Company');
const Region = require('../models/Region');
const Note = require('../models/Note');

indexCtrl.renderIndex = function(req,res){
    res.render('index');
};

indexCtrl.renderAbout = function(req,res){
    res.render('partials/about');
};

indexCtrl.renderFirst = async function(req,res){
    const newUser = new User({
        nombre: 'Primer',
        apellido:'Usuario',
        email: 'admin@admin.com',
        perfil: 'Supersu',
        password: '123456',
        admin:'si'
    });
    password = '123456';
    newUser.password = await newUser.encrypPassword(password);
    await newUser.save();
    const newNote = new Note({
        nombre: 'Carlos',
        apellido: 'Orozco',
        cargo: 'Gerente',
        email: 'dasda@gmail.com',
        compania:'CocaCola',
        canal:'3023521043'
    });    
    await newNote.save();
    const newNote1 = new Note({
        nombre: 'Camilo',
        apellido: 'Torres',
        cargo: 'Gerente',
        email: 'sadadfcx@gmail.com',
        compania:'CocaCola',
        canal:'3023521047'
    });    
    await newNote1.save();
    const newNote2 = new Note({
        nombre: 'Felipe',
        apellido: 'Orozco',
        cargo: 'Gerente',
        email: 'mngmvbn@gmail.com',
        compania:'CocaC',
        canal:'3523521043'
    });    
    await newNote2.save();
    const newNote3 = new Note({
        nombre: 'Martha',
        apellido: 'Orozco',
        cargo: 'Gerente',
        email: 'dmbnvmnm@gmail.com',
        compania:'aCosla',
        canal:'3023621043'
    });    
    await newNote3.save();
    const newNote4 = new Note({
        nombre: 'Fabian',
        apellido: 'Diaz',
        cargo: 'Gerente',
        email: 'nmfder@gmail.com',
        compania:'CocaZero',
        canal:'3023526043'
    });    
    await newNote4.save();  
 
    const newCompany = new Company({
        nombre:'Cocacola2',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'aaaa@aaaa.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });  
    await newCompany.save();  
    const newCompany1 = new Company({
        nombre:'Cocacola3',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });                    
    await newCompany1.save(); 
    const newCompany2 = new Company({
        nombre:'Cocacola4',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });    
    await newCompany2.save(); 
    const newCompany3 = new Company({
        nombre:'Cocacola5',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });    
    await newCompany3.save(); 
    const newCompany4 = new Company({
        nombre:'Cocacola6',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });    
    await newCompany4.save(); 
    const newCompany5 = new Company({
        nombre:'Cocacola7',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });    
    await newCompany5.save(); 
    const newCompany6 = new Company({
        nombre:'Cocacola8',
        direccion:'cr 232 dfsd1 - 5 sur',
        email:'fsdf@fsdf.com',
        telefono:'144156456',
        ciudad:'Bogota'
    });    
    await newCompany6.save();
    const newRegion = new Region({
        region:'Sudamerica',
        pais:'Chile',
        ciudad:'Santiago'
    });    
    await newRegion.save();    
    const newRegion1 = new Region({
        region:'Sudamerica',
        pais:'Panama',
        ciudad:'Panama'
    });    
    await newRegion1.save();    
    const newRegion2 = new Region({
        region:'Sudamerica',
        pais:'Bolivia',
        ciudad:'Cochabamba'
    });    
    await newRegion2.save();    
    const newRegion3 = new Region({
        region:'Sudamerica',
        pais:'Peru',
        ciudad:'Lima'
    });    
    await newRegion3.save();    
    const newRegion4 = new Region({
        region:'Sudamerica',
        pais:'Ecuador',
        ciudad:'Quito'
    });    
    await newRegion4.save();    
    const newRegion5 = new Region({
        region:'Sudamerica',
        pais:'Argentina',
        ciudad:'Buenos Aires'
    });    
    await newRegion5.save();    
    const newRegion6 = new Region({
        region:'Sudamerica',
        pais:'Brazil',
        ciudad:'Brasilia'
    });    
    await newRegion6.save();                                   
    res.redirect('/');
}

module.exports = indexCtrl;