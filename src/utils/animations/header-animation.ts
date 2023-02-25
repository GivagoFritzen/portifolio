import {
    animate,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const HeaderAnimation: AnimationTriggerMetadata = trigger('navUp', [
    state('up', style({
        'top': '0'
    })),
    state('down', style({
        'top': '-65px'
    })),
    transition('* => *', animate('350ms ease-in'))
]);