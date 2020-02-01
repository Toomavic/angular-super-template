import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ANGULAR_MAT_MODULES } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ANGULAR_FORMS_MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...ANGULAR_MAT_MODULES, ...ANGULAR_FORMS_MODULES],
  exports: [...ANGULAR_MAT_MODULES, ...ANGULAR_FORMS_MODULES]
})
export class SharedModule {}
