import React from 'react';

const Tab4 = () => {
    return (
        <div className='text-center px-10'>
            <div className='grid grid-cols-3 gap-8 items-center'>
                <div className='text-center col-span-2'>
                    <img src="/assets/svg/greenhouse-box-state-4.svg" alt="Green House Box" className="mx-auto w-full lg:w-[75%]" />
                </div>
                <div className='text-left lg:mb-20'>
                    <ul className='text-left w-full justify-content-left'>
                        <li className='flex items-center mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>Assisting farmers in crop choice and planning</span>
                        </li>
                        <li className='flex items-center mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>Trials and world-class protocol building</span>
                        </li>
                        <li className='flex items-center'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-8 mr-3" />
                            <span className='text-lg leading-5'>Easy WhatsApp and on-call advisory</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab4