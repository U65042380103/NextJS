'use client'
import { useRouter } from 'next/navigation';
async function getDataFromAPI(id:number) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    if(!res.ok){
        throw new Error('fetch error')
    }
    return res.json();
}
export default async function Page({params}) 
{
    const router = useRouter();
    const product = await getDataFromAPI(params.id);
    const handleDelete =async (id:number)=>{
        try{
            await fetch(`/api/products/${id}`,{method:"DELETE",});
            initProduct()
        }
        catch (error){
            console.log("error===>",error);
        }
    };
  return (
    <div>
       
            <br />
            <h1 className='text-center font-bold text-sky-500'>ข้อมูลสินค้า</h1> <br />
            <table className='text-xl text-center w-full mx-auto'>
                <thead>
                    <tr className=''>
                        <th className="table-header ">Product ID</th>
                        <th className="table-header ">Product Name</th>
                        <th className="table-header ">Product Price</th>
                        <th className="table-header ">Action</th>

                    </tr>
                </thead>
                <tbody>
                {
                     product.products_id &&
                        <tr>
                            <td>{product.products_id}</td>
                            <td className=''>{product.products_name}</td>
                            <td className=''>{product.products_price} &nbsp;  บาท</td>
                            <td><button className='rounded-md bg-sky-100 p-1 text-sky-700' onClick={()=>router.push(`/products`)}> &nbsp; Return &nbsp;</button>
                            <button className='rounded-md bg-pink-100 p-1 text-pink-700' onClick={()=>handleDelete(product.products_id)}> &nbsp; Delete &nbsp;</button>
                            </td>
                        </tr>
                }
                {
                     !product.products_id &&
                        <tr>
                            <td>data not found</td>
                            <td className=''>data not found</td>
                            <td className=''>data not found</td>
                            <td><button className='rounded-md bg-sky-100 p-1 text-sky-700' onClick={()=>router.push(`/products`)}> &nbsp; Return &nbsp;</button></td>

                        </tr>
                }
                </tbody>
            </table>
        </div>
  )
}
