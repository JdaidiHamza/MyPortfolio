import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from "./components/home/home";
import { Skills } from './components/skills/skills';
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Home, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
