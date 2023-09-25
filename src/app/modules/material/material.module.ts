import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


const materialModules = [MatButtonModule]


@NgModule({
  imports: [
    materialModules,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
