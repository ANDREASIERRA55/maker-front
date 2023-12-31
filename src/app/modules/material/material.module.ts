import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common'


const materialModules = [MatButtonModule]


@NgModule({
  imports: [
    materialModules,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
