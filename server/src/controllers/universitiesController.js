const universitiesModel = require('../models/universitiesModel');
const universityDetailModel = require("../models/universitiesModel");

exports.all_universities = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universitiesModel.find());
    }catch (e){
        res.json(e);
    }
}

exports.university_detail = async(req, res) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universityDetailModel.findById(req.params.id));

    } catch (e) {
        res.json(e);
    }
}
