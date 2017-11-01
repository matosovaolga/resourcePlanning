import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing }    from './app.routing';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService } from './_services/index';
import { ButtonComponent } from './_common/button.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { ShowErrorsComponent } from './errors/show-errors.component';
import { GeneralHeaderComponent } from './header/general-header/general-header.component';
import { GantHeaderComponent } from './header/gant-header/gant-header.component';
import { CanvasRowComponent } from './canvas-row/canvas-row.component';
import { MdButtonModule, MdCheckboxModule, MdSelectModule,
        MdNativeDateModule,
        MdDatepickerModule,
        MatAutocompleteModule,
        MdDialogModule,} from '@angular/material'; 
import { CalendarComponent } from './header/calendar/calendar.component';
import { ProjectsDataShareService} from './shared/services/projects-data-share.service';
import { CalendarDateShareService} from './shared/services/calendar-date-share.service';
import { SocketClientService} from './shared/socket-client.service';
import { CursorsComponent} from './cursors/cursors.component';
import { UsersComponent} from './users/users.component';
import { GroupsComponent} from './groups/groups.component';
import { PlanComponent} from './plan/plan-single.component';
import { EditDialogsService } from './plan/service/editPlanDialog.service';
import { ContextDialogsService } from './context-menu/service/contextMenuDialog.service';
import { EditPlanComponent }   from './plan/edit-plan-dialog.component/edit-plan-dialog.component';
import { ContextMenuComponent }   from './context-menu/context-menu-dialog.component';
import { ConfirmComponent }   from './confirm-modal/confirm-modal.component';
import { AlertComponent } from './_directives/index';
import { SortByPipe} from './_pipes/sortBy.pipe';
import { GetLevels} from './_pipes/getLevel.pipe';
import { Object2ArrayPipe} from './_pipes/object2Array.pipe';
import { IsOverloadDay} from './_pipes/overloadDay.pipe';
import { GroupsService } from './groups/service/groups.service';
import { PlanService } from './plan/service/plan.service';
import * as SVG from 'svg.js';
import * as _ from "lodash";
import {UsersService} from './users/service/users.service';

import {ProjectsService} from './create-project-popup/popup-api.service';


import {
    CreateProjectPopupDialogComponent
} from './create-project-popup/popup-dialog/create-project-popup-dialog.component';


import {
    CreateProjectPopupComponent
} from './create-project-popup/popup/create-project-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        HomeComponent,
        LoginComponent,
        ShowErrorsComponent,
        UsersComponent,
        GroupsComponent,
        PlanComponent,
        CanvasRowComponent,
        CursorsComponent,
        GeneralHeaderComponent,
        GantHeaderComponent,
        CreateProjectPopupDialogComponent,
        CreateProjectPopupComponent,
        CalendarComponent,
        AlertComponent,
        SortByPipe,
        GetLevels,
        IsOverloadDay,
        Object2ArrayPipe,
        EditPlanComponent,
        ContextMenuComponent,
        ConfirmComponent
    ],
     exports: [
        EditPlanComponent,
        ContextMenuComponent,
        ConfirmComponent
    ],
    imports: [
        MdSelectModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MdDatepickerModule,
        JsonpModule,
        MyDateRangePickerModule,
        HttpModule,
        MdNativeDateModule,
        MdButtonModule,
        MdCheckboxModule,
        MatAutocompleteModule,
        routing,
        MdDialogModule
    ],
     entryComponents: [
        CreateProjectPopupDialogComponent,
        EditPlanComponent,
        ContextMenuComponent,
        ConfirmComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        Storage,
        ProjectsDataShareService,
        CalendarDateShareService,
        SocketClientService,
        EditDialogsService,
        ContextDialogsService,
        UsersService,
        ProjectsService,
        GroupsService,
        PlanService,
        {provide: Window, useValue: window},
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
