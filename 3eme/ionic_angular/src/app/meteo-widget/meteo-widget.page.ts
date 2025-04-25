import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-widget',
  templateUrl: './meteo-widget.page.html',
  styleUrls: ['./meteo-widget.page.scss'],
})
export class MeteoWidgetPage implements OnInit {

  cityName: string = '';
  pays: any;
  temp: any;
  pres: any;
  hum: any;
  weatherData: any;

  constructor(private httpclient: HttpClient) {}

  ngOnInit() {
  
    this.getWeatherData('Casablanca');
  }

  // Method to fetch weather data based on the provided city name
  getWeatherData(city: string) {
    this.httpclient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97cd94eb992b64137834fe645880f9f4&units=metric`)
      .subscribe(
        (response) => {
          this.weatherData = response;
          console.log(this.weatherData);
          this.pays = this.weatherData['sys']['country'];
          this.temp = this.weatherData['main']['temp'];
          this.pres = this.weatherData['main']['pressure'];
          this.hum = this.weatherData['main']['humidity'];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  searchCity() {
    if (this.cityName.trim() !== '') {
      this.getWeatherData(this.cityName.trim());
    }
  }
}
