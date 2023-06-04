const usersModel = require('../models/usersModel');

exports.user_details = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.findById(req.params.id));
    }catch (e){
        res.json(e);
    }
}