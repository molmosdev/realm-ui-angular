import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
import { InViewportService } from '../services/in-viewport.service';

@Directive({
  selector: '[r-in-viewport]',
})
export class InViewportDirective implements OnInit {
  inViewportId = input.required<string>();
  inViewportInitialVisibility = input<boolean>(false);
  el = inject(ElementRef);
  inViewportService = inject(InViewportService);

  ngOnInit(): void {
    this.initializeRegistration();
  }

  /**
   * Initialize the registration of the element with the InViewportService.
   */
  initializeRegistration(): void {
    this.inViewportService.registerElement(
      this.inViewportId(),
      this.el.nativeElement,
      this.inViewportInitialVisibility()
    );
  }
}
