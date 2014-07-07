var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello World'});
});

/* GET Userlist page. */
// extracting the 'db' object we passed to our http request
// then using that db connection to fill out 'docs' variable with database documents (i.e. user data).
// then do a page render like the other pages above.
router.get('/userlist', function(req, res) {
  var db = req.db; // require db, put in variable
  var collection = db.get('usercollection'); // get usercollection (collection of users, we've named it usercollection here) from db, put in variable
  collection.find({},{},function(e,docs){
    res.render('userlist', { //Basically, we tell our app which collection we want to use ('usercollection') and do a find, then return the results as the variable "docs". Once we have those documents, we then do a render of userlist (which will need a corresponding Jade template), giving it the userlist variable to work with, and passing our database documents to that variable.
      "userlist" : docs // render the value of the key/value pair?
    });
  });
});

module.exports = router;
