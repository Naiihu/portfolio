import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icons',
  imports: [],
  templateUrl: './svg-icons.html',
  styleUrl: './svg-icons.scss'
})
export class SvgIcons {
  @Input() name?: string;
}
