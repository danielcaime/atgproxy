/**
 * 
 */

//search module
var express = require('express');
var proxysrv = require('../atgservice/atgserviceproxy');

 const router = express.Router();

 var get = router.get('/', (req,res)=>{
    var params = req.query.message;

    if(req.query.message == null){
        params = 'S/N';
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("uster ingresó: "+ params);   
    }else{
            var list = '';
            proxysrv(params).then(data => {
                var temp = JSON.parse(data);
                list = temp.result.productos;
    
                res.render('./search', {
                    producList:list
                    });
            });      
        }
    });

var post = router.post('/', (req, res) => {
        res.sendStatus(200);
        const data = req.body;
    });
                
module.exports = get,post;