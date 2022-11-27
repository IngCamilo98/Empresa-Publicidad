const ubicationCrtl = {};
const Region = require('../models/Region');

ubicationCrtl.renderUbication = async function(req,res){
    const regions = await Region.find({}).lean().sort({date:'desc'});
    res.render('ubications/all-ubications',{regions});
};

ubicationCrtl.renderRegionForm = function(req,res){
    res.render('ubications/new-region');
};

ubicationCrtl.renderEditForm = async function(req,res){
    const region = await Region.findById(req.params.id).lean();
    res.render('ubications/edit-region',{region});
};

ubicationCrtl.createNewRegion = async function(req,res){
    const {region,pais,ciudad} = req.body;
    const newRegion = new Region({region,pais,ciudad});
    console.log(req.body)
    await newRegion.save();
    req.flash('success_msg','Region added Succesfully');
    res.redirect('/ubications');    
};


ubicationCrtl.updateUbication = async function(req,res){
    const {
        region,
        pais,
        ciudad
    } = req.body;
    await Region.findByIdAndUpdate(req.params.id,{
        region,
        pais,
        ciudad        
    });
    req.flash('success_msg','Ubications Upgrate Succesfully');
    res.redirect('/ubications');    
};

ubicationCrtl.deleteUbication = async function(req,res){
    await Region.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Region Deleted Succesfully');
    res.redirect('/ubications');    
};

module.exports = ubicationCrtl;