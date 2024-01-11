import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  @Output() productoCreado: EventEmitter<Producto> = new EventEmitter();
  nuevoProducto: Producto = new Producto();
  onClickEnviar(): void {
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Producto();
  }
}
