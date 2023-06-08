const universitiesModel = require('../models/universitiesModel');
const universityDetailModel = require("../models/universitiesModel");
const addOfferModel = require("../models/universitiesModel");


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

exports.add_offer = async (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    const offer = new addOfferModel(req.body);
    //console.log(req.body);
    console.log(offer)


    try{
        res.json(await offer.save());
    }catch (e) {
        res.json(e);
    }
};