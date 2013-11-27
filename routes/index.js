
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index.html');

};

exports.forms = function(req, res){
    res.render('form-elements.html');

};