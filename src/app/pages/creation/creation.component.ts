import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Flashcard } from 'src/app/shared/flashcard';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/shared/services/loading.service';
@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextareaModule, CardModule, ReactiveFormsModule, CommonModule],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent implements OnInit{

  public auth = inject(AuthService);

  @Input() flashcard: Flashcard = { question: '', answer: '', userId: '' };

  @Output() formSubmit = new EventEmitter<Flashcard>();

  userId:string = "";

  constructor(private flashcardService: FlashcardService, private router: Router, private loadingService: LoadingService) {}

  ngOnInit(){
    this.auth.user$.subscribe(user => {
      if (user) {
        if(user.sub) this.userId = user.sub;
      }
    });
  }

  flashcardForm(){
    this.flashcard.userId = this.userId;
    if(this.flashcard.id){
      this.flashcardService.updateFlashCard(this.flashcard).then(() => this.formSubmit.emit(), error => console.log(`error`, error))
    }else{
      this.flashcardService.addFlashCard(this.flashcard)
      .then(() => {
        this.formSubmit.emit();
        this.router.navigate(['/user'])
      })
      .catch(error => {
      });
    }

  }

}
