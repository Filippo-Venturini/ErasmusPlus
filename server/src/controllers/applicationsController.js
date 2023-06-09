const applicationsModel = require('../models/applicationsModel');

exports.all_applications = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await applicationsModel.find());
    }catch (e){
        res.json(e);
    }
}

exports.modify_application_state = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    console.log(req.body);
    await applicationsModel.findOneAndUpdate({_id: req.params.id}, {state: req.body.state})

}