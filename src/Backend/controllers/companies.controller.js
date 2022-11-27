const companiesCrtl = {};
const Company = require('../models/Company');

companiesCrtl.renderCompany = async function(req,res){
    const companies = await Company.find({}).lean().sort({date:'desc'});
    res.render('companies/all-companies',{companies});    
};

companiesCrtl.renderCompanyForm = async function(req,res){
    res.render('companies/new-company');
};

companiesCrtl.renderEditForm = async function(req,res){
    const company = await Company.findById(req.params.id).lean();
    res.render('companies/edit-company',{company});    
};

companiesCrtl.createNewCompany = async function(req,res){
    const {nombre,direccion,email,telefono,ciudad} = req.body;
    const newCompany = new Company({nombre,direccion,email,telefono,ciudad});
    await newCompany.save();
    req.flash('success_msg','Company added Succesfully');
    res.redirect('/companies'); 
};

companiesCrtl.updateCompany = async function(req,res){
    const {
        nombre,
        direccion,
        email,
        telefono,
        ciudad
    } = req.body;
    await Company.findByIdAndUpdate(req.params.id,{
        nombre,
        direccion,
        email,
        telefono,
        ciudad        
    });
    req.flash('success_msg','Company Upgrate Succesfully');
    res.redirect('/companies');      
};

companiesCrtl.deleteCompany = async function(req,res){
    await Company.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Company Deleted Succesfully');
    res.redirect('/companies');
};

module.exports = companiesCrtl;