"use client";
import React from 'react';
import { motion } from "framer-motion";


const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Tab2 = () => {
    return (
        <section className='relative h-[130vh] py-10 lg:py-20 bg-[url(/assets/landing/footprint-bg.png)] bg-no-repeat bg-cover bg-center'>
            <div className="container mx-auto px-5 lg:px-40 max-w-7xl">
                <div className="text-center">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }} // Replay on scroll up
                        className="w-full mt-5"
                    >
                        <h3 className='text-white text-center font-semibold text-2xl lg:text-4xl !leading-20 '>Registering our footprints in India’s agrivolution.</h3>
                    </motion.div>
                </div>
                <div className='lg:flex items-center justify-center mt-10'>
                    <div className='flex justify-between items-center border border-gray300 rounded-full px-3 py-2 mr-4 text-gray400'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-semibold'>Challenges</span></div>
                        <div className='w-4 h-4 bg-transparent rounded-full border'></div>
                    </div>
                    <div className='flex justify-between items-center border border-white rounded-full px-3 py-2 text-white'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-semibold'>Our Impact</span></div>
                        <div className='w-4 h-4 bg-[#489A4B] rounded-full border'></div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='mb-20'>
                        <h6 className='text-5xl text-primary400 font-bold'>Our Impact</h6>
                    </div>
                    <div className='mb-7'>
                        <h6 className='text-5xl text-primary400 font-bold'>3-7x</h6>
                        <p className='text-xl text-white font-medium mt-1 leading-5'> increase in yield</p>
                    </div>
                    <div className='mb-7'>
                        <h6 className='text-5xl text-primary400 font-bold'>2-3x</h6>
                        <p className='text-xl text-white font-medium mt-1 leading-5'> increase in income</p>
                    </div>
                    <div className='mb-7'>
                        <h6 className='text-5xl text-primary400 font-bold'>Up to 90%</h6>
                        <p className='text-xl text-white font-medium mt-1 leading-5'> decrease in water usage</p>
                    </div>
                    <div className='mb-7'>
                        <h6 className='text-5xl text-primary400 font-bold'>Up to 90%</h6>
                        <p className='text-xl text-white font-medium mt-1 leading-5'> reduction in pest attacks</p>
                    </div>
                </div>
            </div>

            {/* <div className='w-full absolute bottom-0 left-auto text-center'>
                <img src='/assets/landing/earth-cut.png' alt="Registering our footprints in India’s agrivolution." className='mx-auto ' />
            </div> */}
        </section>
    )
}

export default Tab2