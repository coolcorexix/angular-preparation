import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: []
})
export class MaterialModule { }
