import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ListCardsComponent } from "../list-cards/list-cards.component";


@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [CommonModule, ListCardsComponent],
    providers: [DatePipe]

})
export class ProfileComponent {

  user:any;
  userPic: any;
  userUpdate: string | null = "";
  constructor(public auth: AuthService, private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile;
        this.userUpdate = this.datePipe.transform(this.user.updated_at, 'yyyy-MM-dd');
      }
    );
  }

  isGitHubUser(): boolean {
    this.userPic = this.user.picture;
    console.log(this.user)
    return this.user && this.user.sub.includes('github');
  }

  isGoogleUser(): boolean {
    this.userPic = this.user.picture;
    return this.user && this.user.sub.includes('google-oauth2');
  }

}
