"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from 'framer-motion';

const WhyCognitionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const pillars = [
        {
            title: "For Content Creators",
            content:
                "Content is a curriculum. You study the content, reverse engineer what worked, and double down based on data. Our readers learn exactly that!",
        },
        {
            title: "For Freelancers",
            content:
                "In three years, I have developed systems and SOPs to help me not repeat my mistakes. I share them so you don't commit these mistakes in the first place.",
        },
        {
            title: "For Writers",
            content:
                "Most writers just use proven formulas. The downside? If you do what everyone is doing, you get results similar to them. I will help you form your own theories and techniques.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto p-6 overflow-hidden"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1
                className="text-xl text-gray-400 text-center mb-8"
                variants={itemVariants}
            >
                Why Cognition? What&apos;s in it for you?
            </motion.h1>

            <motion.h2
                className="text-4xl md:text-6xl text-center mb-12"
                variants={itemVariants}
            >
                <span className="font-oswald font-extrabold">3</span> <span id="harper-bold">Pillars of Cognition</span>
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
            >
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-129 bg-opacity-40 p-6 rounded-lg relative"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-12 h-12 bg-orange-400 rounded-lg"></div>
                        <h3 className="text-xl font-semibold mb-4 mt-4">{pillar.title}</h3>
                        <p>{pillar.content}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    {/* <Image src="/images/normal-box.png" alt="Why Cognition 1" width={500} height={500} className="mb-4 w-full" /> */}
                    <h3 className="text-2xl font-bold mb-4">
                        Global Knowledge in your Inbox!
                    </h3>
                    <p className="mb-4">
                        We reach out to top content minds globally and ask them to share
                        their experience with you every week.
                    </p>
                    <p>
                        The content is subscriber-exclusive and is not published
                        elsewhere—not on socials, not on the web, only in your inbox.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    {/* <Image src="/images/normal-box.png" alt="Why Cognition 1" width={500} height={500} className="mb-4 w-full" /> */}
                    <h3 className="text-2xl font-bold mb-4">
                        Get your writing reviewed!
                    </h3>
                    <p className="mb-4">
                        Subscribe to Cognition and reply to the welcome email with your
                        write-up.
                    </p>
                    <p>
                        We will respond to you within 72 hours with a detailed ~300-word
                        review.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhyCognitionSection;