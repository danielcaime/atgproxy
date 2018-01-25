// To parse this data:
//
//   import { Convert, Producto } from "./file";
//
//   const producto = Convert.toProducto(json);
// dcaime 

export interface Producto {
    result:      Result;
    resultError: ResultError;
}

export interface ResultError {
    codError:  number;
    descError: string;
}

export interface Result {
    auxiliaryMedia:      AuxiliaryMedia[];
    cantidadCarro:       null;
    caracteristicas:     Caracteristica[];
    categoria:           string;
    descripcion:         string;
    descripcionLarga:    string;
    descuentoMedioPagos: DescuentoMedioPago[];
    descuentos:          any[];
    id:                  string;
    imagenes:            Imagenes;
    marca:               Marca;
    nombre:              string;
    precio:              Precio;
    stock:               Stock;
    sucPickupDatos:      null;
    tipoGrupo:           TipoGrupo;
    unidad:              Unidad;
}

export interface Unidad {
    codUnidad:  string;
    descUnidad: string;
    esPesable:  boolean;
}

export interface TipoGrupo {
    descripcion:       string;
    esPickUp:          boolean;
    esVentaPorReserva: boolean;
    id:                string;
    sucursalPickUp:    null;
}

export interface Stock {
    controlaStock:  boolean;
    disponible:     boolean;
    maxPermitido:   number;
    stockCD:        number;
    stockSuc:       number;
    stockUnificado: number;
    sucursal:       string;
}

export interface Precio {
    id:               string;
    listImagenOferta: any[];
    skuId:            string;
    textoValorPrecio: string;
    valorPrecio:      string;
    valorPrecioLista: string;
}

export interface Marca {
    nombre:     null;
    pathImagen: null;
}

export interface Imagenes {
    pathFull:   string[];
    pathLarge:  string[];
    pathMedium: string[];
    pathMini:   string[];
    pathThumb:  string[];
}

export interface DescuentoMedioPago {
    cantidadCuotas:  string;
    codigoError:     null;
    comentarios:     null;
    id:              string;
    imagenDescuento: string;
    mensajeError:    null;
    precioCuota:     string;
}

export interface Caracteristica {
    listaGrupo: ListaGrupo[];
    nombre:     string;
}

export interface ListaGrupo {
    descripcion: string;
    nombre:      string;
}

export interface AuxiliaryMedia {
    name: string;
    type: string;
    url:  string;
}

//Converts JSON strings to/from your types
export module Convert {
    export function toProducto(json: string): Producto {
        return JSON.parse(json);
    }

    export function productoToJson(value: Producto): string {
        return JSON.stringify(value, null, 2);
    }
}