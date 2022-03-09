import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const ROUTES:Routes= []

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class FeatureShellModule {}
