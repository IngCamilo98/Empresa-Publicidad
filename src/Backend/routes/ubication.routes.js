const {Router} = require('express');
const router = Router();

const {
    renderUbication,
    renderRegionForm,
    renderEditForm,
    createNewRegion,
    updateUbication,
    deleteUbication
} = require('../controllers/ubication.controller');

const {isAuthenticated} = require('../helpers/auth');

//get all ubications
router.get('/ubications',isAuthenticated,renderUbication);
//Create Ubication
router.get('/ubications/add-region',isAuthenticated,renderRegionForm);
router.post('/ubications/new-region',isAuthenticated,createNewRegion);

//update Ubication
router.get('/ubications/edit/:id',isAuthenticated,renderEditForm);
router.put('/ubications/edit-region/:id',isAuthenticated,updateUbication);

//Delete ubication
router.delete('/ubications/delete/:id',isAuthenticated,deleteUbication);


module.exports = router;