import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, 
  IonTitle, IonContent, IonText, IonButton, IonIcon, IonCard, IonImg 
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonHeader, IonToolbar, IonButtons, IonBackButton, 
    IonTitle, IonContent, IonText, IonButton, IonIcon, IonCard, IonImg
  ]
})
export class CameraPage {
  capturedImage: string | undefined;
  capturedVideo: string | undefined;

  constructor() {}

  // Existing photo function
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      this.capturedImage = image.webPath;
      this.capturedVideo = undefined; // Hide video player when image is taken
    } catch (err) {
      console.log('User cancelled or camera error', err);
    }
  }

  // NEW: Simple video handler
  onVideoRecorded(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for the video file to play it in the <video> tag
      this.capturedVideo = URL.createObjectURL(file);
      this.capturedImage = undefined; // Hide image preview while recording video
    }
  }
}