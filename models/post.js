var mongoose = require('mongoose');
var models = require('mongoose').models;


var post = mongoose.Schema({
    image: { type: String, default: "" },
    title: { type: String, default: "" },
    name: { type: String, default: "" },
    message: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },

});

post.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

mongoose.model('post', post);
