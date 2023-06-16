import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  public title = "";
  @Input()
  public text = "";
  @Input()
  public buttonText = "";

  @Input()
  public show = false;
  @Input()
  public functionToOkButtonModal: Function | undefined;
  @Input()
  public functionToCloseModal: Function | undefined;

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
    if (this.show != true && event.key === 'Escape')
      this.closeModal()
  }

  okButton(): void {
    this.show = false;

    if (this.functionToOkButtonModal !== undefined)
      this.functionToOkButtonModal();
  }

  closeModal(): void {
    this.show = false;

    if (this.functionToCloseModal !== undefined)
      this.functionToCloseModal();
  }
}
