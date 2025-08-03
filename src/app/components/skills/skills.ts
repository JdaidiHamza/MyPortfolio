import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCard } from "../ui/skill-card/skill-card";




@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCard], // Import our directive
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
 
}