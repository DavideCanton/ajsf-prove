import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { WidgetLibraryService } from '@ajsf/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Bootstrap4FrameworkModule,
    NgbDatepickerModule
  ],
  providers: [],
  entryComponents: [MyInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private widgetLibrary: WidgetLibraryService)
  {
    this.widgetLibrary.registerWidget('date', MyInputComponent);
  }
}
