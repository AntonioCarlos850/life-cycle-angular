import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges {
  @Input() item: Item = {
    nome: '',
    data: '',
    comprado: false
  };

  name: string = '';

  isEditing: boolean = false;
  constructor(private service: ListaDeCompraService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'].currentValue?.id) {
      this.name = this.item.nome;
      this.isEditing = true;
    }
  }

  edit() {
    this.item.nome = this.name;
    this.service.editItem(Number(this.item.id), this.item);
    this.clear();
  }

  clear() {
    this.name = '';
    this.isEditing = false;
  }

  create() {
    this.service.createItem(this.name);
    this.clear();
  }
}
