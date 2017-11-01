import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarComponent} from './calendar.component';
import {CalendarDateShareService} from '../../shared/services/calendar-date-share.service';

describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [CalendarDateShareService],
            declarations: [CalendarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
