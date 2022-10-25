const router = require("express").Router();
// const Post  = require("../models/User");
const UserModel = require("../models/User");
const passport= require("../Authenticate/PassportConfig");
const bcrypt = require("bcrypt");

router.post("/register", (req, res) => {

    UserModel.find({email: req.body.email}, (err, docs) => {
        if(docs.length > 0){
            res.status(200).json({msg: "User already exists"})
            return;
        }
    })
    const HashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: HashedPassword,
    });
    newUser.save((err, user) => {
        if(err)
        {
            res.status(500).json({status:"Registered"})
        }else{
            res.status(200).json({status:"Registered"})
        }
    })

})

router.get("/login-failed", (req, res) => {
    res.send("Login-Failed")
})

router.post("/login", passport.authenticate("local",{
    failureRedirect: "/login-failed",
}), (req, res) => {
    res.status(200).json({status:"Logged in"})
})

module.exports = router;