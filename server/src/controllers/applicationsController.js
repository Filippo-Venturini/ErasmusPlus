const applicationsModel = require('../models/applicationsModel');

exports.all_applications = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await applicationsModel.find());
    }catch (e){
        res.json(e);
    }
}