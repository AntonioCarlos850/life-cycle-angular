import { animate, state, style, transition, trigger } from "@angular/animations";

export const deleteTrigger = trigger('delete', [
  transition(':leave', [
    animate('150ms', style({
      opacity: 0
    }))
  ])
])

export const createTrigger = trigger('create', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('200ms', style({
      opacity: 1
    }))
  ])
])
