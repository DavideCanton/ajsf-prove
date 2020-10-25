import { buildTitleMap, JsonSchemaFormService, TitleMapItem } from '@ajsf/core';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomWidget } from 'src/app/widget';


@Component({
  template: `
    <div [class]="options?.htmlClass || ''">
      <ng-select [items]="selectList"
            bindLabel="name"
            bindValue="value"
            [formControl]="formControl">
      </ng-select>
    </div>`,
})
export class MySelectComponent implements OnInit, CustomWidget<string>
{
  formControl: AbstractControl;
  controlName: string;
  controlValue: string | null;
  controlDisabled = false;
  boundControl = false;
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];
  selectList: TitleMapItem[];

  constructor(
    private jsf: JsonSchemaFormService)
  { }

  ngOnInit()
  {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);

    this.selectList = buildTitleMap(
      this.options.titleMap || this.options.enumNames,
      this.options.enum, !!this.options.required, !!this.options.flatList
    );
  }
}
