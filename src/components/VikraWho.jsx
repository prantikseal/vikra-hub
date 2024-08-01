import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const VikraWho = () => {
    return (
        <div className="flex-col-reverse md:flex justify-center items-center pb-10 px-4 sm:px-6 lg:px-8 md:px-2 md:scale-100">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row justify-between px-4 md:px-24 items-center   ">
                <div className="flex justify-between gap-8">
                    <div className="flex items-center justify-start h-fit md:h-[600px]">
                        <div className="flex-col">
                            <h2 className="text-7xl font-bold" id="harper-bold">Vikra Who ?</h2>
                            <p className="text-xl font-semibold text-gray-500 mt-8 max-w-md">
                                Lorem ipsum dolor sit amet consectetur. Laoreet integer quis sed cursus justo. Leo lectus dignissim aliquet porttitor eget lectus.
                                <br /> <br />
                                Vitae ut praesent enim rhoncus sed elit aliquam in. Magna tortor bibendum id diam risus. Rhoncus malesuada a lorem pretium. Et posuere ac mattis ac et egestas. Imperdiet in ut sapien urna.
                            </p>
                            <div className="mt-12">
                                <Link href="/contact" className="rounded-full px-12 py-4 bg-gradient-129 font-bold">
                                    Know more about me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/vikra-who.png"
                        alt="Vikra Who"
                        className="w-96 "
                    />
                </div>
            </div>
        </div>
    )
}

export default VikraWho