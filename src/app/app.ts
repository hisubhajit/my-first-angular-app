import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './appHeader';
import { Initial } from './initial/initial';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Initial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
