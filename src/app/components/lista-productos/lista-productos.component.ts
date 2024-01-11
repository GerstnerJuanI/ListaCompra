import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss',
})
export class ListaProductosComponent {
  @Input() productos: Producto[] = [];
  @Input() textoBoton: string = '';
  @Output() productoSeleccionado :EventEmitter<number> = new EventEmitter();
  onClickComprar($index:number){
    this.productoSeleccionado.emit($index);
  }
}
