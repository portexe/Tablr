import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { TablrComponent } from './tablr/tablr.component';
// import { TablrColumnComponent } from './tablr-column/tablr-column.component';
import { TablrModule } from './tablr-module/tablr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TablrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
