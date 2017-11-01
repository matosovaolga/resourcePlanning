import {TestBed, inject} from '@angular/core/testing';
import {LocalStorageService} from './local-storage.service';
import {_currentDate_, _dateConfig_} from '../test-utils/date-objects';

describe('LocalStorageService', () => {
    const _currentDate = 'currentDate';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalStorageService]
        });
    });

    it('should be created', inject([LocalStorageService], (service: LocalStorageService) => {
        expect(service).toBeTruthy();
    }));

    it('check init', inject([LocalStorageService], () => {
        localStorage.setItem(_currentDate, 'true');
        localStorage.removeItem('dateConfig');
        expect(LocalStorageService.checkInit()).toBeFalsy();
    }));


    it('set and get currentDate from LS', inject([LocalStorageService], () => {

        localStorage.clear();

        LocalStorageService.setCurrentDate(_currentDate_);

        const currentDate = LocalStorageService.getCurrentDate();

        expect(currentDate).toEqual(_currentDate_);

    }));

    it('set and get dateConfig from LS', inject([LocalStorageService], () => {
        localStorage.clear();
        LocalStorageService.setDateConfig(_dateConfig_);
        const dateConfig = LocalStorageService.getDateConfig();
        expect(dateConfig).toEqual(_dateConfig_);
    }));

});
