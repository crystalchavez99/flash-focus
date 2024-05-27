import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent {

  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}

}
