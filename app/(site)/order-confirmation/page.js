"use client";

import React from 'react';
import { useEffect } from 'react';


const OrderConfirmation = () => {

    useEffect( () => {
        const timer = setTimeout( () => {
            window.location.href="https://lgsKit.com/Photoshop-Mastery";
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

  return (
     <div className="flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
      <p className="mt-3 text-lg">
        Redirecting you to your Photoshop Mastery course...
      </p>
    </div>
  )
}

export default OrderConfirmation

export const metadata = {
  title: "Order Confirmation | LGS Kit",
  description: "Buy the best Ebook in the Market!",
};