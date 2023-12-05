import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const enterAnimation = trigger('enterAnimation', [
  transition('* => *',[
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      stagger(200, [
        animate('400ms ease-in',keyframes([
            style({
              opacity: 1,
              offset: 0.4,
              transform: 'translateX(15%)',
            }),
            style({
              offset: 1,
              transform: 'translateX(0)',
            }),
          ])
        )
      ]),
    ], {optional: true})
  ]),
]);
