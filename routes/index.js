/**
 * 
 */

 var express = require('express');

 const router = express.Router();

 var get = router.get('/', (_,res)=>{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hola mundo!");
    });

module.exports = get;