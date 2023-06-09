import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { WhoComponent } from 'src/app/components/who/who.component';
import { PageHomeComponent } from './page-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalGameComponent } from 'src/app/components/modal/modal-game.component';

@NgModule({
    declarations: [
        ModalGameComponent,
        PageHomeComponent,
        CarouselComponent,
        SkillsComponent,
        WhoComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild([
            {
                path: '',
                component: PageHomeComponent,
            }
        ])
    ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
})
export class PageHomeModule { }
