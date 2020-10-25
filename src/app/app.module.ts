import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { WidgetLibraryService } from '@ajsf/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { MyFormComponent } from 'app/my-form/my-form.component';
import { MyDatepickerComponent } from 'app/widgets/my-datepicker/my-datepicker.component';
import { MySelectComponent } from 'app/widgets/my-select/my-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDatepickerComponent,
    MySelectComponent,
    MyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    Bootstrap4FrameworkModule,
    NgbDatepickerModule
  ],
  providers: [],
  entryComponents: [MyDatepickerComponent, MySelectComponent],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private widgetLibrary: WidgetLibraryService)
  {
    this.widgetLibrary.registerWidget('date', MyDatepickerComponent);
    this.widgetLibrary.registerWidget('select', MySelectComponent);
  }
}
