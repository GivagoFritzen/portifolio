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
  public show: boolean = false;
  @Input()
  public functionToOkButtonModal: Function | undefined;
  @Input()
  public functionToCloseModal: Function = () => { };

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
    this.functionToCloseModal();
  }
}
