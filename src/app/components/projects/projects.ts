import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';



// Define interfaces for strong typing
interface Technology {
  name: string;
  icon: string; // PrimeIcon class name
}

interface Project {
  category: 'web' | 'mobile';
  imageUrl: string;
  title: string;
  date: string;
  descriptionPoints: string[];
  technologies: Technology[];
  projectUrl?: string; // Optional link for the button
}

// Animation for the project cards grid
const listAnimation = trigger('listAnimation', [
  transition('* => *', [ // Animate on any state change
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', 
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ opacity: 1, transform: 'none' }))
      )
    ], { optional: true }),
    query(':leave', [
      animate('200ms ease-out', style({ opacity: 0, transform: 'scale(0.95)' }))
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  animations: [listAnimation]
})
export class Projects implements OnInit{
  ngOnInit(): void {
    this.allProjects=[
    {
      category: 'web',
      imageUrl: '/assests/RemoteSync.PNG', // Image: Laptop with dashboard
      title: 'Web Application for Hybrid Presence Management',
      date: 'Feb 2025 - Present',
      descriptionPoints: [
        'Contributed to the full development cycle of a web application managing hybrid presence for over 2000 employees.',
        'Implemented WebSockets for real-time synchronization, reducing planning conflicts by 80%.',
        'Implemented JWT for secure authentication management'
      ],
      technologies: [
        { name: 'Angular', icon: 'pi pi-prime' }, // Using pi-prime for Angular
        { name: 'Spring Boot', icon: 'pi pi-cloud' },
        { name: 'MySQL', icon: 'pi pi-database' },
        { name: 'Docker', icon: 'pi pi-box' }
      ]
    },
    {
      category: 'web',
      imageUrl: '/assests/saintex.PNG', // Image: People collaborating on laptop
      title: 'Horse Box Reservation Web Application',
      date: 'June 2024 - Aug 2024',
      descriptionPoints: [
        'Developed a web application for managing horse box reservations.',
        'Integrated Stripe for secure payment management, reducing manual processing time by 80%.',
        'Automated Invoice sending via cron jobs, ensuring an estimated administrative time saving of 3h/week.'
      ],
      technologies: [
        { name: 'SvelteKit', icon: 'pi pi-code' },
        { name: 'PostgreSQL', icon: 'pi pi-database' },
        { name: 'Supabase', icon: 'pi pi-bolt' },
        { name: 'Vercel', icon: 'pi pi-cloud-upload' },
        { name: 'Jira', icon: 'pi pi-check-square' },
        { name: 'Stripe', icon: 'pi pi-credit-card' }
      ]
    },
    {
      category: 'mobile',
      imageUrl: '/assests/stasys.png', // Image: Mobile phone screen
      title: 'Mobile Applications for Service Station ',
      date: 'June 2023 - Sept 2023',
      descriptionPoints: [
        'Developed mobile applications for service station .',
        'Led the development of Android native application.',
        'Implemented invoice automation system'
      ],
      technologies: [
        { name: 'Android', icon: 'pi pi-android' },
        { name: 'Java', icon: '' },
        { name: 'MySQL', icon: 'pi pi-database' },
        { name: 'XML', icon: '' },
        { name: 'PHP', icon: '' }
      ]
    },
     {
      category: 'mobile',
      imageUrl: '/assests/tls_cargo.PNG', // Image: Mobile phone screen
      title: 'Mobile Applications for freight Transport Management',
      date: 'June 2023 - Sept 2023',
      descriptionPoints: [
        'Developed mobile applications for  freight transport management.',
        'Led the development of Flutter cross-platform application.',
        'Implemented real-time tracking system for freight vehicles.'
      ],
      technologies: [
        { name: 'Android', icon: 'pi pi-android' },
        { name: 'Flutter', icon: 'pi pi-mobile' },
        { name: 'MySQL', icon: 'pi pi-database' },
         { name: 'Dart', icon: '' },
          { name: 'PHP', icon: '' }
      ]

    }
  ];
    this.filteredProjects = [...this.allProjects];
    console.log(this.filteredProjects)
    console.log(this.selectedCategory)
  }
  
  selectedCategory: 'all' | 'web' | 'mobile' = 'all';
  
  allProjects: Project[] = []
  filteredProjects: Project[] = [];

  filterProjects(category: 'all' | 'web' | 'mobile'): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.category === category);
    }
  }
}