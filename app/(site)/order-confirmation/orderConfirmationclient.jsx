"use client";

import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowDownIcon } from 'lucide-react';


const OrderConfirmationclient = () => {

    useEffect( () => {
        const timer = setTimeout( () => {
            window.location.href="https://lgsKit.com/Photoshop-Mastery";
        }, 5000);

        return () => clearTimeout(timer);

    }, []);

    const Product = "/pdf-file/Photoshop-Mastery.pdf";

  return (
     <div className="flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
      <Link href={Product} ><button className='bg-gray-800 text-gray-100 flex justify-center items-center w-45 h-10 rounded-md my-5 hover:bg-gray-700 transiton duration-300'><ArrowDownIcon /> download Ebook...</button></Link>
      <p className="mt-3 text-lg">
        Redirecting you to your Photoshop Mastery course...
      </p>
    </div>
  )
}

export default OrderConfirmationclient