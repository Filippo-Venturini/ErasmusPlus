const applicationsModel = require('../models/applicationsModel');
const index = require('../../src/index');

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

    if(req.body.state === "Rifiutata"){
        await applicationsModel.findOneAndUpdate({_id: req.params.id}, {state: "Rifiutata"});
    }else if (req.body.state === "Accettata"){
        await applicationsModel.updateMany({id_student: req.body.id_student}, {state: "Rifiutata"});
        await applicationsModel.findOneAndUpdate({_id: req.params.id}, {state: "Accettata"});
    }

    res.sendStatus(200);

    const updatedApplications = await applicationsModel.find()
    index.sendUpdatedApplications(updatedApplications);
}

exports.add_application = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    const application = new applicationsModel(req.body);

    try{
        res.json(await application.save());
    }catch (e) {
        res.json(e);
    }
}

exports.refuse_all = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    await applicationsModel.updateMany({university: req.body.university, state:"Attesa"}, {state: "Rifiutata"});

    res.sendStatus(200);

    const updatedApplications = await applicationsModel.find()
    index.sendUpdatedApplications(updatedApplications);
}

exports.change_to_terminated = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    try {
        await applicationsModel.updateOne(
            {id_student: req.params.id, university: req.body.universityName},
            {$set: {"state": "Terminata"}}
        );
    } catch (e) {
        res.json(e);
    }

}

