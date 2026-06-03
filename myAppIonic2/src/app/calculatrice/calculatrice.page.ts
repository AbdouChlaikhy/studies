import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  ]
})

export class CalculatricePage {

  result: string = '';

  press(value: any) {

    // Clear
    if (value === 'C') {
      this.result = '';
    }

    // Calculate
    else if (value === '=') {

      try {
        this.result = eval(this.result).toString();
      }

      catch (error) {
        this.result = 'Error';
      }

    }

    // Add numbers/operators
    else {
      this.result += value;
    }

  }

}