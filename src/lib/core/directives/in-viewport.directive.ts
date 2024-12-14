import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { InViewportService } from '../services/in-viewport.service';

@Directive({
  selector: '[r-in-viewport]',
})
export class InViewportDirective implements OnInit, OnDestroy {
  inViewportId = input.required<string>();
  inViewportInitialVisibility = input<boolean>(false);
  el = inject(ElementRef);
  inViewportService = inject(InViewportService);

  ngOnInit(): void {
    this.initializeRegistration();
  }

  ngOnDestroy(): void {
    this.inViewportService.unregisterElement(this.inViewportId());
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
