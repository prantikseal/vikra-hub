"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from 'framer-motion';

const WhyCognitionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const pillars = [
        {
            emoji: "🧠",
            title: "For Content Creators",
            content:
                "Everyone creates. Only the real ones make money from content. We share the curriculum on turning content into a business.",
        },
        {
            emoji: "👩‍💻",
            title: "For Freelancers",
            content:
                "Service is only 10% of running a service-based business. I share the other 90% - systems, SOPs, mistakes, hiring, lead generation, etc.",
        },
        {
            emoji: "📝",
            title: "For Writers",
            content:
                "Most writers just use famous formulas. The downside? You follow the same rules, you write the same copy. But here, you will learn to break and form rules at will.",
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
            className="max-w-6xl mx-auto p-6 overflow-hidden mt-24"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1
                className="text-xl text-black text-center mb-8"
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
                        <div className="w-12 h-12 bg-orange-400 rounded-lg relative">
                            <span className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {pillar.emoji}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 mt-4">{pillar.title}</h3>
                        <p>{pillar.content}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                // className="grid grid-cols-1 md:grid-cols-2 gap-24"
                className="text-center"
                variants={containerVariants}
            >
                {/* <motion.div variants={itemVariants}> */}
                {/* <Image src="/images/normal-box.png" alt="Why Cognition 1" width={500} height={500} className="mb-4 w-full" /> */}
                {/* <h3 className="text-2xl font-bold mb-4">
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
                </motion.div> */}
                <motion.div
                    variants={itemVariants}
                    className="max-w-6xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-12 text-center">
                        Get your writing reviewed!
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                number: "01",
                                title: "Subscribe",
                                description: "Join our community of writers and start your journey"
                            },
                            {
                                number: "02",
                                title: "Send Your Work",
                                description: "Reply to the welcome email with your writeup for review"
                            },
                            {
                                number: "03",
                                title: "Get Feedback",
                                description: "Receive a detailed 300-word review within 72 hours"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="group relative w-[320px] cursor-pointer"
                                animate={{
                                    scale: [1, 1, 1],
                                    transition: {
                                        times: [0, 0.2, 1],
                                        duration: 9, // Total duration for all three steps
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                <motion.div
                                    className="absolute -top-3 -left-3 w-10 h-10 bg-[#FF6B2C] rounded-full flex items-center justify-center text-base font-bold text-white"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        transition: {
                                            times: [
                                                0,
                                                (index * 0.33) + 0.1,
                                                (index * 0.33) + 0.33
                                            ],
                                            duration: 9,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    {step.number}
                                </motion.div>
                                <motion.div
                                    className="bg-gradient-129 bg-opacity-40 border-2 border-gray-200 p-8 rounded-xl transition-colors duration-300 min-h-[180px] flex flex-col justify-center"
                                    animate={{
                                        borderColor: ['#e5e7eb', '#FF6B2C', '#e5e7eb'],
                                        boxShadow: [
                                            '0 0 0 rgba(255, 107, 44, 0)',
                                            '0 0 20px rgba(255, 107, 44, 0.3)',
                                            '0 0 0 rgba(255, 107, 44, 0)'
                                        ],
                                        transition: {
                                            times: [
                                                0,
                                                (index * 0.33) + 0.1,
                                                (index * 0.33) + 0.33
                                            ],
                                            duration: 9,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="text-xl font-semibold mb-4">{step.title}</div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhyCognitionSection;