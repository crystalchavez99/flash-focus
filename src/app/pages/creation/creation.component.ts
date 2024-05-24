import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Flashcard } from 'src/app/shared/flashcard';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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




  constructor(private flashcardService: FlashcardService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(){
    this.auth.user$.subscribe(user => {
      if (user) {
        if(user.sub) this.userId = user.sub;
      }
    });
  }

  // createFormGroup(){
  //   this.flashcardForm = this.fb.group({
  //     question: [this.flashcard.question, Validators.required],
  //     answer: [this.flashcard.answer, Validators.required]
  //   })
  // }

  // flashcardFormSubmit(){

  //   if (this.flashcardForm.invalid) {
  //     this.errorMessage = 'Please fill in all fields';
  //     return;
  //   }

  //   const formValue = this.flashcardForm.value;
  //   this.flashcard.userId = this.userId;
  //   this.flashcard.question = formValue.question;
  //   this.flashcard.answer = formValue.answer;

  //   if (this.flashcard.id) {
  //     this.flashcardService.updateFlashCard(this.flashcard).then(
  //       () => this.formSubmit.emit(),
  //       error => this.errorHandler(error)
  //     );
  //   } else {
  //     this.flashcardService.addFlashCard(this.flashcard).then(
  //       () => this.formSubmit.emit(),
  //       error => this.errorHandler(error)
  //     );
  //   }
  //   this.router.navigate(['/flashcards'])
  // }

  flashcardForm(){
    this.flashcard.userId = this.userId;
    if(this.flashcard.id){
      this.flashcardService.updateFlashCard(this.flashcard).then(() => this.formSubmit.emit(), error => console.log(`error`, error))
    }else{
      this.flashcardService.addFlashCard(this.flashcard)
      .then(() => {
        console.log(`emit`)
        this.formSubmit.emit();
      })
      .catch(error => {
        console.log('error', error);
      });
    }
    this.router.navigate(['/flashcards'])
  }

  // errorHandler(error: any){
  //   this.errorMessage = "An error occurred while handling the flashcard.";
  //   console.error('Error saving flashcard:', error);
  //   console.log(this.errorMessage)
  // }
}
