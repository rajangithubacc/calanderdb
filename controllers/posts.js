"use strict";

const models = require('mongoose').models;
const async = require('async');
const response_helper = require('../helpers/response')
const fs = require('fs')



//=====================================Create New Task========================================//


exports.createPost = (req, res) => {
    console.log("enter", req);
    async.waterfall([
        (cb) => {
            models.post.create({
                image: req.query.image,
                title: req.query.title,
                status: true,
                name: req.query.name,
                message: req.query.message
            }, function (err, user) {
                if (err) return (err);
                return cb(null, user);
            })
        }
    ], (err, data) => {
        var response = response_helper(res);
        return response.data(data, 200);
    });
}

//===================================Get All Posts============================================//


exports.getAllPosts = (req, res) => {
    console.log("enter to get all posts");
    models.post.find({ status: true })
        // .where('createdAt').gte(new Date())
        .skip(parseInt(req.query.skip))
        .limit(parseInt(req.query.limit))
        .exec((error, data) => {
            console.log("AAAAA Gaiyaa Posts Sariyaa", data);
            if (error) return cb(error);
            if (!data) return cb(null)
            var response = response_helper(res);
            console.log("Posts aa gaiyaa", data);
            return (error) ? response.failure(error, 400) : response.data(data, 200);
        })
}


//===================================Get All Posts============================================//


//===================================upload Post=============================================//

exports.uploadFile = (req, res) => {
    console.log("req.........", req.file);
    var fileData = req.file;
    async.waterfall([
        (cb) => {
            if (fileData) {
                console.log("fileData", fileData);
                if (req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png" || req.file.mimetype == "image/gif") {
                    var fileName = fileData.filename;
                    console.log("fileName", fileName)
                    var newPath = "./uploads/" + fileName;
                    fs.readFile('./uploads/' + fileName, function (err, fileData) {
                        console.log("enter", fileData);
                        cb(null, { mediaUrl: fileData, mediaType: req.file.mimetype || "defaultMedia" });
                    });
                }
            }
        }
    ], (error, data) => {
        console.log("data............", data.mediaUrl);
        var response = response_helper(res);
        if (error) return response.failure(error, 400);
        return response.data(data, 200);
    });
}

//============================================End Upload Post=================================//
