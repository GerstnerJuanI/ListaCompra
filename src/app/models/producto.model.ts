export class Producto{
    nombre:string;
    cantidad:string;
    departamento:string;
    constructor(pnombre:string = '', pcantidad:string = '',pdepartamento:string = '') {
        this.nombre = pnombre;
        this.cantidad = pcantidad;
        this.departamento = pdepartamento;
    }
}