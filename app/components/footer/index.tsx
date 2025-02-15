"use client"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { PrimaryButton } from '../buttons';
import { motion } from 'framer-motion';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer: FC = () => {
    return (
        <motion.footer
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative bg-white"
        >
            <div className='w-full absolute left-0 top-[-50px] px-5'>
                <div className='z-9 mb-5 bg-gray800 rounded-xl pt-16 pb-10 bg-[url(/assets/common/footer-shape.png)] bg-contain bg-repeat-x'>
                    <div className='container mx-auto lg:px-20 px-5'>
                        <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-6'>
                            <div className='relative col-span-2'>
                                <div className='mb-10'>
                                    <Image
                                        src="./assets/common/logo-light.svg"
                                        alt='Logo'
                                        width={200}
                                        height={80}
                                    />
                                </div>
                                <div className='mb-5 lg:mb-0 text-white'>
                                    <h6 className='font-cronosRegular text-lg'> Address</h6>
                                    <p className='flex items-start leading-5 mt-1 lg:w-[85%]'><MapPinIcon className='size-10 mr-2' /> Kheyti Tech Pvt. Ltd., Plot No. 200, 2nd Cross, Rocktown Colony, Mansoorabad, Hyderabad, Telangana, 500068</p>
                                </div>
                                <div className='mb-5 lg:mb-0 text-white mt-10'>
                                    <h6 className='font-cronosRegular text-lg'> Contact us</h6>
                                    <a href='#' className='flex items-start leading-5 mt-1 cursor-pointer hover:text-primary400'><PhoneIcon className='size-4 mr-2' />(209) 300-2557</a>
                                    <a href='#' className='flex items-start leading-5 mt-2 cursor-pointer hover:text-primary400'><EnvelopeIcon className='size-4 mr-2' />info@kheyti.com</a>
                                </div>
                                <p className='w-full absolute bottom-0 left-auto text-white text-sm '>© Copyright 2025 - All Rights Reserved by Kheyti Inc. & Kheyti Tech Pvt. Ltd.</p>
                            </div>
                            <div className='relative col-span-2'>
                                <div className='lg:mt-24 grid lg:grid-cols-2 gap-8'>
                                    <div>
                                        <ul>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>Home</Link></li>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>About Us</Link></li>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>Our Solutions</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>Partners and Supports</Link></li>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>Join Us</Link></li>
                                            <li className='my-2 lg:my-4'><Link href="#" className='text-white font-cronosRegular hover:text-primary400'>Resources</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className='w-full absolute bottom-0 left-auto text-sm text-center text-white mt-20'>Made with 🖤 by Blacksof</p>
                            </div>
                            <div className=''>
                                <h6 className='text-white font-cronosRegular text-xl tracking-wide'>Subscribe to our newsletter</h6>
                                <div>
                                    <input type='email' className='w-full bg-transparent text-white border-b border-white py-3 placeholder-white focus:outline-none hover:border-primary400' placeholder='Email' />
                                    <PrimaryButton name='Submit' className='mt-5' />
                                </div>
                                <div className='mt-5 mb-10 lg:mb-0 text-white'>
                                    <h6 className='font-cronosRegular text-lg lg:ml-2'> Join our community</h6>
                                    <div className='flex my-2'>
                                        <Link href='#' className='mr-1 '><img src='/assets/icons/fb.png' alt='facebook' className='w-7' /></Link>
                                        <Link href='#' className='mr-3'><img src='/assets/icons/insta.png' alt='instagram' className='w-7' /></Link>
                                        <Link href='#' className='mr-3'><img src='/assets/icons/linkedin.png' alt='linkedin' className='w-7' /></Link>
                                        <Link href='#' className='mr-2'><img src='/assets/icons/youtube.png' alt='youtube' className='w-7' /></Link>
                                    </div>
                                </div>
                                <div className='mt-28 lg:ml-2'>
                                    <Link href='#' className='text-white'>Privacy Policy</Link>
                                    <Link href='#' className='text-white ml-4'>Terms & Condition</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;
