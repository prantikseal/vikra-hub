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
        Don't be jealous. SUBSCRIBE and learn!`
    },
    {
        id: 2,
        name: 'Ayushi Bansal',
        role: 'Content Creator',
        text: `I have subscribed to over 30+ newsletters and it feels overwhelming to read all of them. 
        But whenever I see any edition of Cognition, I know I have to give it a read. 
        It is always so insightful and unfiltered that reading it feels like having a conversation with Vikra. 
        The newsletter is no less than a piece of art, crafted with so much love and passion. 
        I'd highly recommend you subscribe to it to learn everything about freelancing, newsletter growth, movies, books and a lot more!`
    },
    {
        id: 3,
        name: 'Aanchal',
        role: 'Freelance Thumbnail Designer',
        text: `Cognition is one of the few newsletters I cannot miss! 
        Even though I am a designer by profession, Vikra’s writing style is soooooo good it hooks you till the end, 
        and of course, the way he explains by adding those personal experiences and learnings is absolutely amazing! 
        No clutter, just pure knowledge that too with fun!!!`
    },
    {
        id: 4,
        name: 'Urvashi Gormat',
        role: 'Content Creator',
        text: `Cognition is one of those few newsletters I read. One of the biggest reasons is because it's a no bu**shit newsletter. 
        I like how Vikra shares his experiences and learnings without random fluff. 
        Anyone who is starting their freelancing journey or already working as a freelancer should absolutely subscribe to Cognition for some real learnings!`
    },
    {
        id: 5, name: 'Chris Lee', text: 'As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.'
    },
    {
        id: 6, name: 'Sarah Wilson', text: 'The learning curve was minimal, and I was up and running in no time. Kudos to the design team for making it so user-friendly!'
    },
    {
        id: 7, name: 'David Taylor', text: 'This product has saved me countless hours. I can focus on what really matters instead of getting bogged down in tedious tasks.'
    },
    {
        id: 8, name: 'Lisa Anderson', text: 'The value for money is exceptional. It\'s an investment that pays for itself many times over.'
    },
    {
        id: 9, name: 'Tom Harris', text: 'I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.I appreciate how responsive the development team is to user feedback. They\'re always implementing useful new features.'
    },
    {
        id: 10, name: 'Emma Clark', text: 'As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.As someone who\'s tried many similar products, I can confidently say this is the best in its class. The attention to user experience sets it apart from the competition.'
    },
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
                                <Image width={40} height={40} src="/images/profile.png" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                                <div className="client-details">
                                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm">Client</p>
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