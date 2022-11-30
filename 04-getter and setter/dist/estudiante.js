"use strict";
/*class Estudiante{
    private _nombre: string = "Juan Pérez";
    private _cedula: number = 1789523642;
    private _numeroMatricula: number = 47895;
    private _curso: string = "Tercero";
 
    /*Encapsulamiento Getters and setters*/
/*public get nombre() {
    return this._nombre;
}

public set nombre(nombre:string){
    this.nombre = nombre;
}

public get cedula() {
    return this._cedula;
}

public set cedula(cedula:number){
    this.cedula = cedula;
}

public get numeroMatricula() {
    return this._numeroMatricula;
}

public set numeroMatricula(numeroMatricula:number){
    this.numeroMatricula = numeroMatricula;
}

public get curso() {
    return this._curso;
}

public set curso(curso:string){
    this.curso = curso;
}
}

let estudiante = new Estudiante();
console.log("Nombre: " +estudiante.nombre);
console.log("Cedula: " + estudiante.cedula);
console.log("Número de Matricula: " + estudiante.numeroMatricula);
console.log("Curso: " + estudiante.curso);*/
//Estudiante2 con uso de getters an setters
class Estudiante2 {
    /*Constructor*/
    constructor(nombre, semestre, curso) {
        this._nombre = nombre;
        this._curso = curso;
        this._semestre = semestre;
    }
    /*Getters and Setters*/
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get curso() {
        return this._curso;
    }
    set curso(curso) {
        this.curso = curso;
    }
    get semestre() {
        return this._semestre;
    }
    set semestre(semestre) {
        this.semestre = semestre;
    }
}
let estudiante2 = new Estudiante2("Leonardo", 3, "tercero");
console.log("Alumno nuevo: " + estudiante2.nombre);
console.log("Curso nuevo: " + estudiante2.curso);
console.log("Semestres nuevo: " + estudiante2.semestre);
