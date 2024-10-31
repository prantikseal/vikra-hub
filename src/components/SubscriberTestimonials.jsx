"use client"
import Image from 'next/image';
import React from 'react';
import Masonry from 'react-masonry-css';

const testimonials = [
    {
        id: 1,
        name: 'Kushagra Oberoi',
        role: 'Copywriter, Runs 1-2-3 Copywriting Newsletter',
        text: `As a freelance copywriter who also runs a newsletter, I look forward to Vikra's practical approach. 
        Nothing screams authenticity like Cognition because it is based on so many relatable real-life events. 
        Think of it as a reality TV except it is a newsletter about Vikra's life and it happens to be WAYY more interesting than ours. 
        Don't be jealous. SUBSCRIBE and learn!`,
        profileImage: '/images/profile/kushagra.png'
    },
    {
        id: 2,
        name: 'Aanchal',
        role: 'Freelance Thumbnail Designer',
        text: `Cognition is one of the few newsletters I cannot miss! 
        Even though I am a designer by profession, Vikra’s writing style is soooooo good it hooks you till the end, 
        and of course, the way he explains by adding those personal experiences and learnings is absolutely amazing! 
        No clutter, just pure knowledge that too with fun!!! 
        How can you miss reading cognition, man? As the 3 idiots meme says: "Ye explain bhohot acha karte hain"`,
        profileImage: '/images/profile/aanchal.png'
    },
    {
        id: 3,
        name: 'Urvashi Gormat',
        role: 'Content Creator',
        text: `Cognition is one of those few newsletters I read. One of the biggest reasons is because it's a no bu**shit newsletter. 
        I like how Vikra shares his experiences and learnings without random buff. 
        Anyone who is starting their freelancing journey or already working as a freelancer should absolutely subscribe to Cognition for some real learnings!`,
        profileImage: "/images/profile/urvashi-gormat.png"
    },
    {
        id: 4,
        name: 'Ayushi Bansal',
        role: 'Content Creator',
        text: `I have subscribed to over 30+ newsletters and it feels overwhelming to read all of them. 
        But whenever I see any edition of Cognition, I know I have to give it a read. 
        It is always so insightful and unfiltered that reading it feels like having a conversation with Vikra. 
        The newsletter is no less than a piece of art, crafted with so much love and passion. 
        I'd highly recommend you subscribe to it to learn everything about freelancing, newsletter growth, movies, books and a lot more!`,
        profileImage: '/images/profile/aayushi-bansal.png'
    },
    {
        id: 5,
        name: 'Vaishali Venkatraman',
        role: 'LinkedIn Coach',
        text: `Vikra's COGNITION sounds like a next-door neighbourhood friend who shares what he recently learnt, 
        experienced, explored, got to know about, and ignored. Though all of us stay miles apart, 
        his knowledge sharing that's super realistic and genuine connects the moments we read it across.`,
        profileImage: '/images/profile/vaishali-venkatraman.png'
    },
    {
        id: 6,
        name: 'Riten Debnath',
        role: 'Founder and CEO, Fueler',
        text: `Cognition has been one of the best newsletters I have been reading for quite some time now. 
        Vikra always has some incredible take on copywriting and marketing for almost any product you can think of. 
        I love his passion for writing, sharing freelance and client case studies, and practical advice for anyone who wants to establish as a professional writer. 
        Also, trust me you can never be bored with his storytelling skills which are going to be random, fun, and out of the box. You cannot miss subscribing to Cognition.`,
        profileImage: '/images/profile/riten-debnath.png'
    },
    {
        id: 7,
        name: 'Anangsha Alammyan',
        role: 'Top Medium Writer, 174k+ readers',
        text: `Vikra has created some truly incredible pieces for his newsletter "Cognition". 
        As a subscriber, I look forward to reading his work. His articles always have depth and leave me with something to think about. 
        I enjoy the attention to detail and the unique perspective in his emails.`,
        profileImage: '/images/profile/Anangsha.png'
    },
    {
        id: 8,
        name: 'Abhilash KB',
        role: 'Technical Content Writer',
        text: `When you meet Vikra in person, it is easy to get comfortable very quickly with his easy personality and soft charm. 
        But don't let that fool you into thinking that his writing has similar traits. Vikra is first a strategist, then a storyteller, and finally a writer. 
        Whatever you throw at him, his resulting copy will come at you in an absorbing manner and won't let you go until you finish reading the last word. 
        His words are not the vice-like grip of an arm wrestler, but the warm blanket across your shoulders on a chilly winter night.`,
        profileImage: '/images/profile/Abhilash.png'
    }, {
        id: 9,
        name: 'Tushar Tayal',
        role: 'Content Creator',
        text: `I read cognition whenever I want to get to know something new about content.I keep distrubing Vikra directly but I realised I shouldn't so I go to the second best option i.e. his newsletter.When I was starting out in writing and freelancing, I had a few resources but not like this one which breaks everything down to its basic.If you haven't read it - I am just glad I am getting less competition`,
        profileImage: '/images/profile/Tushar_Tayal.jpg'
    }
];


const SubscriberTestimonials = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <div className="flex justify-center w-full my-8">
            <div className="p-8 container px-8 md:px-44 ">
                <h1 className="text-4xl md:text-6xl text-center mb-16" id="harper-bold">What your favourite creators have to say</h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-129 rounded-3xl p-6 mb-4"
                        >
                            <div className="flex items-center mb-4">
                                <Image width={120} height={140} src={testimonial.profileImage} alt="Avatar" className="w-10 h-10 rounded-full mr-4 object-cover" />
                                <div className="client-details">
                                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-sm font-semibold">{testimonial.text}</p>
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    );
};

export default SubscriberTestimonials;