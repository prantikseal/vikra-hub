
import Link from 'next/link';
import React from 'react';

const PartnerWithMe = () => {
    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex justify-between items-center py-10 px-3 md:px-64 flex-col lg:flex-row">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 scale-90 md:scale-110">
                        <div className="flex items-center justify-start h-fit md:h-[600px]">
                            <div className="flex-col">
                                <h2 className="text-7xl font-bold max-w-96" id="harper-bold">Partner With Me</h2>
                                <p className="text-xl font-semibold text-gray-500 mt-8 max-w-md">
                                    Reach 700+ readers, mainly freelancers, content creators, and writers
                                </p>
                                <div className="mt-12">
                                    <Link href="/contact" className="rounded-full px-12 py-4 bg-gradient-129 font-bold">
                                        Collaborate with me
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-auto">
                        <div className="relative flex w-full sm:w-96 h-[600px] bg-gradient-129 rounded-2xl justify-center items-center p-4 scale-75 ">
                            <div className="scale-150 flex gap-4">
                                <div className="flex flex-1 flex-col gap-4 items-center">
                                    <div className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col">
                                        <span className="font-black font-faber-sans">600+</span><br /> <span className="text-sm">Total Subscribers</span>
                                    </div>
                                    <div className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col">
                                        <span className="font-black font-faber-sans">600+</span><br /> <span className="text-sm">Total Subscribers</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col">
                                        <span className="font-black font-faber-sans">600+</span><br /> <span className="text-sm">Total Subscribers</span>
                                    </div>
                                    <div className="relative sm:w-44 py-8 justify-start text-left bg-white rounded-lg items-center text-xl sm:text-2xl font-bold px-8 md:px-2 shadow-md flex-col">
                                        <span className="font-black font-faber-sans">600+</span><br /> <span className="text-sm">Total Subscribers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnerWithMe;