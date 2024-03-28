const knex = require('knex');
const knexConfig = require('@/knexfile');
const sql = knex(knexConfig['development']);

export async function GET(req,{params}) {
    try{
        const data = await sql('products').where('products_id',params.id).first();
        return Response.json(data);
    }
    catch (error){
        return Response.json({
            msg:'data not found'
        });
    }
}
export async function DELETE(req,{params}) {
    try{
        await sql('products').where('products_id',params.id).delete();
        return Response.json({
            msg:'deleted data'

        });
    }
    catch (error){
        return Response.json({
            msg:'data not found'
        });
    }
}