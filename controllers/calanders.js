"use strict";

const models = require('mongoose').models;
const async = require('async');
const response_helper = require('../helpers/response')



//=====================================Create New Task========================================//


exports.calander = (req, res) => {
    console.log("enter");
    async.waterfall([
        (cb) => {
            models.calander.create({
                day: req.body.day,
                task: req.body.task,
                status: true,
                bhagUser: req.body.bhagUser,
                mahanagarUser: req.body.mahanagarUser,
                nagarUser: req.body.nagarUser,
                bastiUser: req.body.bastiUser,
                shakhaUser: req.body.shakhaUser,
                mandalUser: req.body.mandalUser,
                penduUser: req.body.penduUser,
                khandUser: req.body.khandUser,
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


//===================================== End Create New Task========================================//

//=====================================Start Get Users========================================//


exports.getBastiUser = (req, res) => {
    console.log("bastiUser");
    if (req.query.type == "basti") {
        models.calander.find({ bastiUser: "basti" })
            // .where('createdAt').gte(new Date())
            .skip(parseInt(req.query.skip))
            .limit(parseInt(req.query.limit))
            // .select('createdAt task status day')
            .where('startDate' || 'endDate').gte(new Date())
            .exec((error, data) => {
                console.log("data jehra apa get kita", data);
                if (error) return cb(error);
                if (!data) return cb(null)
                var response = response_helper(res);
                console.log("data aa gyaa", data);
                return (error) ? response.failure(error, 400) : response.data(data, 200);
            })
    } else {
        if (req.query.type == "shakha") {
            models.calander.find({ shakhaUser: "shakha" })
                .where('startDate' || 'endDate').gte(new Date())
                // .where('endDate').gte(new Date())
                .skip(parseInt(req.query.skip))
                .limit(parseInt(req.query.limit))
                .exec((error, data) => {
                    var response = response_helper(res);
                    console.log("data aa gyaa", data);
                    return (error) ? response.failure(error, 400) : response.data(data, 200);
                })
        }
    }
    if (req.query.type == "mahanagar") {
        models.calander.find({ mahanagarUser: "mahanagar" })
        .where('startDate' || 'endDate').gte(new Date())
        .skip(parseInt(req.query.skip))
            .limit(parseInt(req.query.limit))
            // .select('createdAt task status day')
            .exec((error, data) => {
                var response = response_helper(res);
                console.log("data aa gyaa", data);
                return (error) ? response.failure(error, 400) : response.data(data, 200);
            })
    } else {
        if (req.query.type == "nagar") {
            models.calander.find({ nagarUser: "nagar" })
            .where('startDate' || 'endDate').gte(new Date())
                .skip(parseInt(req.query.skip))
                .limit(parseInt(req.query.limit))
                // .select('createdAt task status day')
                .exec((error, data) => {
                    var response = response_helper(res);
                    console.log("data aa gyaa", data);
                    return (error) ? response.failure(error, 400) : response.data(data, 200);
                })
        } else {
            if (req.query.type == "bhag") {
                models.calander.find({ bhagUser: "bhag" })
                .where('startDate' || 'endDate').gte(new Date())
                .skip(parseInt(req.query.skip))
                    .limit(parseInt(req.query.limit))
                    // .select('createdAt task status day')
                    .exec((error, data) => {
                        var response = response_helper(res);
                        console.log("data aa gyaa", data);
                        return (error) ? response.failure(error, 400) : response.data(data, 200);
                    })
            }
            else {
                if (req.query.type == "mandal") {
                    models.calander.find({ mandalUser: "mandal" })
                    .where('startDate' || 'endDate').gte(new Date())
                    .skip(parseInt(req.query.skip))
                        .limit(parseInt(req.query.limit))
                        // .select('createdAt task status day')
                        .exec((error, data) => {
                            var response = response_helper(res);
                            console.log("data aa gyaa", data);
                            return (error) ? response.failure(error, 400) : response.data(data, 200);
                        })
                } else {

                    if (req.query.type == "pendu") {
                        models.calander.find({ penduUser: "pendu" })
                        .where('startDate' || 'endDate').gte(new Date())
                        .skip(parseInt(req.query.skip))
                            .limit(parseInt(req.query.limit))
                            // .select('createdAt task status day')
                            .exec((error, data) => {
                                var response = response_helper(res);
                                console.log("data aa gyaa", data);
                                return (error) ? response.failure(error, 400) : response.data(data, 200);
                            })
                    } else {

                        if (req.query.type == "khand") {
                            models.calander.find({ khandUser: "khand" })
                            .where('startDate' || 'endDate').gte(new Date())
                            .skip(parseInt(req.query.skip))
                                .limit(parseInt(req.query.limit))
                                // .select('createdAt task status day')
                                .exec((error, data) => {
                                    var response = response_helper(res);
                                    console.log("data aa gyaa", data);
                                    return (error) ? response.failure(error, 400) : response.data(data, 200);
                                })
                        } else {

                            if (req.query.type == "prant") {
                                models.calander.find({ prantUser: "prant" })
                                .where('startDate' || 'endDate').gte(new Date())
                                .skip(parseInt(req.query.skip))
                                    .limit(parseInt(req.query.limit))
                                    // .select('createdAt task status day')
                                    .exec((error, data) => {
                                        var response = response_helper(res);
                                        console.log("data aa gyaa", data);
                                        return (error) ? response.failure(error, 400) : response.data(data, 200);

                                    })
                            }


                        }
                    }
                }
            }
        }
    }
}
//=====================================End Get Users========================================//






