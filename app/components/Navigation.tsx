"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
    const pathname = usePathname();
  return (
   <div className="bg-sky-200 apex-squre text-center">


    <div className='text-dark-500 p-6'>
      <h1 className="font-bold text-blue-700">Navigation</h1>
    <Link href="/home" className={pathname==="/home"?"active":""}>
         Home</Link> |  &nbsp;
    <Link href={"/about"} className={pathname==="/about"?"active":""} >
         About</Link> | &nbsp;
    <Link href={"/profile"} className={pathname==="/profile"?"active":""}>
         Profile</Link> | &nbsp;
    <Link href={"/products"} className={pathname==="/products"?"active":""}>
         Product</Link>


    </div>
  </div>

  )
}
