import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger,  style, transition, animate, query, stagger } from '@angular/animations';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

// Animation for a staggered fade-in/slide-up effect
const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(
          '100ms',
          animate(
            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          )
        )
      ],
      { optional: true }
    )
  ])
]);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
