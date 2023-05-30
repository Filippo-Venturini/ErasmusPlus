const usersModel = require('../models/usersModel');

exports.all_users = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.find());
    }catch (e){
        res.json(e);
    }
}