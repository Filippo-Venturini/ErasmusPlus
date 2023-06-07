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
    const offer = new addOfferModel({     "name":"ciao",     "country":"ciao",     "city":"ciao",     "latitude":123,     "longitude":123,     "offer": {         "period":"ciao",         "places":"ciao",         "field":"ciao"     },     "logo":"ciao",     "wallpaper":"ciao",     "cardImg":"ciao",     "plot":"ciao" });
    console.log(req.body);
    console.log("arrivata");
    try{
        res.json(await offer.save());
    }catch (e) {
        res.json(e);
    }
};