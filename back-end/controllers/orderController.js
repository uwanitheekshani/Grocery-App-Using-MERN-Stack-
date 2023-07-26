const Order = require('../model/Orders')
const { response } = require('express')
const req = require('express/lib/request');
const res = require('express/lib/response');

const saveOrder = (req,res) => {

    const orderObj = new Order({
        userEmail:req.body.obj.userEmail,
        itemCode:req.body.obj.itemCode,
        itemName: req.body.obj.itemName,
        qty: req.body.obj.qty,
        amount: req.body.obj.amount
    })

    // console.log(itemObj);

    
        
            
                //no exist item
                orderObj.save().then(()=>{
                    res.status(201).json({message:"Saved"})
                }).catch((err)=>{
                    res.status(500).json({message:"Saved Failed"})
                })
         

// const getUser = (req, res) => {
//     const email = req.body.signinEmail;
//     const password = req.body.signinPassword;

//     User.findOne({userEmail:email,userPassword:password})
//         .then((response)=>{
//             console.log("response: "+response);

//             if(response == null){
//                 res.status(409).json({message:"user name or password incorrect.!"})
//             }else{
//                 res.status(201).json({message:"Logged", data:response})
//             }
//         })
//         .catch((err)=>{
//             res.status(500).json({message:"Internal Server Error..!"})
//         })
}

const getSelectOrder =  (req,res) =>{
    // const email = req.params.email;

    // console.log();
    // Item.findById({_id:id})
     
    Order.find({userEmail:req.body.email})
    .then(orders => res.json(orders))

    .catch(err => res.json(err))

}

const getOrder = (req, res) => {
    Order.find({})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
 }

 const deleteOrder = (req,res) => { 
    const id = req.params.id;
    Order.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
}



// const deleteUser = () => { }
// const updateUser = () => { }

module.exports = {saveOrder,getSelectOrder,getOrder,deleteOrder}
