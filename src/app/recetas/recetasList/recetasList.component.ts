import { Component, OnInit } from '@angular/core';
import { Receta } from '../recetas';
import { RecetaService } from '../recetas.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecetaDetail } from '../recetasDetail';
@Component({
  selector: 'app-recetasList',
  templateUrl: './recetasList.component.html',
  styleUrls: ['./recetasList.component.css']
})
export class RecetasListComponent implements OnInit {

  recetas: Array<RecetaDetail> = [];

  selectedReceta!: RecetaDetail;

  selected: Boolean = false;

  onSelected(receta: RecetaDetail): void {
    this.selected = true;
    this.selectedReceta = receta;
  }

  constructor (private recetaService: RecetaService){

    getRecetas(): void {
      this.recetaService.getRecetas().subscribe(recetas => {
        this.recetas = recetas});
    }
    ngOnInit(){
      this.getRecetas();
    }

  }





