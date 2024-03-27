export async function GET(request,{params}) {
    const studentdata =[
        {
            id:1,
            name:"Aekkarat",
            major:"Computer Science",
            gpa:"4.00"
        }
        ,
        {
            id:2,
            name:"Natthapong",
            major:"Computer Science",
            gpa:"3.99"
        }
        ,
        {
            id:3,
            name:"Kanyarat",
            major:"Computer Science",
            gpa:"2.99"
        }
    ]


    const id = parseInt(params.id);
    const student = studentdata.find((student) => studentdata.id === id);
  
    if (!student) {
      return Response.json({
        msg : `data not found`
      });
    }
    return Response.json(student);
  }