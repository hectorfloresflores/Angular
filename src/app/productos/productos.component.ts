import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  message = "";
  show = false;
  arrayProducts = [];
  moreThanThree = false;
  existence = false;
  constructor() {
    this.productos = [new Product(1,"Smartphone","LG","Quadcore 3GHZ", 12018.5,5),
                      new Product(10,"Smartwatch", "Sony", "3GB Ram", 4999.9,0 ),
                      new Product(30,"SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9,3)]
  }
  productos: Product[];
  ngOnInit() {
  }

  inputChanging(event) {

    if (event.length < 1) {
      this.show = false;
    } else{
      this.show = true;
    }
  }

  search(): void {
    this.arrayProducts = this.productos.filter(o => {
      if (o.nombre.toUpperCase().includes(this.message.toUpperCase()) ||
      o.descripcion.toUpperCase().includes(this.message.toUpperCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

  checkOrder(isChecked): void {
    this.arrayProducts.sort((a: any, b: any) => {
     return  isChecked === false ? b.precio - a.precio : a.precio - b.precio;
    });
  }

  checkExistance(isChecked): void {
    if (isChecked === true) {
      this.existence = true;
    } else {
      this.existence = false;
    }

    this.arrayProducts.map((a: any, b: any) => {
      return  isChecked === false ? b.precio - a.precio : a.precio - b.precio;
     });
  }

  checkGreatherThanThree(isChecked): void {
    this.moreThanThree = true;
  }

}
