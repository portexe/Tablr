import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'tablr',
    template: `<div [style.width]="tablrWidth"
    [style.height]="tablrHeight"
    (scroll)="scrolling($event)"
    [style.left]="tablrLeft"
    [style.top]="tablrTop"
    #tablr
    (mouseup)="doneDraggingColumn($event)"
    (mousemove)="mouseDrag($event)"
    (mouseleave)="doneDraggingColumn(null)">
    <tablr-column [finalColumnWidth]="finalColumnWidth"
                    [sortedHighlightColor]="sortedHighlightColor"
                    [isDraggingColumn]="isDraggingColumn"
                    [data]="column"
                    (doneDragging)="doneDraggingColumn($event)"
                    (initSort)="tablrSort($event)"
                    (dragging)="draggingColumn($event)"
                    *ngFor="let column of columns; let i = index; let last = last"
                    [style.font-size]="fontSize"
                    [isFinalColumn]="last"
                    [tablrColumnWidth]="column.width"
                    [scrollTop]="scrollTop"
                    [cellPadding]="cellPadding"
                    [evenRowBgColor]="evenRowBgColor"
                    [oddRowBgColor]="oddRowBgColor"
                    [headerBgColor]="headerBgColor"
                    [alternatingRowColors]="alternatingRowColors"
                    [columnBorderWidth]="columnBorderWidth"
                    [columnBorderColor]="columnBorderColor"
                    [headerFontSize]="headerFontSize"
                    [headerFontColor]="headerFontColor"
                    [fontColor]="fontColor"
                    [rows]="rows"
                    [fixedHeader]="fixedHeader">
    </tablr-column>
</div>`,
    styles: [`div{
        overflow: -moz-scrollbars-vertical;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    position: absolute;
}`]
})
export class TablrComponent implements OnInit, OnChanges {

    @Input() tableContent: any;
    @Input() columns: any[];
    @Input() rows: any[];
    isDraggingColumn: boolean = false;
    columnBeingDragged: any;
    finalColumnWidth: string;
    firstColumnWidth: number;

    //Styles
    @Input() tablrTop: string;
    @Input() tablrLeft: string;
    @Input() tablrWidth: string;
    @Input() tablrHeight: string;
    @Input() cellPadding: string;
    @Input() evenRowBgColor: string;
    @Input() oddRowBgColor: string;
    @Input() headerBgColor: string;
    @Input() alternatingRowColors: boolean;
    @Input() columnBorderColor: string;
    @Input() columnBorderWidth: string;
    @Input() fixedHeader: boolean;
    @Input() fontSize: string;
    @Input() headerFontSize: string;
    @Input() headerFontColor: string;
    @Input() fontColor: string;
    @Input() sortedHighlightColor: string;

    scrollTop: string = '0px';
    columnKey: string = null;

    ngOnInit() {
        this.handleOptions();
        var index = 0;
        var newColumns = [];
        for (let column of this.columns) {
            column['index'] = index;
            column['width'] = column['width'] + 'px';
            if (column['visible'] === 'false') {
                continue;
            }
            newColumns.push(column);
            index++;
        }
        this.columns = newColumns;
        this.addIndexToRows();
        this.calculateFinalColumnWidth();
    }
    ngOnChanges() {
        if (this.columnKey)
            this.tablrSort(this.columnKey);
        this.addIndexToRows();
    }
    addIndexToRows() {
        var index = 0;
        var newRows = [];
        for (let row of this.rows) {
            row['index'] = index;
            newRows.push(row);
            index++;
        }
        this.rows = newRows;
    }
    tablrSort(columnKey: string) {
        this.columnKey = columnKey;
        var sort_by = function(field: any, reverse: any, primer: any) {

            let key: any = primer ?
                function(x): any { return primer(x[field]); } :
                function(x): any { return x[field]; };

            reverse = !reverse ? 1 : -1;

            return function(a: any, b: any): any {
                return a = key(a), b = key(b), reverse * (+(a > b) - +(b > a));
            };
        };
        this.rows.sort(sort_by(this.columnKey['key'], false, null));
    }
    handleOptions() {
        if (!this.tablrTop) this.tablrTop = '0px';
        if (!this.tablrLeft) this.tablrLeft = '0px';
        if (!this.tablrWidth) this.tablrWidth = '500px';
        if (!this.tablrHeight) this.tablrHeight = '350px';
        if (!this.cellPadding) this.cellPadding = '0';
        if (!this.evenRowBgColor) this.evenRowBgColor = '';
        if (!this.oddRowBgColor) this.oddRowBgColor = '';
        if (!this.headerBgColor) this.headerBgColor = '';
        if (!this.alternatingRowColors) this.alternatingRowColors = true;
        if (!this.columnBorderColor) this.columnBorderColor = '';
        if (!this.columnBorderWidth) this.columnBorderWidth = '1px';
        if (!this.fixedHeader) this.fixedHeader = false;
        if (!this.fontSize) this.fontSize = '12px';
        if (!this.headerFontSize) this.headerFontSize = '14px';
        if (!this.headerFontColor) this.headerFontColor = '';
        if (!this.fontColor) this.fontColor = '';
        if (!this.sortedHighlightColor) this.sortedHighlightColor = '#717a9b';
    }
    scrolling($event) {
        if (this.fixedHeader) {
            this.scrollTop = $event.target.scrollTop + 'px';
        } else {
            this.scrollTop = '0px';
        }
    }
    calculateFinalColumnWidth() {
        var totalWidthOfColumns = 0;
        var index = 1;
        for (let column of this.columns) {
            if (index < this.columns.length)
                totalWidthOfColumns += Number.parseInt(column.width);
            index++;
        }
        var finalColumnWidth = Number.parseInt(this.tablrWidth) - totalWidthOfColumns - 17;
        if (finalColumnWidth < 20) {
            this.readjustColumnWidth(Number.parseInt(this.columnBeingDragged.width) - 3);
            this.isDraggingColumn = false;
            return;
        } else if (this.firstColumnWidth < 20) {
            this.readjustColumnWidth(Number.parseInt(this.columnBeingDragged.width) + 3);
            this.isDraggingColumn = false;
            return;
        } else {
            this.finalColumnWidth = finalColumnWidth + 'px';
        }
    }
    mouseDrag($event) {
        var offsetX = $event.offsetX;
        if (this.isDraggingColumn) {
            if (Number.parseInt($event.srcElement.id) !== this.columnBeingDragged.index) {
                offsetX = offsetX + Number.parseInt(this.columnBeingDragged.width);
            }
            this.readjustColumnWidth(offsetX);
        }
    }
    draggingColumn($event) {
        this.isDraggingColumn = true;
        this.columnBeingDragged = $event.columnData;
    }
    doneDraggingColumn($event) {
        this.isDraggingColumn = false;
    }
    readjustColumnWidth(newWidth: number) {
        if (newWidth < 20) {
            this.isDraggingColumn = false;
            return;
        }
        this.columnBeingDragged.width = newWidth + 'px';
        var index = 0;
        for (let column of this.columns) {
            if (this.columnBeingDragged.index === column.index) {
                this.columns[index] = this.columnBeingDragged;
            }
            index++;
        }
        this.firstColumnWidth = Number.parseInt(this.columns[0].width);
        this.calculateFinalColumnWidth();
    }
}
