import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';
import { createTrigger, deleteTrigger } from './animations/crud';
import { enterAnimation } from './animations/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    deleteTrigger,
    createTrigger,
    enterAnimation
  ]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  purchaseList! : Array<Item>;
  editingItem!: Item;

  constructor(private service: ListaDeCompraService) { }

  ngDoCheck(): void {
    this.service.updateLocalStorage();
  }

  ngOnInit(): void {
    this.purchaseList = this.service.getPurchaseList()
  }

  editItem(item: Item) {
    this.editingItem = item;
  }
}
