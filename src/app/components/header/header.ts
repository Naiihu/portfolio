import { Component } from '@angular/core';
import { SvgLogo } from './components/svg-logo/svg-logo';
import { SvgIcons } from '../svg-icons/svg-icons';

@Component({
  selector: 'app-header',
  imports: [
    SvgLogo,
    SvgIcons
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  protected largeLogo: boolean = false;

  public toggleLargeLogo(): void {
    this.largeLogo = !this.largeLogo;
  }

  public scrollToTop(): void {
    document.querySelector('main section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
