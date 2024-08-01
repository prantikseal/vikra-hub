"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useInView } from 'framer-motion'

const SectionIntro = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            className="w-full py-12 z-10 absolute px-6 md:px-24"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="content flex justify-center items-center md:flex-row flex-col gap-6 md:gap-40">
                <motion.div
                    className="image-section"
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image src="/images/section-intro.png" alt="hero image" width={540} height={514} />
                </motion.div>
                <motion.div
                    className="details-section flex-col max-w-md"
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.h2
                        id="harper-bold"
                        className="mb-6 md:mb-12 text-4xl md:text-6xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Not the usual knowledge from the internet
                    </motion.h2>

                    <div className="refferal-section">
                        <motion.p
                            className="mb-4 md:mb-8 text-xl md:text-2xl font-bold"
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Cognition is packed with tried and tested practical insights and theories on writing, freelancing, and content creation.
                        </motion.p>
                        <motion.div
                            className="flex gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Image src="/images/intro-readers.png" alt="hero image" width={206} height={54} />
                            <p className="max-w-32">Join the fellow 600+ readers</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SectionIntro