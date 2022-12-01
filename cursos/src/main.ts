/*IMPORTACIONES DE LAS INTERFACES O ENTIDADES*/
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import { Course } from "./entities/course.entity";

/*DECLARACIONES DE ARRAYS O VARIABLES*/
let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];


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
function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormiHTML("fullName"),
        identification: parseInt(readFormiHTML("identification")),
        direction: readFormiHTML("direction"),
        enrollment: parseInt(readFormiHTML("enrollment")),
        level: (readFormiHTML("level")),
    }
    students.push(currentStudent);
    //console.log(students)
    console.table(students)
}
/*Funcion para leer HTML*/
function readFormiHTML(id:string): string {
    return(<HTMLInputElement>document.getElementById(id)).value;
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormiHTML("fullName-teacher"),
        identification: parseInt(readFormiHTML("identification-teacher")),
        direction: readFormiHTML("direction-teacher"),
        title: readFormiHTML("title-teacher"),
        matter: readFormiHTML("matter-teacher") as unknown as 'Programación' | 'Metodología' | 'Base de Datos',
    }
    teachers.push(currentTeacher);
    //console.log(teachers)
    console.table(teachers)
}

function addCourse(): void {
    let currentCourse: Course = {
        course: readFormiHTML("course-course") as unknown as '1er Semestre' | '2do Semestre' | '3er Semestre' | '4to Semestre' | '5to Semestre',
        parallel: readFormiHTML("parallel-course"),
        hour: parseInt(readFormiHTML("hour-course")),
    }
    courses.push(currentCourse);
    //console.log(courses)
    console.table(courses)
}