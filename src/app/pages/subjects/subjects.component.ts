import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { SubjectsService } from 'src/app/shared/services/subjects.service';
import { RouterLink } from '@angular/router';
import { FlashcardService } from 'src/app/shared/services/flashcard.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  public auth = inject(AuthService);

  isAuthenticated: boolean = false;

  userId: string = "";

  subjects: any[] | null | undefined;

  constructor(private router: Router, private loadingService: LoadingService, private subjectService: SubjectsService){
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
        this.listSubjects();
        this.loadingService.hide();
      }
    });
  }

  listSubjects(){
    this.subjectService.getSubjects().then(subjects =>{
      this.subjects = subjects;
    })
  }


}
