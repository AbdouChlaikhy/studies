import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonBackButton, IonItem, IonLabel, IonInput, IonButton, IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, HttpClientModule, IonContent, IonHeader, 
    IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, 
    IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonText
  ]
})

export class WeatherPage implements OnInit {
  city: string = '';
  weatherData: any;
  apiKey: string = '4ab0e3dc46c4b0e098b1caf64afc5772'; // Dir l-Key dyalk hna

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getWeather() {
    if (this.city.trim() === '') return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=fr`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      error: (err) => {
        console.error('City not found', err);
        alert('Madina ma-lqinach, t-akked men l-smiya!');
      }
    });
  }
  getFlagUrl(): string {

  const cityName = this.weatherData?.name?.toLowerCase();

  // Force Moroccan flag for Dakhla
  if (cityName === 'dakhla') {
    return 'https://flagsapi.com/MA/flat/64.png';
  }

  // Default country flag
  return `https://flagsapi.com/${this.weatherData.sys.country}/flat/64.png`;
}
}