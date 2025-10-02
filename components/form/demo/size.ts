import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-form-size',
  imports: [FormsModule, NzFormModule, NzRadioModule, NzInputModule, NzInputNumberModule],
  template: `
    <form nz-form [nzSize]="size()">
      <nz-form-item>
        <nz-form-label>Size</nz-form-label>
        <nz-form-control>
          <nz-radio-group name="size" [(ngModel)]="size">
            <label nz-radio-button nzValue="small">Small</label>
            <label nz-radio-button nzValue="default">Default</label>
            <label nz-radio-button nzValue="large">Large</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Input</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label>Input Number</nz-form-label>
        <nz-form-control>
          <nz-input-number />
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormSizeComponent {
  size = model<'small' | 'default' | 'large'>('default');
}
