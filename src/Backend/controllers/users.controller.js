const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');

usersCtrl.renderSignUpForm = function(req,res){
    res.render('users/signup');
};

usersCtrl.signup = async function(req,res){
    const {
        nombre,
        apellido,
        email,
        perfil,
        password,
        confirm_password,
        admin
    } = req.body;
    
    const errors = [];
    if(password!=confirm_password){
        errors.push({text:'passwords do not match'});
    }
    if(password.length<4){
        errors.push({text:'Password must be at latest 4 characters.'});
    }
    if(errors.length>0){
        res.render('users/signup',{
            errors,
            nombre,
            email
        });
    }else{
        const emailUser = await User.findOne({email:email});
        if(emailUser){
            req.flash('error_msg','The email is alredy in use');
            res.redirect('/users/signup');
        }else{
            const newUser = new User({
                nombre,
                apellido,
                email,
                perfil,
                password,
                admin
            });
            newUser.password = await newUser.encrypPassword(password);
            await newUser.save();
            req.flash('success_msg','You are registered');
            res.redirect('/users');
        }
    }
};

usersCtrl.renderSignInForm = function(req,res){
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local',{
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

usersCtrl.logout = function(req,res){
    req.logout();
    req.flash('success_msg','You are logged out now');
    res.redirect('/users/signin');
};

usersCtrl.renderUsers = async function(req,res){
    const users = await User.find({}).lean().sort({date:'desc'});
    res.render('users/all-users',{users});    
};

usersCtrl.deleteUser = async function(req,res){
    await User.findByIdAndDelete(req.params.id);   
    req.flash('success_msg','User Deleted Succesfully');
    res.redirect('/users');    
};

module.exports = usersCtrl;