import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { clickTrigger } from 'src/app/animations/input';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    clickTrigger
  ]
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() isEditing = new EventEmitter<Item>();
  faPen = faPen;
  faTrash = faTrash

  constructor(private service: ListaDeCompraService) { }

  deleteItem() {
    this.service.deleteItem(this.item.id!);
  }

  editItem() {
    this.isEditing.emit(this.item);
  }

  checkItem() {
    this.item.comprado = !this.item.comprado;
    this.service.editItem(Number(this.item.id), this.item);
  }
}
