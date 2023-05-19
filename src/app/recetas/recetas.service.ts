import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from './recetas';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecetaDetail } from './recetasDetail';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetas: Array<RecetaDetail> = [];
  promedioCalificaciones = 0;

  selectedReceta!: RecetaDetail;
  selected: Boolean = false;
  private apiUrl: string = environment.baseUrl +"recetas" ;

  constructor(private http: HttpClient){ }

  //getRecetas() {
   // const url = 'https://gist.githubusercontent.com/VivianGomez/e65c117a4809355fbb53c37cb8fe1d44/raw/d0482c083962cad2319b3640250da0194d341dc6/recipes';
    //return this.http.get<Receta[]>(url).pipe(
     // map((response: Receta[]) => {
        // Puedes realizar cualquier procesamiento adicional aquí
       // return response;
      //})
    //);
  //}
  getRecetas(): Observable<RecetaDetail[]> {
    return this.http.get<RecetaDetail[]>(this.apiUrl);
  }
  getReceta(id: string): Observable<RecetaDetail> {
    return this.http.get<RecetaDetail>(this.apiUrl + "/" + id);
  }
}
