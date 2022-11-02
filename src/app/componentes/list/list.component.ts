import { Component, OnInit } from '@angular/core';
import { ConnectionService, Item } from '../../servicios/connection.service';

import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faTrash1 = faTrash;
  faPencil1 = faPencil;

  items: any;
  editarItem: Item = {name:'', id:''};

  constructor( private conexion:ConnectionService ) { 
    this.conexion.listaItem().subscribe(itemQ => {
      this.items = itemQ;
      console.log(this.items);
    })
  }
  ngOnInit(): void {
  }

  borrar(item:Item){
    this.conexion.borrarItem(item);
  } 

  editar(item:Item){
    this.editarItem = {...item};  
  }

  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem);
  }
}
