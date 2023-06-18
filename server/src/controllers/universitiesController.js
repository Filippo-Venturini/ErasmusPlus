const universitiesModel = require('../models/universitiesModel');
const index = require('../../src/index');
const usersModel = require("../models/usersModel");

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
        res.json(await universitiesModel.findById(req.params.id));

    } catch (e) {
        res.json(e);
    }
}

exports.university_from_name = async(req, res) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await universitiesModel.findOne({name: req.params.name}));

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

    const offer = new universitiesModel(req.body);

    try{
        res.json(await offer.save());
    }catch (e) {
        res.json(e);
    }
};

exports.update_offer = async (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    try{
        res.json(await universitiesModel.findOneAndReplace({_id: req.params.id}, req.body, {returnNewDocument: false}).then(replacedDocument => {
            if(replacedDocument) {
                console.log(`Successfully replaced the following document: ${replacedDocument}.`)
            } else {
                console.log("No document matches the provided query.")
            }
            return replacedDocument
        }).catch(err => console.error(`Failed to find and replace document: ${err}`)));

    }catch (e) {
        res.json(e);
    }
}

exports.add_review = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    await universitiesModel.updateOne(
        {_id: req.body.university_id},
        { $addToSet: { reviews: req.body.review}}
    );

};

exports.update_offer_accepted = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    await universitiesModel.findOneAndUpdate(
        {_id: req.params.id},
        { offer: { period: req.body.period, places: req.body.places, accepted: req.body.accepted, field: req.body.field}}
    );

    const updatedUniversities = await universitiesModel.find()
    index.sendUpdatedUniversities(updatedUniversities)

};

exports.delete_offer = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    await universitiesModel.deleteOne(
        {name: req.params.name}
    )

}
