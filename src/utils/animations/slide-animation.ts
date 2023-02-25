import {
    animate,
    AnimationTriggerMetadata,
    group,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

/** Time and timing curve for expansion panel animations. */
export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

/** Animations used by the Material expansion panel. */
export const slider: AnimationTriggerMetadata = trigger('slider', [
    state('true', style({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    state('false', style({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    transition('* => *', animate('200ms ease-in'))
]);

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ])])
    ]),
]
