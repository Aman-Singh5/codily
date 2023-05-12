const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: "hello there"
    });
}

//render the signup page
module.exports.signup = function(req, res){
    return res.render('user_signup',{
        title: "Codial SignUp"
    });
}

//render the signin page
module.exports.signin = function(req, res){
    return res.render('user_signin',{
        title: "Codial Signin"
    });
}

// get the signup data
module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    try {
        const user = await User.findOne({ email: req.body.email });
        
        if(!user){
            try{
                await User.create(req.body);
                return res.redirect('/users/sign-in');
            } catch(err){
                console.log("error in creating user in signingup");
            }

        } else{
            return res.redirect('back');
        }
      } catch (err) {
        
        console.log("error in finding user in signingup")
      }
      
}

//sign in and create the session for the user.
module.exports.createSession = function(req, res){
    //todo later
}