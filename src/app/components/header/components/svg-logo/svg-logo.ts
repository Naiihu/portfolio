import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[fullname-logo]',
  imports: [
    NgClass
  ],
  styleUrl: './svg-logo.scss',
  templateUrl: './name.svg',
  standalone: true
})
export class SvgLogo {
  @Input() public largeLogo: boolean = false;
}
