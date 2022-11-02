import { Component } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseCurso';

  items: Observable<any[]>;
  constructor(db: Firestore) {
    const collect = collection(db, 'items');
    this.items = collectionData(collect);
  }
}
