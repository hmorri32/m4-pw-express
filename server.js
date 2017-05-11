const express 	 = require('express');
const app 			 = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// app.get('/process_get', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/', function (req, res) {
   res.send('Hello GET');
})

app.post('/', function (req, res) {
   res.send('Hello POST');
})

app.delete('/del_user', function (req, res) {
   res.send('Hello DELETE');
})

app.get('/list_user', function (req, res) {
   res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {   
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

// COOKIES
// var express      = require('express')
// var cookieParser = require('cookie-parser')

// var app = express()
// app.use(cookieParser())

// app.get('/', function(req, res) {
//    console.log("Cookies: ", req.cookies)
// })
// app.listen(8081)