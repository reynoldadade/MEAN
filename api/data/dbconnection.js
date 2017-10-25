var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel';
//connection to open the connection

var _connection = null ;

var open = function (){
    MongoClient.connect(dburl, function (err,db) {
        if(err){
            console.log("Database connection failed");
            return;
        }
        _connection = db;
        console.log("DB connection open", db);
    });
  //set _connection
};

var get  = function () {
    return _connection;
};


module.exports = {
    open: open,
    get :get
};


