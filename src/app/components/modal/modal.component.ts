import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  public title: string = "";
  @Input()
  public text: string = "";
  @Input()
  public buttonText: string = "";

  @Input()
  public hidden: boolean = true;
  @Input()
  public functionToOkButtonModal: Function | undefined;
  @Input()
  public functionToCloseModal: Function = () => { };

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
    if (this.hidden != false && event.key === 'Escape')
      this.closeModal()
  }

  okButton(): void {
    this.hidden = true;

    if (this.functionToOkButtonModal !== undefined)
      this.functionToOkButtonModal();
  }

  closeModal(): void {
    this.hidden = true;
    this.functionToCloseModal();
  }
}
