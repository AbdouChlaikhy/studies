import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result = '';

  constructor(private router:Router) {}

  goToMw(): void{
    this.router.navigate(['meteo-widget'])
  }

  append(element: string) {
    this.result += element;
  }

  clear() { 
    this.result = '';
  }
  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Erreur';
    }
  }
}
