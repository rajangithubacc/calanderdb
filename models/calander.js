var mongoose = require('mongoose');
var models = require('mongoose').models;


var calander = mongoose.Schema({
    task: { type: String, default: "" },
    status: { type: Boolean, default: true },
    startDate: { type: Date, default: "" },
    endDAte: { type: Date, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    day: { type: String, default: "" },
    bhagUser: { type: String, default: "" },
    mahanagarUser: { type: String, default: "" },
    nagarUser: { type: String, default: "" },
    bastiUser: { type: String, default: "" },
    shakhaUser: { type: String, default: "" },
    mandalUser: { type: String, default: "" },
    penduUser: { type: String, default: "" },
    khandUser: { type: String, default: "" },

});

calander.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

mongoose.model('calander', calander);
