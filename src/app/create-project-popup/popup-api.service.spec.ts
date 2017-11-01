import {TestBed, inject} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {ProjectsService} from './popup-api.service';
import {
    Http,
    BaseRequestOptions,
    HttpModule,
    ConnectionBackend
} from '@angular/http';

import {SocketClientService} from '../shared/socket-client.service';

describe('PopupApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ProjectsService,
                MockBackend,
                BaseRequestOptions,
                Http,
                ConnectionBackend,
                SocketClientService
            ]
        });
    });

    it('should be created', inject([ProjectsService], (service: ProjectsService) => {
        expect(service).toBeTruthy();
    }));
});
