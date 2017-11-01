import {async, ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';

import {GantHeaderComponent} from './gant-header.component';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarComponent} from '../calendar/calendar.component';
import {MyDateRangePickerModule} from 'mydaterangepicker';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {CalendarDateShareService} from '../../shared/services/calendar-date-share.service';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {_currentDate_, _dateConfig_, _event_} from '../../shared/test-utils/date-objects';

describe('GantHeaderComponent', () => {
    let component: GantHeaderComponent;
    let fixture: ComponentFixture<GantHeaderComponent>;
    let calendarShare: CalendarDateShareService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MyDateRangePickerModule,
                MdDatepickerModule,
                MdNativeDateModule
            ],
            declarations: [
                GantHeaderComponent,
                CalendarComponent
            ],
            providers: [
                CalendarService,
                CalendarDateShareService,
                LocalStorageService
            ]
        })
            .compileComponents();

    }));

    beforeEach(() => {

        localStorage.setItem('currentDate', JSON.stringify(_currentDate_));
        localStorage.setItem('dateConfig', JSON.stringify(_dateConfig_));

        fixture = TestBed.createComponent(GantHeaderComponent);
        component = fixture.componentInstance;

        calendarShare = new CalendarDateShareService;

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('dateConfig and currentDate must have value', () => {

        component.ngOnInit();

        expect(component.dateConfig).toBeDefined();
        expect(component.currentDate).toBeDefined();
    });

    it('If the app was not initialized, call .init ()',
        inject([CalendarService], () => {

            spyOn(CalendarService, 'init');

            expect(CalendarService.init).not.toHaveBeenCalled();
        })
    );

    it('calendarShare must set new currentDate', fakeAsync(() => {

        const spy = spyOn(component.calendarShare, 'setDatePeriod');

        component.ngOnInit();

        expect(spy.calls.any()).toEqual(true);
    }));

    it('changeDateEvent', () => {
        component.ngOnInit();

        spyOn(CalendarService, 'dateChange');
        spyOn(LocalStorageService, 'setCurrentDate');
        spyOn(LocalStorageService, 'setDateConfig');
        component.changeDateRange(_event_);
        expect(CalendarService.dateChange).toHaveBeenCalled();
        expect(LocalStorageService.setCurrentDate).toHaveBeenCalled();
        expect(LocalStorageService.setDateConfig).toHaveBeenCalled();
    })
});
