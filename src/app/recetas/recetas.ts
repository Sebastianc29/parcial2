export class Receta{
  id: number;
  nombre: string;
  descripcion: string;
  dificultad: string;
  duracion: number;
  ingredientes: string;
  categoria: string;
  imangen: string;
  estrellas: number;
  cantidadOpiniones: number;
  autorRecetas: string;

  constructor(id: number, nombre: string, descripcion: string, dificultad: string, duracion: number, ingredientes: string, categoria: string, imangen: string, estrellas: number, cantidadOpiniones: number, autorRecetas: string){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.duracion = duracion;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
    this.imangen = imangen;
    this.estrellas = estrellas;
    this.cantidadOpiniones = cantidadOpiniones;
    this.autorRecetas = autorRecetas;
  }
}
