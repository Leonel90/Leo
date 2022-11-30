"use strict";
class Persona1 {
    hablar(mensaje) {
        console.log(mensaje);
    }
}
class personaEducada extends Persona1 {
    nombre() {
        this.hablar("Mi nombre es Leonel");
    }
    paralelo() {
        this.hablar("Soy estudiante de 3er semestre del Instituto Yavirac");
    }
    jornada() {
        this.hablar("Estoy en la jornada Mañanina ja ja ja ja");
    }
}
let persona2 = new personaEducada();
persona2.nombre();
persona2.paralelo();
persona2.jornada();
class Estudiante {
    materia(mensaje) {
        console.log(mensaje);
    }
}
class estudianteBueno extends Estudiante {
    nombre() {
        this.materia("Yo me llamo Karina");
    }
    paralelo() {
        this.materia("Estoy en el paralelo 'D' Mañanino");
    }
    carrera() {
        this.materia("Estudio en la carrera d Gastronomía");
    }
}
let estudiante1 = new estudianteBueno();
estudiante1.nombre();
estudiante1.paralelo();
estudiante1.carrera();
class Docente {
    nota(mensaje) {
        console.log(mensaje);
    }
}
class docenteResponsable extends Docente {
    nombre() {
        this.nota("Mi nombre es Raul Gallegos");
    }
    asignatura() {
        this.nota("les dictare la asignatura de Anatomía");
    }
    tiempo() {
        this.nota(" 12 semanas de clases");
    }
}
let docente1 = new docenteResponsable();
docente1.nombre();
docente1.asignatura();
docente1.tiempo();
