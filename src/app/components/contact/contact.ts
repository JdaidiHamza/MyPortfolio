import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';


// Define a type for our contact info cards
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string; // URL for the link (mailto:, https://, etc.)
}

// Animation for staggering in elements
const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('80ms', 
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ opacity: 1, transform: 'none' }))
      )
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  animations: [staggerAnimation]
})
export class Contact implements OnInit {
  
  contactForm!: FormGroup;
  
  contactDetails: ContactInfo[] = [
    { icon: 'pi pi-envelope', label: 'Email', value: 'jdaidihamza@gmail.com', href: 'mailto:jdaidihamza@gmail.com' },
    { icon: 'pi pi-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/hamza-jdaidi-cp2077', href: 'https://www.linkedin.com/in/hamza-jdaidi-cp2077/' },
    { icon: 'pi pi-github', label: 'GitHub', value: 'github.com/JdaidiHamza', href: 'https://github.com/JdaidiHamza' },
    { icon: 'pi pi-map-marker', label: 'Location', value: 'Fes,Morocco', href: 'https://maps.app.goo.gl/UXVzSU3i2gmNiZho6' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you would typically send the data to a backend service
      // For example: this.emailService.send(this.contactForm.value).subscribe(...)
      alert('Message sent successfully! (Check the console)');
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to display validation errors
      this.contactForm.markAllAsTouched();
    }
  }
}