
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Footer = () => {

  const Pathname = usePathname();

  return (
    <div className="text-lg bg-cyan-900 text-white">
                <div className="md:flex justify-between md:pl-20">
                    <div className="hidden md:flex h-auto gap-6 relative right-15 md:left-25 top-15">
                        <Image src="/LGS-logo.png" alt="Logo" width={100} height={100} className="size-20 border rounded-md"/>
                    </div>
                    <nav className="flex flex-col relative md:right-35 gap-2 pt-2 md:w-55"><h2 className="text-2xl text-center">Footer Menu: </h2>
                        <Link href="/shipping-&-delivery" className= {` ${Pathname === "/shipping-&-delivery" ? "bg-cyan-700/95" : ""} hover:bg-cyan-700/95 px-2 py-1 mx-auto text-center rounded transition duration-300`}>Shipping & Delivery</Link>
                        <Link href="/terms-&-condition" className= {` ${Pathname === "/terms-&-condition" ? "bg-cyan-700/95" : ""} hover:bg-cyan-700/95 px-2 py-1 mx-auto text-center rounded transition duration-300`}>Terms & Condition</Link>
                        <Link href="/privacy-policy" className={` ${Pathname === "/privacy-policy" ? "bg-cyan-700/95" : ""} hover:bg-cyan-700/95 px-2 py-1 mx-auto text-center rounded transition duration-300`}>Privacy Policy</Link>
                        <Link href="/refund-policy" className= {` ${Pathname === "/refund-policy" ? "bg-cyan-700/95" : ""} hover:bg-cyan-700/95 px-2 py-1 mb-2 mx-auto text-center rounded transition duration-300`}>Refund Policy</Link>
                    </nav>
                </div><hr />

                <p className="text-center text-sm mt-5 mx-2 md:mx-5">
                    This site is not a part of the Meta website or meta inc. Additionally, This site is not endorsed by Meta™. in any way. 
                    Meta™ is a trademark of Meta™ Inc. As stipulated by law. We are selling digital products and give you the service. 
                    We are not responsible if you purchased and then said i don't know how to use the product.
                </p>
                <p className="text-center mt-4 text-gray-400 font-semibold pb-20"> &copy; {new Date().getFullYear()} Powered By: <Link href='/Photoshop-Mastery'>LGS Educate</Link> </p>
    </div>
  )
}

export default Footer