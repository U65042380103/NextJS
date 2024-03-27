import { Response } from 'express'; // หากใช้ Express
import { Student, studentData } from './data';

export async function GET(request: any, { params }: any): Promise<Response> {
    const id: number = parseInt(params.id);
    const student: Student | undefined = studentData.find((student: Student) => student.id === id);

    if (!student) {
        return Response.json({
            msg: `data not found`
        });
    }
    return Response.json(student);
}
