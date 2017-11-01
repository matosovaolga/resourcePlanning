import {Component, OnInit, Input, ElementRef, Inject} from '@angular/core';
import {formatDateByParam} from '../header/calendar/utils/date.util';
import {ContextDialogsService} from '../context-menu/service/contextMenuDialog.service';
import {EditPlanComponent} from './edit-plan-dialog.component/edit-plan-dialog.component';
import {MdDialog} from '@angular/material';
import {IUser} from '../create-project-popup/user.interface';
import {CanvasRowComponent} from '../canvas-row/canvas-row.component';
import {ProjectsDataShareService} from '../shared/services/projects-data-share.service';
import * as SVG from 'svg.js';
import _ from 'lodash';
import * as moment from 'moment/moment';

@Component({
    selector: '[plan-single]',
    templateUrl: './plan-single.component.html'
})

/** Class representing a Users Component */
export class PlanComponent implements OnInit {

    public plans: string[];
    /** The list of all groups with users */
    //    public userGroups: IGroupsList;
    private isActive = false;
    @Input() plan;
    @Input() user: IUser;
    @Input() startRange;
    @Input() endRange;
    @Input() fieldWidth;
    public check_direction;
    public startDateRange;
    public svgId;
    public draw;
    public isResize: boolean = false;
    public project_name: string;
    private shadowSvg;
    public adminRole;
    mouseDownListener;
    mouseMoveLisener;
    mouseUpLisener;
    private tempPlan;
    diffentCoord;
    mouseUpClick = false;
    timer = 0;
    timeoutClick;
    start;
    /**
   * Create a UserComponent.
   * @param usersService - The service for work with users.
   * @param groupsService - The service for work with groups.
   * @param calendarShare - The service for data sharing with Calendar data.
   * @param cdRef - For fix bug with Observer;
   */
    constructor(
        public dialog: MdDialog,
        public elementRef: ElementRef,
        private contextDialogs: ContextDialogsService,
        private dataShare: ProjectsDataShareService,
        @Inject(CanvasRowComponent) private parent: CanvasRowComponent
    ) {}

    ngOnInit() {
        let planStart,
            planEnd,
            pWidth;

        this.adminRole = localStorage.getItem('admin');
        /* Selected date's range */
        this.start = formatDateByParam(this.startRange, 'YYYY-MM-DD', 'X');
        const end = formatDateByParam(this.endRange, 'YYYY-MM-DD', 'X');

        /* Plan date range */
        planStart = moment(this.plan.start_time, 'X');
        planEnd = moment(this.plan.end_time, 'X');

        const sumWidth = (planEnd.diff(end, 'days') + 1) * this.fieldWidth;

        this.startDateRange = planStart.diff(this.start, 'days') * this.fieldWidth;

        if (this.startDateRange < 0) {
            pWidth = planEnd.diff(this.start, 'days') + 1;
            this.startDateRange = 0;
        }else {
            pWidth = planEnd.diff(planStart, 'days') + 1;
        }
        this.plan.length = pWidth * this.fieldWidth;

        if (sumWidth > 0) {
            this.plan.length = this.plan.length - sumWidth + this.fieldWidth;
        }

        this.svgId = 'svg' + String(this.plan.id);
        this.project_name = this.plan.project;

        this.dataShare.getPlan().subscribe((data) => {
            if (data.errors) {
                console.log(data);
            }
        });
    }

    ngAfterViewInit() {
        this.draw = SVG(this.svgId);
        let scope = this;
        let planColor: string;
        let planColorBorder: string;
        let layout,
            cropText,
            clip,
            background;
        
        scope.mouseUpLisener = function (e) {
            scope.isActive = false;
            scope.draw.remove();
            scope.shadowSvg.remove();

            let mainSvg = e.target.closest('.mainSvg');
            let id;
            if (mainSvg != null) {
                id = Number(mainSvg.getAttribute('id'));
            }

            scope.dataShare.emitPlanUpdate(
                {
                    ...scope.plan,
                    user_id: id,
                    planning_updated: Number(moment().format('X'))
                });
            window.removeEventListener('mouseup', scope.mouseUpLisener, false);
            window.removeEventListener('mousemove', scope.mouseMoveLisener, false);
        }

        scope.mouseMoveLisener = function (e) {
            window.removeEventListener('mousedown', scope.mouseDownListener, false);
            scope.draggble(e, scope.shadowSvg);
        };

       
        switch (this.plan.approved) {
            case 1: {
                /*approved plan */
                planColor = 'rgb(205, 233, 206)';
                planColorBorder = 'rgb(103, 199, 133)';
                switch (this.project_name) {
                    case 'Vacation': {
                        /*approved plan */
                        planColor = 'rgba(255, 255, 255, 0.6)';
                        planColorBorder = '#90a4ae';
                        break;
                    }
                    case 'Internal works': {
                        /* non approved plan*/
                        planColor = 'rgb(252, 221, 211)';
                        planColorBorder = 'rgb(248, 170, 146)';
                        break;
                    }
                    case 'Sick Leave': {
                        /* non approved plan*/
                        planColor = 'rgba(255, 255, 255, 0.6)';
                        planColorBorder = '#0079BF';
                        break;
                    }
                }
                break;
            }
            case 0: {
                /* non approved plan*/
                planColor = 'rgb(252, 221, 211)';
                planColorBorder = 'rgb(248, 170, 146)';
                break;
            }

            default: {
                break;
            }
        }


        /* Draw plan*/
        layout = this.draw.rect(this.plan.length, 25).attr({
            fill: planColorBorder,
        }).addClass('bglayout').radius(3).move(0, 5);
        cropText = this.draw.rect(this.plan.length - 50, 25).move(5, 5);
        background = this.draw.rect(this.plan.length - 10, 25).attr({
            fill: planColor
        }).style({
            'cursor': 'pointer'
        }).move(5, 5);

        this.draw.text(String(this.plan.percent + '%')).attr({
            fill: planColorBorder
        }).font({
            anchor: 'end'
        }).move(this.plan.length - 10, 10);

        clip = this.draw.clip().add(cropText);
        this.draw.text(String(this.project_name)).attr({
            fill: '#333'
        }).move(10, 10).clipWith(clip);

        if (this.adminRole) {
            layout.on('mousedown', function (e) {
                let keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode === 3) {
                    return;
                }

                scope.resize(e, this);
            });

            this.mouseDownListener = function (e) {
                let keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode === 3) {
                    return;
                }
                let event = e;
                let elem = this;

                scope.timeoutClick = setTimeout(function (e) {
                    scope.timer++;
                    scope.replaceEl(event, elem);
                    elem.style({
                        'opacity': '0.5'
                    });
                }, 600);

                document.body.onmouseup = function () {
                    if (scope.timer == 0) {
                        scope.editPlan();
                        clearTimeout(scope.timeoutClick);
                    }
                }
            };

            this.draw.on('mousedown', this.mouseDownListener, false);
        }

    }

    replaceEl(e, el) {
        e.stopPropagation();
        let scope = this;
        let parentEl,
            elem,
            left;
        scope.isActive = true;

        parentEl = scope.parent.elementRef.nativeElement;
        elem = el.node.innerHTML;
        this.diffentCoord = e.clientX - (el.doc().x() + 307);
        left = e.clientY - 20;

        parentEl.insertAdjacentHTML('beforeend', "<svg id='copySvg' x='" + this.diffentCoord + "' width='" + el.width() + "' height='34'>" + elem + '</svg>')
        scope.shadowSvg = SVG('copySvg');

        scope.shadowSvg.style({
            'position': 'fixed',
            'top': left + 'px',
            'left': e.clientX - this.diffentCoord + 'px',
            'z-index': 5,
        });

        window.addEventListener('mousemove', scope.mouseMoveLisener, false);
        window.addEventListener('mouseup', scope.mouseUpLisener, false);
    }

    draggble(e, el) {
        if (!this.isActive) {return }
        let y = e.clientY;
        el.style({
            'top': y - 20 + 'px',
            'left': e.clientX - this.diffentCoord + 'px',
        });
    }

    editPlan() {
        this.timer = 5;
        this.isActive = false;

        this.dialog.open(EditPlanComponent, {
            height: '530px',
            width: '360px',
            data: {
                user: this.user,
                ...this.plan
            }
        });
    }

    contextmenu(e) {

        // Stop the context menu
        e.preventDefault();

        let startPosition = Math.floor((e.clientX - 305) / this.fieldWidth) * this.fieldWidth;

        let collapseDay = formatDateByParam(moment(formatDateByParam(this.start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(startPosition / this.fieldWidth, 'day'), 'YYYY-MM-DD', 'X');

        this.contextDialogs
            .deletePlanDialog(this.plan, collapseDay)
            .subscribe();
    }


    mouseMove(e, elem, direction?: string, x?: number, widthOld?: number) {
        let scope = this;
        this.check_direction = function (e) {
            if (!scope.isActive) {return }
            const marginBetween = scope.fieldWidth;
            let endX = e.clientX - 310 - elem.doc().x();

            const oldWidth = widthOld;
            let newWidth;
            let newX;
            let diff;
            let siblings = elem.siblings();
            if (direction == 'right') {
                newWidth = Math.round((Math.trunc(endX / marginBetween) + 1) * marginBetween * 100) / 100;

            } else {
                endX = e.clientX - 310;
                let widthX = Math.round((Math.trunc(endX / marginBetween) + 0) * marginBetween * 100) / 100;

                if (endX > x) {
                    diff = widthX - x;
                    newWidth = oldWidth - diff;
                    newX = x + diff;

                } else {
                    diff = x - widthX;
                    newWidth = oldWidth + diff;
                    newX = x - diff;
                }

                elem.doc().attr({
                    x: newX,
                });
            }

            scope.plan.length = newWidth;

            elem.attr({
                width: newWidth,
            }).next().move(scope.plan.length - 10, 10);

            siblings[2].attr({
                width: scope.plan.length - 10
            }).style({cursor: 'col-resize'});
        }

        window.addEventListener('mousemove', this.check_direction);
    }

    resize(e, elem) {
        e.stopPropagation();
        let scope = this;
        let x = elem.doc().x();
        let widthOld = elem.doc().width();
        scope.isActive = true;

        let mousePoint = e.clientX - 310;

        if (mousePoint >= (x - 11) && mousePoint <= (x + 15)) {
            scope.mouseMove(e, elem, 'left', x, widthOld);

        } else {

            if (!scope.isActive) {return }
            scope.mouseMove(e, elem, 'right', x, widthOld);

        }

        window.addEventListener('mouseup', function (e) {
            if (!scope.isActive) {return }

            scope.mouseUp(e, elem);
        }, false);
    }


    mouseUp(e, elem) {
        this.isActive = false;
        window.removeEventListener('mousemove', this.check_direction);
        const start = moment(formatDateByParam(this.startRange, 'YYYY-MM-DD', 'X'));
        const end = moment(formatDateByParam(this.endRange, 'YYYY-MM-DD', 'X'));
        let startPosition = elem.doc().x();
        let width = elem.doc().width();

        let startDay = formatDateByParam(moment(formatDateByParam(start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(Math.round(startPosition / this.fieldWidth), 'day'), 'X');
        let endDay = formatDateByParam(moment(formatDateByParam(startDay, 'YYYY-MM-D', 'X'), 'YYYY-MM-D').add(Math.round(width / this.fieldWidth) - 1, 'day'), 'X');

        this.dataShare.emitPlanUpdate({
            start_time: Number(startDay),
            end_time: Number(endDay),
            id: this.plan.id,
            planning_updated: Number(moment().format('X'))
        });
    }
}

