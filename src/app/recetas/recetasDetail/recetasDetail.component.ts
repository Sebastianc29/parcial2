import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaDetail } from '../recetasDetail';
import { RecetaService } from '../recetas.service';

@Component({
  selector: 'app-recetasDetail',
  templateUrl: './recetasDetail.component.html',
  styleUrls: ['./recetasDetail.component.css']
})
export class RecetasDetailComponent implements OnInit {

  recetaId!: string;
  @Input() recetaDetail!:RecetaDetail;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService) { }

    getReceta(){
      this.recetaService.getReceta(this.recetaId).subscribe(receta=>{
        this.recetaDetail = receta;
      })
    }

    ngOnInit() {

      if (this.recetaDetail === undefined) {
        this.recetaId = this.route.snapshot.paramMap.get('id')!
        if (this.recetaId) {
          this.getReceta();
        }
      }

}
}
