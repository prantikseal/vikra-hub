"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const VikraWho = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex-col-reverse md:flex justify-center items-center pb-10 px-4 sm:px-6 lg:px-8 md:px-2 md:scale-100">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row justify-between px-4 md:px-24 items-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between gap-8"
                >
                    <div className="flex items-center justify-start h-fit md:h-[600px]">
                        <div className="flex-col">
                            <h2 className="text-7xl font-bold" id="harper-bold">Vikra Who ?</h2>
                            <p className="text-xl font-semibold text-gray-500 mt-8 max-w-md">
                                Lorem ipsum dolor sit amet consectetur. Laoreet integer quis sed cursus justo. Leo lectus dignissim aliquet porttitor eget lectus.
                                <br /> <br />
                                Vitae ut praesent enim rhoncus sed elit aliquam in. Magna tortor bibendum id diam risus. Rhoncus malesuada a lorem pretium. Et posuere ac mattis ac et egestas. Imperdiet in ut sapien urna.
                            </p>
                            <div className="mt-12">
                                <Link href="/contact" className="rounded-full px-12 py-4 bg-gradient-129 font-bold">
                                    Know more about me
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="image"
                >
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/vikra-who.png"
                        alt="Vikra Who"
                        className="w-96"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default VikraWho;
