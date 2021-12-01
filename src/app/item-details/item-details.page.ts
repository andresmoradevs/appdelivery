import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc, docData, getDoc } from '@angular/fire/firestore';
import { firebaseApp$ } from '@angular/fire/app';
import { DataService, Product } from '../data.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage{

  productId: string;
  productNombre: string;
  productPrecio: string;
  productDescripcion: string;
  productImagen1: string;
  productImagen2: string;
  productImagen3: string;

  @Input() id: Product;
  products = [];
  productSelected;
  data: any;
  product: Product = null;

  cartText: string;

  constructor(
    public nav: NavController,
    private firestore: Firestore,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = sessionStorage.getItem('productId');
    this.productNombre = sessionStorage.getItem('productNombre');
    this.productPrecio = sessionStorage.getItem('productPrecio');
    this.productDescripcion = sessionStorage.getItem('productDescripcion');
    this.productImagen1 = sessionStorage.getItem('productImagen1');
    this.productImagen2 = sessionStorage.getItem('productImagen2');
    this.productImagen3 = sessionStorage.getItem('productImagen3');



  }
  addToCart(id, nombre, precio, descripcion, imagen1, imagen2, imagen3) {

  }
}
