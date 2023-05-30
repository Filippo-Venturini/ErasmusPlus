const universitiesModel = require('../models/universitiesModel');

exports.all_universities = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universitiesModel.find());
    }catch (e){
        res.json(e);
    }
}