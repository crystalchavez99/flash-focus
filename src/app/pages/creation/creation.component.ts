import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Flashcard } from 'src/app/shared/flashcard';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';
@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [ButtonModule, FormsModule],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent {
  @Input() flashcard: Flashcard = { question: '', answer: '' };
  @Output() formSubmit = new EventEmitter<Flashcard>();
  constructor(private flashcardService: FlashcardService) {}

  flashcardForm(){
    console.log(`submit!`)
    if(this.flashcard.id){
      this.flashcardService.updateFlashCard(this.flashcard).then(() => this.formSubmit.emit())
    }else{
      this.flashcardService.addFlashCard(this.flashcard).then(() => this.formSubmit.emit())
    }

  }
}
