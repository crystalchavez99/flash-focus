import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { TextToSpeechService } from 'src/app/shared/services/text-to-speech.service';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class ListCardsComponent implements OnInit{

  public auth = inject(AuthService);

  isAuthenticated: boolean = false;

  userId: string = "";

  flashcards: any[] | null | undefined;

  isFlipped = false;

  constructor(private flashcardService: FlashcardService, private router: Router, private loadingService: LoadingService, private textspeech: TextToSpeechService){
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
        this.loadFlashcards();
        this.loadingService.hide();
      }
    });

  }

  loadFlashcards(){
    this.flashcardService.getFlashcards(this.userId).then(flashcards =>{
      this.flashcards = flashcards;
    })
    this.flashcards?.map(fc => fc.isFlipped = false)
  }

  deleteFlashcard(id: string){
    this.flashcardService.deleteFlashCard(id).then(() =>{
      this.flashcards = this.flashcards?.filter(f => f.id !== id);
    })
  }

  editFlashcard(){
    this.router.navigate(['/create'])
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
