"use client";

import React from 'react';
import Image from 'next/image';
import Logo from "@/public/LGS-logo.png";
import Link from 'next/link';

const Header = () => {
    return (
        <div className='bg-black h-20'>
            <Link href='/'>
                <Image
                    src={Logo}
                    width={70}
                    height={70}
                    className='mx-auto py-1.5'
                    alt='Logo'
                    priority />
            </Link>
        </div>
    )
}

export default Header