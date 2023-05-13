const User = require('../models/user');


module.exports.profile = async function(req, res){
    if(req.cookies.user_id){
        try{ 
            const user = await User.findById(req.cookies.user_id);
            if(user){
                return res.render('user_profile',{
                    title: "User Profile",
                    user: user
                })
            }

            return res.redirect('/users/sign-in');
        } catch{
            console.log("no id found in")
        }

    }else{
        return res.redirect('/users/sign-in');
    }
    // return res.render('user_profile',{
    //     title: "hello there"
    // });
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

// authenticate the sign in
module.exports.createSession = async function(req, res){

    try {
        // find the user
        const user = await User.findOne({ email: req.body.email });

        // handle user not found
        if (!user) {
            return res.redirect('back');
        }

        // compare passwords
        if(user.password != req.body.password){
            return res.redirect('back');
        }

        // set session cookie
        res.cookie('user_id', user.id);
        return res.redirect('/users/profile');

    } catch(err) {
        console.log("error in finding the user in signing in", err);
        return res.redirect('back');
    }
}

// deleting the cookie by signout button so that user cannot acces profile page without sign in.
module.exports.signout =  function(req, res){
    res.clearCookie('user_id');
    res.redirect('/users/sign-in');

}

