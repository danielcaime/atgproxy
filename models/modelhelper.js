/**
 * dcaime
 * model helper
 */

 var product = require('../models/product');
 var data = new Map();

 var ResultList = (param) => {
     param.forEach(function(element) {
         data.set(element.id,new product(
             element.id,
             element.nombre,
             element.imagenes.pathMini[0],
             element.descripcionLarga,
             '',
             Precio(element)
         ))
     }, this)

     return data;
 }

 var Precio = (element) => {
     var price = '0';
     price = element.precio.valorPrecioLista;
     if(element.descuentos.length > 0)
     {
         price = element.descuentos[0].precioRegular;
     }
    //console.log(element.precio.valorPrecioLista);
    if(!price.includes('$')){
        price = "$"+price;
    }
    return price;
 }
 module.exports = ResultList;