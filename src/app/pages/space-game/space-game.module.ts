import { NgModule } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SpaceGameComponent } from './space-game.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ModalComponent,
        SpaceGameComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild([
            {
                path: '',
                component: SpaceGameComponent,
            }
        ])
    ],
    providers: []
})
export class SpaceGameModule { }
