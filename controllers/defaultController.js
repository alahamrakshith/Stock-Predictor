module.exports = {
    index: (req, res) => {
        res.render('default/index', {title:"Home", style:"/css/home.css"})
    },

    loginGET: (req, res) => {
        res.render('default/login', {title:"Login", style:"/css/login-signup.css"})
    },

    loginPOST: (req, res) => {
        res.send("congratulations")
    },

    signupGET: (req, res) => {
        res.render('default/signup', {title:"SignUp", style:"/css/login-signup.css"})
    },

    signupPOST: (req, res) => {
        res.send("congratulations")
    },

}