"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*DECLARACIONES DE ARRAYS O VARIABLES*/
let students = [];
let teachers = [];
let courses = [];
/*FUNCIONES*/
/*Opcion 1 sin funcion para leer html y reutilizar*/
/*function addStudent(): void {
    let currentStudent: Student = {
        fullName: (<HTMLInputElement>document.getElementById("fullName")).value,
        identification: parseInt((<HTMLInputElement>document.getElementById("identification")).value),
        direction: (<HTMLInputElement>document.getElementById("direction")).value,
        enrollment: parseInt((<HTMLInputElement>document.getElementById("enrollment")).value),
        level: (<HTMLInputElement>document.getElementById("level")).value,
    }
    students.push(currentStudent);
    //console.log(students)
    console.table(students)
}*/
/*Opcion 2 con funcion para leer html y reutilizar*/
function addStudent() {
    let currentStudent = {
        fullName: readFormiHTML("fullName"),
        identification: parseInt(readFormiHTML("identification")),
        direction: readFormiHTML("direction"),
        enrollment: parseInt(readFormiHTML("enrollment")),
        level: (readFormiHTML("level")),
    };
    students.push(currentStudent);
    //console.log(students)
    console.table(students);
}
/*Funcion para leer HTML*/
function readFormiHTML(id) {
    return document.getElementById(id).value;
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormiHTML("fullName-teacher"),
        identification: parseInt(readFormiHTML("identification-teacher")),
        direction: readFormiHTML("direction-teacher"),
        title: readFormiHTML("title-teacher"),
        matter: readFormiHTML("matter-teacher"),
    };
    teachers.push(currentTeacher);
    //console.log(teachers)
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        course: readFormiHTML("course-course"),
        parallel: readFormiHTML("parallel-course"),
        hour: parseInt(readFormiHTML("hour-course")),
    };
    courses.push(currentCourse);
    //console.log(courses)
    console.table(courses);
}
