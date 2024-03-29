import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        TranslateModule,
        RouterModule.forChild([
            {
                path: '',
                component: PageNotFoundComponent,
            }
        ])
    ],
    providers: [

    ]
})
export class PageNotFoundModule { }
