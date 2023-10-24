import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private purchaseList: Item[] = [];

  constructor() {
    this.purchaseList = JSON.parse(localStorage.getItem('items') ?? '[]')
  }

  updateLocalStorage(): void {
    localStorage.setItem('items', JSON.stringify(this.purchaseList));
  }

  getPurchaseList() {
    return this.purchaseList;
  }

  createItem(name: string) {
    const lastId = this.purchaseList.length ? this.purchaseList[this.purchaseList.length - 1].id : 0;
    this.purchaseList.push({
      id: Number(lastId) + 1,
      nome: name,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    });
  }

  editItem(id: number, data: Item) {
    const index = this.purchaseList.findIndex((x) => x.id == id);
    this.purchaseList.splice(index, 1, data);
  }

  deleteItem(id: number | string) {
    const index = this.purchaseList.findIndex(x => x.id == id);
    this.purchaseList.splice(index, 1);
  }
}
