const universitiesModel = require('../models/universitiesModel');

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