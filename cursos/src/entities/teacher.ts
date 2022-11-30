import { Person } from "./person.entity";

export interface Teacher extends Person{
    title: string;
    cursos : string;
}