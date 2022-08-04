// la clase Todo, se encarga de la creacion del Todo junto con todas las caracteristicas de 
// éste en el constructor

export class ToDo {

    constructor(tarea){

        this.tarea = tarea;

        this.id    = new Date().getTime();
        this.completado = false;
        this.creado = new Date(); 

    }
}