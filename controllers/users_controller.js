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
module.exports.create = function(req, res){
    //todo later
}

//sign in and create the session for the user.
module.exports.createSession = function(req, res){
    //todo later
}