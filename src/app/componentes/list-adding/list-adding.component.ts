import { Component, OnInit } from '@angular/core';
import { ConnectionService, Item } from '../../servicios/connection.service';

@Component({
  selector: 'app-list-adding',
  templateUrl: './list-adding.component.html',
  styleUrls: ['./list-adding.component.css']
})
export class ListAddingComponent implements OnInit {

  itemNew:Item =  {name:'', id:''};
  constructor(private _servicio:ConnectionService) { }

  ngOnInit(): void {
  }

  agregar() {
    this._servicio.anadirItem(this.itemNew);
    this.itemNew.name = '';
    this.itemNew.id = '';  
  }
}
