
const request = require('request');

//
var searchsrv = function(param){

    const resperpage = 10;
    const codsucursal = 200;
    const options = {
        hostname: 'http://www.cotodigital3.com.ar',
        port: null,
        path: `/AtgServiceWS/restfull/searchws/search/${codsucursal}?textinput=${param}&cantidadPorPagina=${resperpage}`,
        method: 'GET'
      };

    return new Promise((resolve, reject) => {
        
        var uri       = "http://localhost:3000/search";
        //var uri       = "http://www.cotodigital3.com.ar/AtgServiceWS/restfull/searchws/search/200?textinput=smart&cantidadPorPagina=10";
        
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(param);
                resolve(body);
                //resolve.bind(null, body);
                //resolve.apply(null, body)
             }
           //console.log(error);
           console.log(uri);
        });
        //setTimeout(resolve.bind(null, 'someValueToBeReturned'), 2000);
    });
}

module.exports = searchsrv;