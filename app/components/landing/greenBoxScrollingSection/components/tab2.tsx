import React from 'react';

const Tab2 = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-3 items-center'>
                <div className='text-center col-span-2'>
                    <img src="/assets/svg/greenhouse-box-state-2.svg" alt="Green House Box" className="mx-auto w-full lg:w-[65%]" />
                </div>
                <div className='text-left'>
                    <ul className='text-left w-full justify-content-left p-0'>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Knowledge sharing on greenhouses</span>
                        </li>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>New crop research and development</span>
                        </li>
                        <li className='flex items-start'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Educating about new methods and practices</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab2