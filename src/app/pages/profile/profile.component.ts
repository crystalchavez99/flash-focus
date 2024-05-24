import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user:any;
  userPic: any;
  constructor(public auth: AuthService) {console.log(auth.user$)}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.user = profile)
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
