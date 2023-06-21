const usersModel = require('../models/usersModel');
const universitiesModel = require("../models/universitiesModel");
const applicationsModel = require("../models/applicationsModel");
const index = require("../index");

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
exports.user_details_from_id = async(req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        res.json(await usersModel.findOne({identificationNumber: req.params.identificationNumber}));
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
        await usersModel.updateOne(
            {"notification._id": req.body.id},
            {$set: {"notification.$.read": "true"}}
        )
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

exports.add_notification_to_admin = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    await usersModel.updateOne(
        {role: "Admin"},
        { $push: {notification: { text: req.body.text, read: req.body.read, goto: req.body.goto}}}
    );

    res.sendStatus(200);
};

exports.add_notification_to_user = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }

    await usersModel.updateOne(
        {identificationNumber: req.body.id},
        { $push: {notification: { text: req.body.text, read: req.body.read, goto: req.body.goto}}}
    );

    res.sendStatus(200);

};