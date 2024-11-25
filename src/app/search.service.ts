import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  toast = signal<boolean>(false);

  constructor() { }


  setToast(value: boolean) {
    this.toast.set(value);
  }
}
