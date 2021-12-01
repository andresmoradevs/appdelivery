import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Product {
  id: string;
  nombre: string;
  precio: string;
  imagen: any;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productsrtDb: Observable<any[]>;

  constructor(
    private firestore: Firestore) { }

    getProducts(): Observable<Product[]> {
      const productRef = collection(this.firestore,'productos');
      return collectionData(productRef, { idField: 'id'}) as Observable<Product[]>;
    }

    getProductById(id) {
      const productDocRef = doc(this.firestore, `productos/${id}`);
      return docData(productDocRef, { idField: 'id' }) as Observable<Product>;
    }

    addProduct(product: Product) {
      const productRef = collection(this.firestore,'productos');
      return addDoc(productRef, product)
    }

    deleteProduct(product: Product) {
      const productDocRef = doc(this.firestore, `productos/${product.id}`);
      return deleteDoc(productDocRef)
    }
    updateProduct(product: Product) {
      const productDocRef = doc(this.firestore, `productos/${product.id}`);
      return updateDoc(productDocRef, { nombre: product.nombre, precio: product.precio, imagen: product.imagen, descripcion: product.descripcion })

    }


}
