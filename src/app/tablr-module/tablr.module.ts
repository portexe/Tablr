import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TablrComponent } from './tablr/tablr.component';
import { TablrColumnComponent } from './tablr-column/tablr-column.component';
import { TablrService } from './tablr.service';

@NgModule({
	declarations: [
		TablrComponent,
		TablrColumnComponent
	],
	imports: [BrowserModule],
	providers: [TablrService],
	exports: [TablrComponent, TablrColumnComponent],
	bootstrap: []
})
export class TablrModule { }
