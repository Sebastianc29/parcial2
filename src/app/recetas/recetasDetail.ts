import { Receta } from "./recetas";

export class RecetaDetail extends Receta{

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    dificultad: string,
    duracion: number,
    ingredientes: string,
    categoria: string,
    imangen: string,
    estrellas: number,
    cantidadOpiniones: number,
    autorRecetas: string
  ){
  super(id, nombre, descripcion, dificultad, duracion, ingredientes, categoria, imangen, estrellas, cantidadOpiniones, autorRecetas);

  }
}
