import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hello {{ name }}!</h2>`,
  styles: [
    `
      h2 {
        text-transform: uppercase;
      }
    `,
  ],
})
export class HelloComponent {
  @Input() name?: string;
}
