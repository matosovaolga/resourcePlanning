import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersComponent} from './users.component';
import {CreateProjectPopupComponent} from '../create-project-popup/popup/create-project-popup.component';
import {CanvasRowComponent} from '../canvas-row/canvas-row.component';
import {BaseRequestOptions, ConnectionBackend, Http, HttpModule} from '@angular/http';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import {MockBackend} from '@angular/http/testing';
import {CursorsComponent} from '../cursors/cursors.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                CalendarDateShareService,
                MockBackend,
                BaseRequestOptions,
                Http,
                ConnectionBackend,
            ],
            declarations: [
                UsersComponent,
                CreateProjectPopupComponent,
                CanvasRowComponent,
                CursorsComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
