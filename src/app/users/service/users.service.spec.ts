import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { UsersService } from './users.service';
import {
    Http,
    HttpModule,
    BaseRequestOptions,
    ConnectionBackend,
} from '@angular/http';

describe('UsersService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                UsersService,
                MockBackend,
                BaseRequestOptions,
                Http,
                ConnectionBackend
            ]
        });
    });

    it('should  be created', inject([UsersService], (service: UsersService) => {
        expect(service).toBeTruthy();
    }));
});
