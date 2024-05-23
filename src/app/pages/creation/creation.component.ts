import { Component } from '@angular/core';
import { Flashcard } from 'src/app/shared/flashcard';
@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent {
  flashcard: Flashcard = {
    question: '', answer: '',
  };

  constructor() {}
}
