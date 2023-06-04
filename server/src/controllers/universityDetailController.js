const universityDetailModel = require('../models/universitiesModel');

exports.university_detail = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universityDetailModel.findById(req.params.id));

    }catch (e){
        res.json(e);
    }
}