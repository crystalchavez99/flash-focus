import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ListCardsComponent } from "../list-cards/list-cards.component";
import { LoadingService } from 'src/app/shared/services/loading.service';
import { LoadingScreenComponent } from "../../layout/loading-screen/loading-screen/loading-screen.component";


@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    providers: [DatePipe],
    imports: [CommonModule, ListCardsComponent, LoadingScreenComponent]
})
export class ProfileComponent {

  user:any;
  userPic: any;
  userUpdate: string | null = "";
  constructor(public auth: AuthService, private datePipe: DatePipe, private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadingService.show();
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile;
        this.userUpdate = this.datePipe.transform(this.user.updated_at, 'yyyy-MM-dd');
        this.loadingService.hide();
      },
      (error) => {
        console.error(error);
        this.loadingService.hide();
      }
    );
  }

  isGitHubUser(): boolean {
    this.userPic = this.user.picture;
    return this.user && this.user.sub.includes('github');
  }

  isGoogleUser(): boolean {
    this.userPic = this.user.picture;
    return this.user && this.user.sub.includes('google-oauth2');
  }

}
