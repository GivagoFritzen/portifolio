import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { GamesComponent } from 'src/app/components/games/games.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { WhoComponent } from 'src/app/components/who/who.component';
import { PageHomeComponent } from './page-home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PageHomeComponent,
        GamesComponent,
        SkillsComponent,
        WhoComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        NguCarouselModule,
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
