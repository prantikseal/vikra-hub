
import Link from 'next/link';
import React from 'react';

const PartnerWithMe = () => {
    return (
        <div className="flex justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl flex  justify-center gap-24 items-center   ">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex-col items-center">
                        <h2 className="text-6xl font-bold max-w-64" id="harper-bold">Partner With Me</h2>
                        <p className="text-xl font-semibold text-gray-500 mt-8 max-w-md">
                            Reach 700+ readers, mainly freelancers, content creators, and writers
                        </p>
                        <div className="mt-12">                       <Link href="/contact" className="rounded-full px-12 py-4 bg-gradient-129">
                            Collaborate with me
                        </Link>
                        </div> 
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-auto">
                        <div className="relative flex w-full sm:w-96 h-[500px] bg-gradient-129 rounded-2xl justify-center items-center p-4">
                            <div className="scale-100 sm:scale-150 flex flex-col sm:flex-row gap-4">
                                <div className="flex flex-1 flex-col gap-4 items-center">
                                    <div className="relative w-full sm:w-44 h-28 bg-white rounded-lg flex justify-center items-center text-xl sm:text-2xl font-bold text-center shadow-md">
                                        600+<br /> Total Subscribers
                                    </div>
                                    <div className="relative w-full sm:w-44 h-28 bg-white rounded-lg flex justify-center items-center text-xl sm:text-2xl font-bold text-center shadow-md">
                                        600+<br /> Total Subscribers
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="relative w-full sm:w-44 h-28 bg-white rounded-lg flex justify-center items-center text-xl sm:text-2xl font-bold text-center shadow-md">
                                        600+<br /> Total Subscribers
                                    </div>
                                    <div className="relative w-full sm:w-44 h-28 bg-white rounded-lg flex justify-center items-center text-xl sm:text-2xl font-bold text-center shadow-md">
                                        600+<br /> Total Subscribers
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