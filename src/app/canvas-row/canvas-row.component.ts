import {Component, Input, ElementRef, SimpleChanges, OnInit} from '@angular/core';
import {CreateProjectPopupDialogComponent} from '../create-project-popup/popup-dialog/create-project-popup-dialog.component';
import {MdDialog} from '@angular/material';
import {IUser} from '../create-project-popup/user.interface';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import {formatDateByParam} from '../header/calendar/utils/date.util';
import {IsOverloadDay} from '../_pipes/overloadDay.pipe';
import * as moment from 'moment';
import _ from 'lodash';
import * as SVG from 'svg.js';
/** Interface for draw fun coordinate. */
interface IDraw {
    start: number,
    end: number
}

/**
 * Create Canvas Row Component.
 * */
@Component({
    selector: 'app-canvas-row',
    templateUrl: './canvas-row.component.html',
    styleUrls: ['canvas-row.component.css'],
    providers: [
        IsOverloadDay
    ]

})

export class CanvasRowComponent /*implements OnInit, OnChanges*/ {
    //  /** Status for mouseMove fun. */
    private isActive = false;
    //  /** Canvas component. */
    private canvas;
    //  /** Start Position for mouse. */
    private startPosition = {
        x: null,
        y: null
    };
    public adminRole;
    public lines = [];
    marginBetween;
    private nextNum: number = 2;
    private rectSelect;
    @Input() fieldWidth: number;
    @Input() user: IUser;
    @Input() planList;
    private width;
    private draw;
    public plansCross: string[] = [];
    public start: number;
    public end: number;

    constructor(
        public elementRef: ElementRef,
        public dialog: MdDialog,
        private calendarShare: CalendarDateShareService,
        private isOverloadDay: IsOverloadDay,
    ) {}


    ngOnInit() {
        /** Draw first canvas. */
        this.adminRole = localStorage.getItem('admin');

        this.calendarShare.getDatePeriod().subscribe((resp) => {
            if (!resp) {return }
            this.start = Number(formatDateByParam(resp.date.start, 'X'));
            this.end = Number(formatDateByParam(resp.date.end, 'X'));

        });
        this.drawCanvas();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.lines = [];
 
        this.drawCanvas();
    }

    //  /** Turn of active status if mouse uped. */
    mouseUp(e) {
        this.isActive = false;

        let startDay = formatDateByParam(moment(formatDateByParam(this.start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(this.startPosition.x / this.fieldWidth, 'day'), 'YYYY-MM-DD', 'X');
        let endDay = formatDateByParam(moment(startDay, 'YYYY-MM-D').add(Math.floor(this.width / this.fieldWidth), 'day'), 'YYYY-MM-DD', 'X');

        this.openDialog(this.user, startDay, endDay);
        this.rectSelect.remove();

    }
    //  /** Change x position. */
    mouseDown(e) {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode === 3) {
            return;
        }
        let scope = this;
        scope.isActive = true;

        scope.startPosition.x = Math.floor((e.clientX - 300) / this.fieldWidth) * this.fieldWidth;

        this.draw = SVG(this.canvas);
        const width = this.draw.width();
        const height = this.user['maxheight'];

        this.rectSelect = this.draw.rect(this.fieldWidth, height).attr({
            fill: "rgba(241, 66, 244)",
            stroke: "none",
            x: scope.startPosition.x,
            opacity: .3
        }).back();

        window.addEventListener('mousemove', function (e) {
            if (!scope.isActive) {return }
            scope.mouseMove(e);
        }, false);

        window.addEventListener('mouseup', function (e) {
            if (!scope.isActive) {return }
            scope.mouseUp(e);
        }, false);
    }

    object2Array(object) {

        var out = [];
        for (var i in object) {
            out.push(object[i]);
        }
        return out;
    }

    mouseMove(e) {
        if (!this.isActive) {return }

        let endX = e.clientX - 261;
        let offset = endX - this.startPosition.x;
        let dayWidth = this.fieldWidth;
        if (Math.floor(endX % this.fieldWidth) == this.nextNum) {
            this.nextNum - 1;
        }

        if (offset > 0) {
           
            this.width = Math.round((Math.round(offset / dayWidth)) * dayWidth * 100) / 100;

            this.rectSelect.attr({
                width: this.width,
                x: this.startPosition.x
            });
        } else {
            
            this.width = Math.round((Math.floor(Math.abs(offset / dayWidth)) + 1) * dayWidth * 100) / 100;
            this.rectSelect.attr({
                width: this.width,
            }).move(this.startPosition.x - this.width, 0);
        }
    }

    drawCanvas(): void {

        this.canvas = this.elementRef.nativeElement.children[0];
        const width = 1591;
        const height = this.user['maxheight'] || 34;
        this.draw = SVG(this.canvas);
        let overloadPt;
        this.draw.each(function () {
            if (this.hasClass('hbar')) {
                this.remove()
            }
        });

        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
        this.marginBetween = this.fieldWidth;

        for (let i = 0; i < width; i += this.marginBetween) {
            this.lines.push(i);
        }

        if (this.start && this.end) {
            let start = moment(formatDateByParam(this.start, 'YYYY-MM-DD', 'X'));
            let end = moment(formatDateByParam(this.end, 'YYYY-MM-DD', 'X'));
            let calemdarNumDates = Number((end).diff(start, 'day'));
            let scope = this;
            for (let i = 0; i <= calemdarNumDates + 1; i++) {
                let currDate = moment(formatDateByParam(start, 'YYYY-MM-DD', 'X')).add(i - 1, 'day');
                let isOverload = scope.isOverloadDay.transform(scope.object2Array(this.user.plans), currDate);

                if (isOverload) {
                    let x = scope.fieldWidth * (i - 1);
                    if (x < 0) x *= -1;

                    overloadPt = scope.draw.rect(scope.fieldWidth, scope.user['maxheight']).attr({
                        fill: "#fcf4f4",
                        stroke: "none",
                        x: x,
                        opacity: 1
                    }).back().addClass("hbar overload");

                }
            };

        }
        if (overloadPt) {
            this.drawMaskOverload(overloadPt);
        }
    }

    drawMaskOverload(overloadPt) {

        if (overloadPt.height() > 34) {
            let defs = this.draw.defs();
            let pattern = this.draw.pattern(20, 20, (add) => {
                add.rect().attr({
                    width: "2",
                    height: "4",
                    transform: "translate(0,0)",
                    fill: "white"
                });
            }).attr({
                id: "pattern-stripe",
                width: "4",
                height: "4",
                patternUnits: "userSpaceOnUse",
                patternTransform: "rotate(45)"
            });
            let maskRect = this.draw.rect().attr({
                x: "0",
                y: "0",
                width: "100%",
                height: '300%',
                fill: "url(#pattern-stripe)"
            });

            let mask = this.draw.mask().attr({
                id: "mask-stripe"
            }).add(maskRect);

            defs.add(mask);
        }
    }

    openDialog(user, startDay, endDay): void {
        this.dialog.open(CreateProjectPopupDialogComponent, {
            height: '530px',
            width: '360px',
            data: {
                user: this.user,
                startDay: startDay,
                endDay: endDay
            }
        });
    }
}
