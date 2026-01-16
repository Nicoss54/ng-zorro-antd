import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { NzVariant } from 'ng-zorro-antd/core/types';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
@Component({
  selector: 'nz-demo-form-variant',
  imports: [NzFormModule, NzRadioModule, FormsModule],
  template: `
    <form nz-form [nzVariant]="variant()">
      <nz-form-item>
        <nz-form-label>Form variant</nz-form-label>
        <nz-radio-group [(ngModel)]="variant" name="variant">
          <label nz-radio-button nzValue="outlined">Outlined</label>
          <label nz-radio-button nzValue="filled">Filled</label>
          <label nz-radio-button nzValue="borderless">Borderless</label>
          <label nz-radio-button nzValue="underlined">Underlined</label>
        </nz-radio-group>
      </nz-form-item>
    </form>
  `
})
export class NzDemoFormVariantComponent {
  readonly variant = signal<NzVariant>('outlined');
}
