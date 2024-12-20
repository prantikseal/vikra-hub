"use client"
import Link from 'next/link';
import React from 'react';
import { motion, useInView } from 'framer-motion';

const PartnerWithMe = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const partnerStats = [
        { label: "Total Subscribers", value: "1000+" },
        { label: "30-Day Open Rate", value: "45%" },
        { label: "30-Day CTR", value: "15%" },
        { label: "Frequency", value: "Weekly" }
    ];

    return (
        <motion.div
            ref={ref}
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container overflow-hidden">
                <div className="flex justify-between items-center py-10 px-3 md:px-24 lg:px-36 flex-col lg:flex-row">
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between gap-8 scale-90 md:scale-110"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-start h-fit md:h-[600px]">
                            <div className="flex-col">
                                <motion.h2
                                    className="text-5xl md:text-7xl font-bold max-w-96"
                                    id="harper-bold"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Partner With Me
                                </motion.h2>
                                <motion.p
                                    className="text-lg md:text-xl font-semibold text-gray-500 mt-8 max-w-md"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    Show your work to 1000+ active readers in content marketing; majorly branching into writers, freelancers, content creators
                                </motion.p>
                                <motion.div
                                    className="mt-12"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <Link href="https://www.passionfroot.me/vikra" target='_blank' className="rounded-full px-12 py-4 bg-gradient-129 font-bold">
                                        Collaborate with me
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex justify-center items-center w-full lg:w-auto "
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="relative flex w-full sm:w-96 h-[600px] bg-gradient-129 rounded-2xl justify-center items-center p-4 scale-75"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 0.75, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="scale-[1.3] flex gap-4">
                                <div className="flex flex-1 flex-col gap-4 items-center">
                                    {partnerStats.slice(0, 2).map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col"
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                                        >
                                            <span className="font-black font-faber-sans">{stat.value}</span><br />
                                            <span className="text-sm">{stat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    {partnerStats.slice(2).map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col"
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                        >
                                            <span className="font-black font-faber-sans">{stat.value}</span><br />
                                            <span className="text-sm">{stat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default PartnerWithMe;
