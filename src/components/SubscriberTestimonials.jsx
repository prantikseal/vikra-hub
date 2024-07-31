import Image from 'next/image';
import React from 'react';

const testimonials = [
    { id: 1, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 2, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 3, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 4, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 5, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 6, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 7, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 8, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 9, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
    { id: 10, name: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur. Laoreet integer quis sed cursus justo. Leo lectus adipiscing aliquam porttitor eget netus. Vitae ut praesent arcu rhoncus sed elit aliquet in.' },
];

const getRandomHeight = () => {
    const minHeight = 20; // Minimum height in rem
    const maxHeight = 40; // Maximum height in rem
    const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    return `h-[${randomHeight}rem]`;
};

const SubscriberTestimonials = () => {
    return (
        <div className="flex justify-center w-full my-8">
            <div className="p-8 container">
                <h1 className="text-4xl md:text-6xl text-center mb-16" id="harper-bold">What my Subscribers have to say?</h1>
                <div className=" md:grid-cols-2 lg:grid-cols-3 gap-6 [column-gap:1rem] [row-gap:1rem] [display:grid] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={`bg-gradient-129 rounded-lg p-6 shadow-md ${getRandomHeight()}`}>
                            <div className="flex items-center mb-4">
                                <Image width={200} height={200} src="/images/profile.png" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                                <div className="client-details">
                                    <h3 className=" font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm">Client</p>
                                </div>
                            </div>
                            <p className="text-sm">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriberTestimonials;
