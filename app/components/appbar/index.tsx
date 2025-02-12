import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../buttons'

const menuItems = [
    {
        id: 0,
        name: 'About Us',
        path: '#',
        isActive: false
    },
    {
        id: 1,
        name: 'Our Solution',
        path: '#',
        isActive: false
    },
    {
        id: 2,
        name: 'Partners and Supporters',
        path: '#',
        isActive: false
    },
    {
        id: 3,
        name: 'Join Us',
        path: '#',
        isActive: false
    },
    {
        id: 4,
        name: 'Recources',
        path: '#',
        isActive: false
    }

]

const Appbar = () => {
    return (
        <header className='w-full absolute top-0 left-0 z-10 bg-transparent text-center py-6 px-5 lg:px-20'>
            <div className='bg-[#00000082] container mx-auto rounded-full px-5'>
                <div className='grid grid-cols-4 items-center'>
                    <div>
                        <Image
                            src="./assets/common/logo-light.svg"
                            alt='Logo'
                            width={200}
                            height={80}
                            className='h-[60px] w-[180px] lg:h-[70px] lg:w-[150px]'
                        />
                    </div>
                    <div className='col-span-2'>
                        <ul className='list-style-none flex items-center justify-center'>
                            {
                                menuItems?.map((item) => {
                                    return (
                                        <li key={item.id} >
                                            <Link href={item.path} className='text-white px-3 py-3 hover:text-primary'>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='text-right'>
                        <PrimaryButton 
                            name='Contact Us'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Appbar