import { JsonSchemaFormComponent } from '@ajsf/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

import form1Schema from './form-1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit
{
  form1Schema = form1Schema;
  value = null;

  @ViewChild('form1', { static: false }) form1Component: JsonSchemaFormComponent;

  ngAfterViewInit(): void
  {

  }
}
