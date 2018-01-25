'use strict';
//  var querystring = require('querystring');
var request = require('request');
var https = require('https');
var http = require('http');
//var Client = require('node-rest-client').Client;
var EJS = require('ejs');
var express = require('express');

//var proxy = require('./atgserviceproxy');

const router = express.Router();

const app = express();

const clearTimeout = 3000;
/**
 * declaraciones
 */

var product = 'prod00268705';
var host = 'www.cotodigital3.com.ar/';
var endpoint = `AtgServiceWS/restfull/productws/product/${product}/200?isLogged=False`;
var method = 'GET';

var url = "http://localhost:3000/listUsers";

// function getproduct(){//endpoint, method, data, success) {
//     // var dataString = JSON.stringify(data);
    
//     // if (method == 'GET') {
//     //   endpoint += '?' + querystring.stringify(data);
//     // }
//     // else {
//     //   headers = {
//     //     'Content-Type': 'application/json',
//     //     'Content-Length': dataString.length
//     //   };
//     // }

    //2.
var extServerOptions = {
    host: 'localhost',
    port: '3000',
    path: '/listUsers',
    method: 'GET'
};
  
    //var req = http.get(url, function(res) {
    //  var req = http.request(extServerOptions, function(res) {
    //    //res.setEncoding('utf-8');
    //    console.log('STATUS: ' + res.statusCode);
    //    var responseString = '';
  
      //  res.on('data', function(data) {
      //    responseString += data;
      //  });
  
      // res.on('end', function() {
      //   console.log(responseString);
      //   var responseObject = JSON.parse(responseString);
      //   console.log(responseObject);
      //   //success(responseObject);
      // });
  
    // req.write(dataString);
    //  req.end();
    // })

  //exports.getproduct = getproduct();

  
 //var client = new Client();
 
 //var url = "http://www.cotodigital3.com.ar/AtgServiceWS/restfull/productws/product/prod00268705/200?isLogged=False";
 //var search = "http://www.cotodigital3.com.ar/AtgServiceWS/restfull/searchws/search/{0}?textinput={1}&cantidadPorPagina={2}", branchoffice, filter, maxitems)).Result;
  
//     // direct way 
//      client.get(url, function (data, response) {
//         // parsed response body as js object 
//         // var datos = JSON.parse(data);
//         // console.log(datos);
//         // raw response 
//         console.log(response);
//     });


    // var options_proxy = {
    //     proxy: {
    //         host: url,
    //         port: 8080,
    //         user: "154232",
    //         password: "philips1234",
    //         tunnel: false
    //     }
    // };
     
    // var client = new Client(options_proxy);

    // client.get(url, function (data, response) {
    //     // parsed response body as js object 
    //     // var datos = JSON.parse(data);
    //     // console.log(datos);
    //     // raw response 
    //     console.log(response);
    // });client.registerMethod("jsonMethod", "http://remote.site/rest/json/method", "GET");
 
// registering remote methods 
// client.registerMethod("jsonMethod", url_s, "GET");

// client.methods.jsonMethod(function (data, response) {
//    // parsed response body as js object 
//    console.log(data);
//    // raw response 
//    console.log(response);
// });

//https.get(url_s);./producto.ts

// require('typescript-require');

//const Convert   = require('./producto2.ts');
//const Convert   = require( './producto2.ts');

//import Convert from 'producto2.ts';// no funciona
//const Convert = require('Convert');
//
//const producto = Convert.toProducto(json);

//import { Convert } from 'model/producto';


var jsonRes = ""; 

request.get(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
      //const producto = Convert.toProducto(body)
      jsonRes = body;
         //console.log(JSON.stringify(jsonVar))
      }
    //console.log(error);
});

// Set directory to contain the templates ('views')
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

var port = process.env.port || 5000;
// GET home page for the application

//index
// app.get('/', function(req, res) {
//   res.render('./index');
// });

app.get('/', function(_, res) {

var descripcion = 'n/a';
    // meter en una clase
var temp  = JSON.parse(jsonRes);
descripcion = temp.result.descripcion;
var imageUrl = temp.result
//

  var drinks = [
      { name: 'Bloody Mary', drunkness: 3 },
      { name: 'Martini', drunkness: 5 },
      { name: 'Scotch', drunkness: 10 }
  ];
    var gift = {
        id: 12,
        name:'test',
        images:imageUrl,
        description:descripcion,
        descripcion:descripcion,
        category:'lalala',
        price:123
    }
  res.render('./index', {
      drinks: drinks,
      title: descripcion,
      descripcion:descripcion,
      image:temp.result.imagenes.pathFull[0],
      gift : gift
  });
});

app.get('/search', function(_, res) {
    //proxy 
    var proxysrv = require('./atgservice/atgserviceproxy');
    
    var list = '';
    proxysrv.then(data => {
        var temp = JSON.parse(data);
        list = temp.result.productos;

        res.render('./search', {
            producList:list
            });
    });   
});

//listen
var server = app.listen(port,function(){
  var host = server.address().address
  var port = server.address().port

})