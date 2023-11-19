import { animate, style, transition, trigger } from "@angular/animations";

export const clickTrigger = trigger('click', [
  transition('* <=> checked', [
    animate(100, style({
      'transform': 'scale(1.1)'
    })),
    animate(100, style({
      'transform': 'scale(1)'
    }))
  ]),
]);
