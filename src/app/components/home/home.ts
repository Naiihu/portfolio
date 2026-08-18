import { Component } from '@angular/core';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-home',
  imports: [
    ThemeSwitcher
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
