import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CursorsComponent} from './cursors.component';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import {ChangeDetectorRef} from '@angular/core';

describe('CursorsComponent', () => {
    let component: CursorsComponent;
    let fixture: ComponentFixture<CursorsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CursorsComponent],
            providers: [
                CalendarDateShareService,
                ChangeDetectorRef
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CursorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
