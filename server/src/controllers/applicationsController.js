const applicationsModel = require('../models/applicationsModel');
const index = require('../../src/index');
const universitiesModel = require("../models/universitiesModel");
const {application} = require("express");

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

    console.log(req.body)
    if(req.body.state === "Rifiutata"){
        await applicationsModel.findOneAndUpdate({_id: req.params.id}, {state: "Rifiutata"});
    }else if (req.body.state === "Accettata"){
        await applicationsModel.updateMany({id_student: req.body.id_student}, {state: "Rifiutata"});
        await applicationsModel.findOneAndUpdate({_id: req.params.id}, {state: "Accettata"});
    }

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