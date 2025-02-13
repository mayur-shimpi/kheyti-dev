"use client";
import React, { FC } from 'react';
import { motion } from "framer-motion";


interface activeIndex {
    activeIndex: number
}
const Tab1: FC<activeIndex> = ({ activeIndex }) => {
    return (
        <div className='flex items-center justify-center'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeOut" } },
                }}
                className="h-[200px]"
            >
                {
                    activeIndex === 0 ?
                        <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
                        :
                        activeIndex === 1 ?
                            <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
                            :
                            activeIndex === 2 ?
                                <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
                                :
                                activeIndex === 3 ?
                                    <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
                                    :
                                    activeIndex === 4 ?
                                        <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
                                        :
                                        null
                }
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                }}
                className="h-[300px]"
            >
                {
                    activeIndex === 0 ?
                        <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
                        :
                        activeIndex === 1 ?
                            <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
                            :
                            activeIndex === 2 ?
                                <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
                                :
                                activeIndex === 3 ?
                                    <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
                                    :
                                    activeIndex === 4 ?
                                        <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
                                        :
                                        null
                }
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
                }}
                className="h-[400px]"
            >
               {
                    activeIndex === 0 ?
                        <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
                        :
                        activeIndex === 1 ?
                            <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
                            :
                            activeIndex === 2 ?
                                <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
                                :
                                activeIndex === 3 ?
                                    <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
                                    :
                                    activeIndex === 4 ?
                                        <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
                                        :
                                        null
                }
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="h-[300px]"
            >
                {
                    activeIndex === 0 ?
                        <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
                        :
                        activeIndex === 1 ?
                            <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
                            :
                            activeIndex === 2 ?
                                <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
                                :
                                activeIndex === 3 ?
                                    <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
                                    :
                                    activeIndex === 4 ?
                                        <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
                                        :
                                        null
                }
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="h-[200px]"
            >
                {
                    activeIndex === 0 ?
                        <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
                        :
                        activeIndex === 1 ?
                            <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
                            :
                            activeIndex === 2 ?
                                <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
                                :
                                activeIndex === 3 ?
                                    <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
                                    :
                                    activeIndex === 4 ?
                                        <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
                                        :
                                        null
                }
            </motion.div>
        </div>
    )
}

export default Tab1