import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalGameComponent } from './modal-game.component';

describe('ModalGameComponent', () => {
    let component: ModalGameComponent;
    let fixture: ComponentFixture<ModalGameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalGameComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ModalGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should ngOnChanges with no changes', () => {
        component.ngOnChanges();
        expect(component.title).toBe('');
    });

    it('should ngOnChanges with changes', () => {
        const title = 'title';
        const text = 'text';

        component.show = true;
        component.game = {
            title: title,
            text: text,
            imageSrc: '',
            showTitleInTheSlideSelection: true,
            src: ''
        }
        component.ngOnChanges();

        expect(component.title).toBe(title);
        expect(component.text).toBe("games." + text);
        expect(document.body.classList.contains('no-scroll')).toBeTrue();
    });

    it('should handle keydown event for key Escape and currentShow false closeModal', () => {
        let count = 0;
        component.functionToCloseModal = () => {
            count += 1;
        };

        document.body.classList.add('no-scroll');

        component.closeModal();
        expect(document.body.classList.contains('no-scroll')).toBeFalse();

    });
});
