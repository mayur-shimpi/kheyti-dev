import React from 'react';

const Tab2 = () => {
    return (
        <div className='text-center px-10'>
            <div className='grid grid-cols-3 gap-8 items-center'>
                <div className='text-center col-span-2'>
                    <img src="/assets/svg/greenhouse-box-state-2.svg" alt="Green House Box" className="mx-auto w-full lg:w-[75%]" />
                </div>
                <div className='text-left lg:mb-20'>
                    <ul className='text-left w-full justify-content-left'>
                        <li className='flex items-center mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>Knowledge sharing on greenhouses</span>
                        </li>
                        <li className='flex items-center mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>New crop research and development</span>
                        </li>
                        <li className='flex items-center'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>Educating about new methods and practices</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab2