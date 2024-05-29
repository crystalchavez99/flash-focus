import { Injectable } from '@angular/core';
// @ts-ignore
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private speech: any;

  constructor() {
    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      this.speech.init({
        volume: 1,
        lang: 'en-US',
        rate: 1,
        pitch: 1,
        voice: "Google UK English Male",
        splitSentences: true
      }).then((data: any) => {
        console.log('Speech is ready', data);
      }).catch((e: any) => {
        console.error('An error occurred while initializing: ', e);
      });
    }

  }


  speak(text: string): void {
    this.speech.speak({
      text,
      queue: false,
    }).then(() => {
      console.log('Success!');
    }).catch((e: any) => {
      console.error('An error occurred:', e);
    });
  }


}
