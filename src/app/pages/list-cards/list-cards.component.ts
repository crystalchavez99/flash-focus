import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';

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

  constructor(private flashcardService: FlashcardService, private router: Router){
    this.auth.isAuthenticated$.subscribe(authenitcate =>{
      this.isAuthenticated = authenitcate;
    })
  }

  ngOnInit(){
    this.auth.user$.subscribe(user => {
      if (user) {
        if(user.sub) this.userId = user.sub;
        this.loadFlashcards();
      }
    });
    console.log(this.flashcards)

  }

  loadFlashcards(){
    this.flashcardService.getFlashcards(this.userId).then(flashcards =>{
      console.log(flashcards)
      this.flashcards = flashcards;
    })
  }

  deleteFlashcard(id: string){
    this.flashcardService.deleteFlashCard(id).then(() =>{
      this.flashcards = this.flashcards?.filter(f => f.id !== id);
    })
  }

  editFlashcard(){
    this.router.navigate(['/create'])
  }

}
