import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name:string; id:string}

@Injectable({ 
  providedIn: 'root'
})
export class ConnectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items:Observable<Item[]>; 
  
  private itemDoc: AngularFirestoreDocument<Item> | undefined; 
  
  constructor(private afs:AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items'); // 'items' es el nombre de la coleccion en Firebase
    
    // this.items = this.itemsCollection.valueChanges();  // sin obtener id
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {   // obtiene los id 
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return { ...data };
      });
    })); 
  }

  listaItem () {
    return this.items;
  } 

  anadirItem(item: Item) {
    this.itemsCollection.add(item);
  }

  borrarItem(item: Item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item: Item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
