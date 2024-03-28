import { Student, studentData } from './data';

export function getStudentById(id: number): Student | undefined {
    return studentData.find((student: Student) => student.id === id);
}
