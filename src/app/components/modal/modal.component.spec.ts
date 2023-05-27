import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const keydownEventCases: { key: string, currentShow: boolean }[] = [
    { key: 'Enter', currentShow: false },
    { key: 'Escape', currentShow: true },
    { key: 'Space', currentShow: false }
  ];
  keydownEventCases.forEach((keydownEventCase) => {
    it(`should handle keydown event for key '${keydownEventCase.key}' and currentShow: '${keydownEventCase.currentShow}' with condition false`, () => {
      const keyboardEvent = new KeyboardEvent('keydown', { key: keydownEventCase.key });
      component.show = keydownEventCase.currentShow;
      document.dispatchEvent(keyboardEvent);
    });
  });

  it('should handle keydown event for key Escape and currentShow false closeModal', () => {
    let count = 0;
    component.functionToCloseModal = () => {
      count += 1;
    };

    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(keyboardEvent);

    expect(count).toBe(1);
    expect(component.show).toBeFalse();
  });

  it('should call okButton without functionToOkButtonModal', () => {
    component.okButton();
    expect(component.show).toBeFalse();
  });

  it('should call okButton with functionToOkButtonModal', () => {
    let count = 0;
    component.functionToOkButtonModal = () => {
      count += 1;
    };
    component.okButton();

    expect(component.show).toBeFalse();
    expect(count).toBe(1);
  });
});
