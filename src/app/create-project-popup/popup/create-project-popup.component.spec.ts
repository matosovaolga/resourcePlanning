import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {CreateProjectPopupComponent} from './create-project-popup.component';
import {By} from '@angular/platform-browser';

import {
    MdDialog,
    Overlay,
    ScrollStrategyOptions,
    ScrollDispatcher,
    Platform,
    ViewportRuler,
    OVERLAY_PROVIDERS
} from '@angular/material';

import {ProjectsDataShareService} from '../../shared/services/projects-data-share.service';
import {SocketClientService} from '../../shared/socket-client.service';
import {DebugElement} from '@angular/core';

describe('CreateProjectPopupComponent', () => {
    let component: CreateProjectPopupComponent;
    let fixture: ComponentFixture<CreateProjectPopupComponent>;
    let spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CreateProjectPopupComponent
            ],
            providers: [
                MdDialog,
                Overlay,
                ScrollStrategyOptions,
                ScrollDispatcher,
                Platform,
                ViewportRuler,
                OVERLAY_PROVIDERS,
                ProjectsDataShareService,
                SocketClientService
            ],
            imports: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateProjectPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });



    it('should be created', () => {
        expect(component).toBeTruthy();
    });


    it('when open dialog need make emit to server', inject([], () => {
        spy = spyOn(component, 'openDialog');
    }));

});
