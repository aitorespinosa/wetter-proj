import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule,MatInputModule,MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule],
})

export class MaterialModule{
  
}