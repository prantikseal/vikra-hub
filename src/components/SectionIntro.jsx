import Image from 'next/image'
import React from 'react'

const SectionIntro = () => {
    return (
        <div className="w-full py-12 z-10 absolute px-6 md:px-24" >
            <div className="content flex justify-center items-center md:flex-row flex-col gap-4 md:gap-40">
                <div className="image-section">
                    <Image src="/images/section-intro.png" alt="hero image" width={540} height={514} />
                </div>
                <div className="details-section flex-col  max-w-md">
                    <h2 id="harper-bold" className=" text-6xl mb-12">
                        Not the usual knowledge from the internet
                    </h2>

                    <div className="refferal-section">
                        <p className="mb-8 text-2xl font-bold">Cognition is packed with tried and tested practical insights and theories on writing, freelancing, and content creation.</p>
                        <div className="flex gap-4">
                            <Image src="/images/intro-readers.png" alt="hero image" width={206} height={54} />
                            <p className=" max-w-32">Join the fellow
                                600+ readers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionIntro