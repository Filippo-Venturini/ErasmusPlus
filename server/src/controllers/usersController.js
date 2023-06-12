const usersModel = require('../models/usersModel');
const universitiesModel = require("../models/universitiesModel");

exports.all_users = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.find());
    }catch (e){
        res.json(e);
    }
}
exports.user_details = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.findOne({mail: req.params.mail}));
    }catch (e){
        res.json(e);
    }
}
exports.get_new_notification = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.findOne({mail: req.params.mail}));
    }catch (e){
        res.json(e);
    }
}
exports.read_notification = async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    try{
        res.json(await usersModel.findOneAndReplace({mail: req.params.mail}, req.body, {returnNewDocument: false}).then(replacedDocument => {
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

exports.add_favourites = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    try {
        await usersModel.updateOne(
            {mail: req.params.mail},
            { $addToSet: { favourites: req.body}}
        );
    } catch (e) {
        res.json(e);
    }

}

exports.remove_favourite = async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    try{
        await usersModel.updateOne(
            {mail: req.params.mail},
            {$pull: {favourites: {universityName: req.body.name}}});
    } catch (e) {
        res.json(e);
    }

}