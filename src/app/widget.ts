import { AbstractControl } from '@angular/forms';

export interface CustomWidget<T = any>
{
  formControl: AbstractControl;
  controlName: string;
  controlValue: T | null;
  controlDisabled: boolean;
  boundControl: boolean;
  options: any;
  layoutNode: any;
  layoutIndex: number[];
  dataIndex: number[];
}
