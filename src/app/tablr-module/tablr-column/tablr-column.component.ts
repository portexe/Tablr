import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'tablr-column',
    templateUrl: './tablr-column.component.html',
    styleUrls: ['./tablr-column.component.css']
})
export class TablrColumnComponent implements OnInit, OnChanges {

    @Input() tablrColumnWidth: string;
    @Input() isDraggingColumn: boolean;
    @Output() dragging = new EventEmitter();
    @Output() doneDragging = new EventEmitter();
    @Input() isFinalColumn: boolean;
    @Input() finalColumnWidth: string;
    @Input() scrollTop: string;
    @Input() data: any;
    @Input() cellPadding: string;
    @Input() evenRowBgColor: string;
    @Input() oddRowBgColor: string;
    @Input() headerBgColor: string;
    @Input() alternatingRowColors: boolean;
    @Input() columnBorderColor: string;
    @Input() columnBorderWidth: string;
    @Input() headerFontSize: string;
    @Input() fontSize: string;
    @Input() headerFontColor: string;
    @Input() fontColor: string;
    @Input() fixedHeader: boolean;
    @Input() rows: any[];

    ngOnInit() {
        if (!this.tablrColumnWidth && !this.isFinalColumn) {
            this.tablrColumnWidth = '150px';
        }
        else if (this.isFinalColumn) {
            this.tablrColumnWidth = this.finalColumnWidth;
        }
    }
    marginTop(index: number) {
        if (index === 0) {
            return '30px';
        } else {
            return '0px';
        }
    }
    bgColor(isEven: boolean) {
        if (isEven) {
            return this.evenRowBgColor;
        } else if (!isEven) {
            return this.oddRowBgColor;
        }
    }
    ngOnChanges() {
        if (this.isFinalColumn) {
            this.tablrColumnWidth = this.finalColumnWidth;
        }
    }
    click() {
        if (this.isFinalColumn) return;
        this.isDraggingColumn = true;
        this.dragging.emit({ 'columnData': this.data });
    }
}
