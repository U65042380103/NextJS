// import { Response } from 'express'; // หากใช้ Express
import { getStudentById } from './studentService';

export async function GET(request: any, { params }: any): Promise<Response> {
    const id: number = parseInt(params.id);
    const student = getStudentById(id);

    if (!student) {
        return Response.json({
            msg: `data not found`
        });
    }

    return Response.json(student);
}
