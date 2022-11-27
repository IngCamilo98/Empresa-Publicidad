const {Router} = require('express');
const { renderSignInForm,
    renderSignUpForm,
    signin, 
    signup,
    logout,
    renderUsers,
    deleteUser
 } = require('../controllers/users.controller');
const router = Router();

const {isAuthenticated} = require('../helpers/auth');

router.get('/users/signup',isAuthenticated,renderSignUpForm);

router.post('/users/signup',isAuthenticated,signup);

router.get('/users/signin',renderSignInForm);

router.post('/users/signin',signin);

router.get('/users/logout',isAuthenticated,logout);


//get all users
router.get('/users',isAuthenticated,renderUsers);

//Delete user
router.delete('/users/delete/:id',isAuthenticated,deleteUser);

module.exports = router;