import { Component, EventEmitter, Output } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
})
export class SpeechComponent {

  @Output() search = new EventEmitter<string>();

  constructor(
    public speechRecognition: SpeechRecognition
  ) { }

  private getPermission(): void {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  public startListening(): void {
    this.getPermission();
    this.speechRecognition.startListening().subscribe(query => {
      this.search.emit(query[0].toLowerCase());
    });
  }
}
