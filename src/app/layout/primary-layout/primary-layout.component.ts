import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';


@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrl: './primary-layout.component.scss',
  standalone: true,
  imports: [TabMenuModule]

})
export class PrimaryLayoutComponent implements OnInit{

  items: MenuItem[] | undefined;

  logo = "../../assets/logo.png";
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService) {
  }

  ngOnInit(){
    this.auth.isAuthenticated$.subscribe(authenticated => {
      this.setMenuItems(authenticated);
    });
  }

  setMenuItems(authenticated: boolean): void{
    if(authenticated){
      this.items =  [
        { label: 'Home', route: '/'},
        { label: 'Subjects', route: '/subjects'},
        { label: 'Create',  route: '/create'},
        { label: 'Profile', route: '/user'},
        { label: 'Flashcards', route: '/flashcards'},
        { label: 'Log Out', command: () => {
          this.auth.logout({
            logoutParams: {
              returnTo: this.document.location.origin
            }
          });
        }},
      ]
    }else{
      this.items = [
        { label: 'Home', route: '/'},
        { label: 'Subjects', route: '/subjects'},
        { label: 'Flashcards', route: '/flashcards'},
        { label: 'Log In', command: () => this.auth.loginWithRedirect()},
      ]
   }
  }

}
