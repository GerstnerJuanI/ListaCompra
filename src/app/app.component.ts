import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    FormularioComponent,
    ListaProductosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ListaCompra';
  productosSeleccionados: Producto[] = [];
  productosComprados: Producto[] = [];
  onProductoCreado($event: any) {
    this.productosSeleccionados.push($event);
  }
  onProductoSeleccionado($event: any) {
    const prod = this.productosSeleccionados.splice($event, 1)[0];
    this.productosComprados.push(prod);
  }
  onProductoNoSeleccionado($event:any){
        const prod = this.productosComprados.splice($event, 1)[0];
        this.productosSeleccionados.push(prod);
  }
}
