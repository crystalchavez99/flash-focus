import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Flashcard } from 'src/app/shared/flashcard';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent implements OnInit{

  flashcards: any[] | null | undefined= [];

  constructor(private flashcardService: FlashcardService, private router: Router){}

  ngOnInit(){
    this.flashcardService.getFlashcards().then(flashcards =>{
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
