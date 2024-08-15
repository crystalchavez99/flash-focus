import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { SubjectsService } from 'src/app/shared/services/subjects.service';
import { TextToSpeechService } from 'src/app/shared/services/text-to-speech.service';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {
  public auth = inject(AuthService);

  isAuthenticated: boolean = false;

  userId: string = "";

  flashcards:any[] | null | undefined;

  constructor(private router: Router, private loadingService: LoadingService, private flashcardService: FlashcardService, private textspeech: TextToSpeechService){
    this.loadingService.show();
    this.auth.isAuthenticated$.subscribe(authenitcate =>{
      this.isAuthenticated = authenitcate;
    })
  }

  ngOnInit(){
    this.loadingService.show();
    this.auth.user$.subscribe(user => {
      if (user) {
        if(user.sub) this.userId = user.sub;
        this.listCards();
        this.loadingService.hide();
      }
    });
  }

  listCards(){
    this.flashcardService.getFlashCardsBySubjectId(1).then(flashcards =>{
      this.flashcards = flashcards;
      console.log(flashcards)
    })
  }

  speak(text: string, event: MouseEvent){
    event.stopPropagation();
     if(text){
       this.textspeech.speak(text)
     }
   }

   toggleFlip(i: number) {
     if(this.flashcards) {
       this.flashcards[i].isFlipped = !this.flashcards[i].isFlipped;
     }

   }
}
