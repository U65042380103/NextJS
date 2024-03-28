'use client'
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import { Delete } from '../api/products/[id]/route';
async function getDataFromAPI() {
    const res = await fetch('/api/products')
    if(!res.ok){
        throw new Error('fetch error')
    }
    console.log(res);
    return res.json();
}

export default function Page() {
    const [productState, setProductState]=useState([])
    const router = useRouter();
    const initProduct =async ()=>{
        try{
            const data = await getDataFromAPI();
            setProductState(data)
        }
        catch (error){
            console.log(error);
        }
    }
    useEffect(()=>{
        initProduct()
    },[])
    console.log(productState);
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
                        <th className="table-header ">Product ID </th>
                        <th className="table-header ">Product Name</th>
                        <th className="table-header ">Product Price</th>
                        <th className="table-header ">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {productState.map((product, index) => (
                        <tr key={index}>
                            <td>{product.products_id}</td>
                            <td className=''>{product.products_name}</td>
                            <td className='justify-between flex'>{product.products_price}<span>บาท</span> </td>
                            <td>
                                <button className='rounded-md bg-sky-100 p-1 text-sky-700' onClick={()=>router.push(`/products/${product.products_id}`)}> &nbsp; Show info &nbsp;</button>
                                <button className='rounded-md bg-pink-100 p-1 text-pink-700' onClick={()=>handleDelete(product.products_id)}> &nbsp; Delete &nbsp;</button>
                            
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
