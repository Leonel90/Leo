/*let mensaje:string = 'Hola clase de PV';

console.log(mensaje);
document.write(mensaje);*/
/*console.log("Hola clases de PV");
document.write("Hola clase desde pantalla");*/
/*function saludar(nombre: string, edad:number){
    return "Hola clase de Programación Visual, mi nombre es: "
    + nombre + " Mi edad es: "+  edad;
}

console.log(saludar("Leonel Sangolquiza", 32))
document.write(saludar("Leonel Sangolquiza", 32))*/
function recomendar(estudiante, mensaje, nivel, duracion) {
    return "Hola Insituto Superior Yavirac, soy el estudiante " + estudiante + mensaje + "estoy en "
        + nivel + "er semestre, la carrera tiene la duración de "
        + duracion + " semestres";
}
console.log(recomendar("Leonel Sangolquiza", " el mejor del País", 3, 5));
document.write(recomendar("Leonel Sangolquiza", " el mejor del País ", 3, 5));
