var express = require('express');
// var app = express();
const calander_controller = require('../controllers/calanders');
const post_controller = require('../controllers/posts');



module.exports.configure = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
 
//========================== Start Create calander apis=============================//

    app.post('/create/calander',calander_controller.calander);
    app.get('/calander/getBastiUser',calander_controller.getBastiUser);

    


//========================== End Create calander apis=============================//


//==========================Start Post =========================================//

app.post('/create/post',post_controller.createPost);
app.get('/post/getAllPosts',post_controller.getAllPosts);


//==========================End Post =========================================//

}
