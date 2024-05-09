import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';


@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrl: './primary-layout.component.scss',
  standalone: true,
  imports: [TabMenuModule]

})
export class PrimaryLayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  logo = "../../assets/logo.png";


  ngOnInit() {
    this.items= [
      { label: 'Home', route: '/'},
      { label: 'Subjects', route: '/subjects'},
      { label: 'Create',  route: '/create'},
      { label: 'Log In', route: '/login'},
      { label: 'Sign Up', route: '/signup'}
    ]
  }
}
