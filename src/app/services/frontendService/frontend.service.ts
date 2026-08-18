import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
  private readonly document: Document | null = null;

  constructor() {
    this.document = inject(DOCUMENT);
  }

  public getDocument(): Document | null {
    return this.document;
  }

  public getWindow(): Window | null {
    return this.document?.defaultView ?? null;
  }

  public getLocation(): Location | null {
    return this.document?.location ?? null;
  }
}
