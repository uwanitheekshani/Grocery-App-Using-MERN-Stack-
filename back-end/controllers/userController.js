const User = require('../model/User')
const { response } = require('express')
const req = require('express/lib/request');
const res = require('express/lib/response');

const saveUser = (req,res) => {
    // const tempUser = new User({
    //     userFirstName: req.body.user.fName,
    //     userLastName: req.body.user.lName,
    //     userEmail: req.body.user.email,
    //     userPassword: req.body.user.password,

    // });
    // console.log(tempUser);

    // res.status(201).json({message:"awaaaa"});

    const userObj = new User({
        userFirstName:req.body.user.fName,
        userLastName:req.body.user.lName,
        userEmail: req.body.user.email,
        userPassword: req.body.user.password,
    })

    User.findOne({userEmail: req.body.user.email})
        .then(response =>{
            if(response === null){
                //no exist student
                userObj.save().then(()=>{
                    res.status(201).json({message:"Saved"})
                }).catch((err)=>{
                    res.status(500).json({message:"Saved Failed"})
                })
            }else{
                res.status(409).json({message:"User already entered"})
            }
        
        }).catch((err)=>{
            res.status(500).json({message:"Internal server error"})
        })
}

const getUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({userEmail:email,userPassword:password})
        .then((response)=>{
            if(response == null){
                res.status(409).json({message:"user name or password incorrect.!"})
            }else{
                res.status(201).json({message:"Logged"})
            }
        })
        .catch((err)=>{
            res.status(500).json({message:"Internal Server Error..!"})
        })
}



const deleteUser = () => { }
const updateUser = () => { }

module.exports = {saveUser, getUser}