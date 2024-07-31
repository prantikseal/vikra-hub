"use client"
import Image from 'next/image';
import React from 'react';
import Masonry from 'react-masonry-css';

const testimonials = [
    {
        id: 1, name: 'John Doe', text: 'This product has completely transformed my workflow. I can\'t imagine going back to my old methods now.'
    },
    {
        id: 2, name: 'Jane Smith', text: 'I was skeptical at first, but after trying it out, I\'m thoroughly impressed. The attention to detail is remarkable.'
    },
    {
        id: 3, name: 'Mike Johnson', text: 'As a long-time user, I\'ve seen this product evolve and improve. It just keeps getting better with each update.'
    },
    {
        id: 4, name: 'Emily Brown', text: 'The customer support team is fantastic. They went above and beyond to help me resolve an issue quickly.'
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
                <h1 className="text-4xl md:text-6xl text-center mb-16" id="harper-bold">What my Subscribers have to say?</h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-129 rounded-lg p-6 shadow-md mb-4"
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