export async function GET(request,{params}){
    return Response.json({
        msg : `api method GET id=${params.id}`
    }
    )
}