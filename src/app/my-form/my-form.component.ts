import { JsonSchemaFormComponent, JsonSchemaFormService } from '@ajsf/core';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import form1Schema from './form1.json';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [JsonSchemaFormService]
})
export class MyFormComponent
{
  form1Schema = form1Schema;
  value = null;

  @ViewChild('form1', { static: false }) form1Component: JsonSchemaFormComponent;

}
