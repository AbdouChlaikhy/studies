import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
  IonSearchbar, IonGrid, IonRow, IonCol, IonText, IonCard, IonImg, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonItem, IonLabel, IonList, IonInput, IonToggle, IonCheckbox, 
  IonRange, IonSelect, IonSelectOption, IonButton, IonChip, IonIcon, 
  IonBadge, IonAvatar, IonListHeader, IonInfiniteScroll, 
  IonInfiniteScrollContent, IonFab, IonFabButton, AlertController 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, add, alertCircleOutline, playCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.page.html',
  styleUrls: ['./ui.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonBackButton, IonSearchbar, IonGrid, IonRow, IonCol, 
    IonText, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonItem, IonLabel, IonList, IonInput, IonToggle, 
    IonCheckbox, IonRange, IonSelect, IonSelectOption, IonButton, 
    IonChip, IonIcon, IonBadge, IonAvatar, IonListHeader, 
    IonInfiniteScroll, IonInfiniteScrollContent, IonFab, IonFabButton
  ]
})
export class UIPage implements OnInit {
  items: number[] = [];
  isDarkMode: boolean = false;

  // L-AlertController dkhlnaah hna f l-constructor
  constructor(private alertController: AlertController) {
    addIcons({ person, add, alertCircleOutline, playCircleOutline });
  }

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('ion-palette-dark');
    for (let i = 1; i <= 10; i++) { this.items.push(i); }
  }

  toggleDarkMode(ev: any) {
    this.isDarkMode = ev.detail.checked;
    document.body.classList.toggle('ion-palette-dark', this.isDarkMode);
  }

  // Fonction dyal l-Alert kheddama 100%
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert dyal Zakaria',
      subHeader: 'SDDI4 Project',
      message: 'Video t-beddel u Dark Mode kheddam nady!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  onIonInfinite(ev: any) {
    setTimeout(() => {
      const lastItem = this.items[this.items.length - 1];
      for (let i = 1; i <= 5; i++) { this.items.push(lastItem + i); }
      ev.target.complete();
    }, 1000);
  }
}