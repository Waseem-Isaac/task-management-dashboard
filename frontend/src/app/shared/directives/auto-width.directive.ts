import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

/**
 * Automatically resizes an <input> to fit its content.
 * Creates and manages its own invisible mirror <span> — no template changes needed.
 *
 * Usage:
 *   <input appAutoWidth #autoWidth="appAutoWidth" />
 *
 * Programmatic trigger (e.g. from a signal effect):
 *   nameInput = viewChild(AutoWidthDirective);
 *   effect(() => this.nameInput()?.adjust(this.activeBoard()?.name));
 */
@Directive({
  selector: 'input[appAutoWidth]',
  standalone: true,
  exportAs: 'appAutoWidth',
  host: { '(input)': 'adjust()' },
})
export class AutoWidthDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLInputElement>);
  private mirror!: HTMLSpanElement;

  ngOnInit(): void {
    this.mirror = document.createElement('span');
    Object.assign(this.mirror.style, {
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      visibility: 'hidden',
      whiteSpace: 'pre',
    });
    document.body.appendChild(this.mirror);
    this.adjust();
  }

  ngOnDestroy(): void {
    this.mirror?.remove();
  }

  adjust(value?: string): void {
    const input = this.el.nativeElement;
    const styles = getComputedStyle(input);
    this.mirror.style.fontSize = styles.fontSize;
    this.mirror.style.fontFamily = styles.fontFamily;
    this.mirror.style.fontWeight = styles.fontWeight;
    this.mirror.style.letterSpacing = styles.letterSpacing;
    this.mirror.textContent = (value ?? input.value) || ' ';
    input.style.width = `${Math.max(80, this.mirror.offsetWidth)}px`;
  }
}
