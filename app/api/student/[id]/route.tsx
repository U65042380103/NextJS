import * as studentdata from './data.json'
export async function GET(request,{params}) {


    const id = parseInt(params.id);
    const student = studentdata.find((studentdata) => studentdata.id === id);
  
    if (!student) {
      return Response.json({
        msg : `data not found`
      });
    }
    return Response.json(student);
  }