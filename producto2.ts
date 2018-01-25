  interface Producto {
    result:      string;
    resultError: ResultError;
}

 interface ResultError {
    codError:  number;
    descError: string;
}

//Converts JSON strings to/from your types
class Convert {
      toProducto(json: string): Producto {
        return JSON.parse(json);
    }

     productoToJson(value: Producto): string {
        return JSON.stringify(value, null, 2);
    }
}

export = Convert;