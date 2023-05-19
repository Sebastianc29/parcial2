import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasListComponent } from './recetasList/recetasList.component';
import { RecetasDetailComponent } from './recetasDetail/recetasDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [RecetasListComponent],
  declarations: [RecetasListComponent, RecetasDetailComponent]
})
export class RecetasModule { }
