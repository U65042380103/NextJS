// import { cache } from "react";

const knex = require('knex');
const knexConfig = require('@/knexfile');
const sql = knex(knexConfig['development']);

export async function GET() {
    try{

        const data = await sql('products').select();
        return Response.json(data);
    }
    catch (error){
        console.log("Database Error:",error);
        throw new Error("Fail to fetch data.");
    }
}