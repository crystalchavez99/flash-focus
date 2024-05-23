import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ImageModule, ButtonModule, CardModule, CommonModule]
})
export class HomeComponent {

  isAuthenticated = false;

  constructor(private auth: AuthService){}
  ngOnInit(){
    this.auth.isAuthenticated$.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }
}
