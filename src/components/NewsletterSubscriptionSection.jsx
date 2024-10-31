"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffect } from 'react';

const NewsletterSubscriptionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState('');


    const handleSubscribe = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubscriptionStatus('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setSubscriptionStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            setSubscriptionStatus('error');
        } finally {
            setIsLoading(false);
            setTimeout(() => setSubscriptionStatus(''), 5000);
        }
    };

    const testimonials = [
        {
            id: 1,
            name: 'Kushagra Oberoi',
            role: 'Copywriter, Runs 1-2-3 Copywriting Newsletter',
            profileImage: '/images/profile/kushagra.png'
        },
        {
            id: 2,
            name: 'Aanchal',
            role: 'Freelance Thumbnail Designer',
            profileImage: '/images/profile/aanchal.png'
        },
        {
            id: 3,
            name: 'Urvashi Gormat',
            role: 'Content Creator',
            profileImage: "/images/profile/urvashi-gormat.png"
        },
        {
            id: 4,
            name: 'Ayushi Bansal',
            role: 'Content Creator',
            profileImage: '/images/profile/aayushi-bansal.png'
        },
        {
            id: 5,
            name: 'Vaishali Venkatraman',
            role: 'LinkedIn Coach',
            profileImage: '/images/profile/vaishali-venkatraman.png'
        },
        {
            id: 6,
            name: 'Riten Debnath',
            role: 'Founder and CEO, Fueler',
            profileImage: '/images/profile/riten-debnath.png'
        },
        {
            id: 7,
            name: 'Anangsha Alammyan',
            role: 'Top Medium Writer, 174k+ readers',
            profileImage: '/images/profile/Anangsha.png'
        },
        {
            id: 8,
            name: 'Abhilash KB',
            role: 'Technical Content Writer',
            profileImage: '/images/profile/Abhilash.png'
        },
        {
            id: 9,
            name: `Aditi Agarwal`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Aditi_Agrawal.jpg'
        }, {
            id: 10,
            name: `Anirban Das`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Anirban_Das.jpeg'
        }, {
            id: 11,
            name: "Chelsi Mehta",
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Chelsi_Mehta.png'
        }, {
            id: 12,
            name: `Gaurav`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Gaurav.jpg'
        }, {
            id: 13,
            name: `Himani Jatav`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Himani_Jatav.jpeg'
        }, {
            id: 14,
            name: `Jerry Jose`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Jerry_Jose.jpeg'
        }, {
            id: 15,
            name: `Sarang Bhirad`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Sarang_Bhirad.jpg'
        }, {
            id: 16,
            name: `Shibangi Das`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Shibangi_Das.jpg'
        }, {
            id: 17,
            name: `Shristi Nagar`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Shristi_Nagar.jpg'
        }, {
            id: 18,
            name: `Srinivas Nambi`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Srinivas_Nambi.jpeg'
        }, {
            id: 19,
            name: `Tushar Tayal`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Tushar_Tayal.jpg'
        }, {
            id: 20,
            name: `Vidya P`,
            role: 'Content Writer, Blogger',
            profileImage: '/images/profile/Vidya_P.jpg'
        }
    ];

    // Function to shuffle the testimonial array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Shuffle testimonials and extract profileImage
    const shuffledTestimonials = shuffleArray(testimonials);

    const firstRow = Array(8).fill().map((_, i) => ({
        id: `row1-${i}`,
        image: testimonials[i % testimonials.length].profileImage
    }));

    const secondRow = Array(7).fill().map((_, i) => ({
        id: `row2-${i}`,
        image: testimonials[(i + 8) % testimonials.length].profileImage
    }));

    const thirdRow = Array(8).fill().map((_, i) => ({
        id: `row3-${i}`,
        image: testimonials[(i + 15) % testimonials.length].profileImage
    }));

    // In the useEffect, update to handle the new structure
    useEffect(() => {
        const interval = setInterval(() => {
            const shuffled = shuffleArray([...testimonials]); // Create new shuffled array on each interval

            firstRow.forEach((member, index) => {
                member.image = shuffled[index % testimonials.length].profileImage;
            });

            secondRow.forEach((member, index) => {
                member.image = shuffled[(index + 8) % testimonials.length].profileImage;
            });

            thirdRow.forEach((member, index) => {
                member.image = shuffled[(index + 15) % testimonials.length].profileImage;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Remove dependencies since we're creating new shuffled array inside

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
            ref={ref}
            className="my-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="flex justify-center w-full">
                <div className="container max-w-5xl overflow-hidden">
                    <motion.h2
                        className="text-center text-2xl md:text-6xl"
                        id="harper-bold"
                        variants={itemVariants}
                    >
                        Ditch surface-level information 👎
                    </motion.h2>

                    <motion.div
                        className="flex justify-center w-full"
                        variants={itemVariants}
                    >
                        <p className="max-w-4xl text-lg font-semibold text-center mt-8 text-gray-500 px-4">
                            Average length of each Cognition issue = tightly packed ~1200 words. Imagine the depth.
                        </p>
                    </motion.div>

                    <motion.div
                        className="image-section scale-90 flex-col justify-center mt-8"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="flex justify-center w-full gap-12 mb-8"
                            variants={containerVariants}
                        >
                            {firstRow.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={member.image}
                                        alt={`Member ${member.id}`}
                                        className="max-w-24 max-h-24 rounded-full object-cover border-2 border-[#e98255]"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex justify-center w-full gap-12 mb-8"
                            variants={containerVariants}
                        >
                            {secondRow.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={member.image}
                                        alt={`Member ${member.id}`}
                                        className="max-w-24 max-h-24 rounded-full object-cover border-2 border-[#e98255]"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex justify-center w-full gap-12 mb-8"
                            variants={containerVariants}
                        >
                            {thirdRow.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={member.image}
                                        alt={`Member ${member.id}`}
                                        // center crop the image
                                        className="max-w-24 max-h-24 rounded-full  border-2 border-[#e98255] w-24 h-24 object-contain"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="mx-auto w-full"
                variants={itemVariants}
            >
                <motion.div
                    className="mx-auto w-full"
                    variants={itemVariants}
                >
                    <div className="flex justify-center mt-8">
                        <motion.form
                            onSubmit={handleSubscribe}
                            className="border rounded-3xl border-[#FEBDA2] bg-white flex scale-100 md:scale-150"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Get into not usual club"
                                className="h-14 px-4 rounded-3xl active:border-none focus:outline-none"
                                required
                            />
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#FEBDA2] font-semibold h-14 px-4 rounded-3xl disabled:opacity-50"
                                whileHover={{ backgroundColor: "#e98255" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isLoading ? 'Subscribing...' : 'Start diving'}
                            </motion.button>
                        </motion.form>
                    </div>
                    {subscriptionStatus === 'success' && (
                        <p className="text-green-600 text-center mt-2">Successfully subscribed! Please check your mail and confirm</p>
                    )}
                    {subscriptionStatus === 'error' && (
                        <p className="text-red-600 text-center mt-2">Subscription failed. Please try again.</p>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default NewsletterSubscriptionSection;
