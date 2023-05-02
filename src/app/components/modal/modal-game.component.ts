import { Component, Input, OnChanges } from '@angular/core';
import { ModalComponent } from './modal.component';
import { GameModel } from 'src/models/game.model';

@Component({
    selector: 'modal-game',
    templateUrl: './modal-game.component.html',
    styleUrls: ['./modal-game.component.scss']
})
export class ModalGameComponent extends ModalComponent implements OnChanges {
    @Input()
    public game: GameModel | undefined;

    ngOnChanges() {
        if (this.hidden) {
            this.title = this.game!.title;
            this.text = "games." + this.game!.text;
        }
    }
}
