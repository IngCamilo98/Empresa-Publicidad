const {Router} = require('express');
const router = Router();

const {
    renderCompany,
    renderCompanyForm,
    renderEditForm,
    createNewCompany,
    updateCompany,
    deleteCompany   
} = require('../controllers/companies.controller');

const {isAuthenticated} = require('../helpers/auth');

//get all ubications
router.get('/companies',isAuthenticated,renderCompany);
//Create Ubication
router.get('/companies/add-company',isAuthenticated,renderCompanyForm);
router.post('/companies/new-company',isAuthenticated,createNewCompany);

//update Ubication
router.get('/companies/edit/:id',isAuthenticated,renderEditForm);
router.put('/companies/edit-company/:id',isAuthenticated,updateCompany);

//Delete ubication
router.delete('/companies/delete/:id',isAuthenticated,deleteCompany);


module.exports = router;