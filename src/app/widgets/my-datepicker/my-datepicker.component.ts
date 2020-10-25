import { JsonSchemaFormService } from '@ajsf/core';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomWidget } from 'app/widgets/widget';


@Injectable()
export class CustomAdapter extends NgbDateAdapter<Date> {

  fromModel(value: Date | null): NgbDateStruct | null
  {
    if(value)
    {
      return {
        day: value.getDate(),
        month: value.getMonth() + 1,
        year: value.getFullYear()
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): Date | null
  {
    return date ? new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0) : null;
  }
}

@Component({
  template: `
    <div [class]="options?.htmlClass || ''">
      <label *ngIf="options?.title"
        [attr.for]="'control' + layoutNode?._id"
        [class]="options?.labelHtmlClass || ''"
        [hidden]="options?.notitle">
        {{options?.title}}
      </label>
      <input *ngIf="boundControl"
        ngbDatepicker
        #d="ngbDatepicker"
        (click)="d.toggle()"
        [maxDate]="maxDate"
        [formControl]="formControl"
        [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
        [attr.pattern]="options?.pattern"
        [attr.placeholder]="options?.placeholder"
        [attr.required]="options?.required"
        [class]="options?.fieldHtmlClass || ''"
        [id]="'control' + layoutNode?._id"
        [name]="controlName"
        [readonly]="options?.readonly ? 'readonly' : null">
    </div>`,
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
  ]
})
export class MyDatepickerComponent implements OnInit, CustomWidget<Date>
{
  formControl: AbstractControl;
  controlName: string;
  controlValue: Date | null;
  controlDisabled = false;
  boundControl = false;
  options: any;
  maxDate: NgbDateStruct | undefined;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService,
    private adapter: NgbDateAdapter<Date>
  ) { }

  ngOnInit()
  {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);

    if(this.options.maxDate)
    {
      const target = this.options.maxDate === '$$TODAY$$' ? new Date() : new Date(this.options.maxDate);
      if(!this.isValidDate(target))
        throw new Error('Invalid date ' + this.options.maxDate);
      this.maxDate = this.adapter.fromModel(target);

      // this.formControl.validator = this.addValidator(
      //   this.formControl.validator,
      //   ctrl =>
      //   {
      //     const val: Date | null = ctrl.value;

      //     if(val)
      //       return val.getTime() >= target.getTime() ? null : { maxDate: true };

      //     return null;
      //   });
    }
  }
  addValidator(validator: ValidatorFn | null, other: ValidatorFn): ValidatorFn
  {
    if(!validator) return other;
    return Validators.compose([validator, other]);
  }

  isValidDate(d: Date): boolean
  {
    return d.getTime() === d.getTime();
  }
}
