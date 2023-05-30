const universityDetailModel = require('../models/universityDetailModel');

exports.university_detail = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universityDetailModel.find());
    }catch (e){
        res.json(e);
    }
}