import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrl: './primary-layout.component.scss',
})
export class PrimaryLayoutComponent implements OnInit {
  items: MenuItem[] | undefined = [
    // { label: '', icon: '../../assets/logo.png'},
    { label: 'Home', url: "" },
    {
      label: 'Subjects', expanded: true,
      // items: [
      //   { label: 'Submenu Item 1' },
      //   { label: 'Submenu Item 2' },
      //   { label: 'Submenu Item 3' }
      // ]
    },
    { label: 'Create' },
    { label: 'Log In', },
    { label: 'Sign Up' }
  ]

  logo = "../../assets/logo.png";
  ngOnInit(): void {
    console.log(`init`)
  }
}
