import { trigger, state, style, transition, animate } from '@angular/animations';

export function slideInOut() {
  return trigger('slideInOut', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0px)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-300px)'
      }),
      animate(350)
    ]),
    transition('* => void', [
      animate(250, style({
        transform: 'translateX(300px)'
      }))
    ])
  ]);
}

export function fadeInOut() {
  return trigger('fadeInOut', [
    state('in', style({opacity: 1 })),
    transition('void => *', [
      style({ opacity: 0 }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({opacity: 0}))
    ])
  ]);
}
