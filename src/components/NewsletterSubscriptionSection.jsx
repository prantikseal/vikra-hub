import Image from 'next/image';
import React from 'react'

const NewsletterSubscriptionSection = () => {
    const members = Array(8).fill().map((_, i) => ({
        id: i,
        image: `/images/profile.png`
    }));
    const members1 = Array(7).fill().map((_, i) => ({
        id: i,
        image: `/images/profile.png`
    }));
    return (
        <div className="  my-8">
            <div className="flex justify-center w-full">
                <div className="container max-w-5xl overflow-hidden">
                    <h2 className=" text-center text-3xl md:text-6xl" id="harper-bold">
                        Join the unusual Club of <span className="font-oswald font-black text-[#e98255]">700+</span>
                        <br />
                        <span className="relative">
                            Unusual knowledge Seekers
                            <span className="absolute md:top-0 -top-6 -left-52 md:left-0 md:right-0 -z-10 -scale-50 md:scale-100 transform -translate-x-5/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0">
                                <svg width={800} height={79} viewBox="0 0 877 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g style={{ mixBlendMode: 'plus-darker' }}>
                                        <path d="M37.06 36.7839C53.6976 37.2307 69.1198 38.0217 85.5979 39.5656C110.154 41.8662 135.373 41.0294 160.029 41.6915C233.251 43.6578 306.078 38.7494 379.327 40.7165C408.351 41.4959 437.266 40.279 466.271 40.7633C517.937 41.626 571.094 41.9518 622.679 38.6079C694.868 33.9285 768.209 39.7196 840.47 41.6601" stroke="#FCD8CB" strokeWidth={73} strokeLinecap="round" />
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </h2>
                    <div className="flex justify-center w-full">
                        <p className="max-w-4xl text-lg font-semibold text-center mt-8 text-gray-500 px-4">
                            The average word count of a Cognition’s full-fledged issue is tightly packed ~1200 words. Imagine the depth
                        </p>
                    </div>

                    <div className="image-section scale-90 md:scale-90 flex-col justify-center mt-8">
                        <div className="flex justify-center w-full gap-12 mb-8">
                            {members.map((member) => (
                                <Image
                                    width={200}
                                    height={200}
                                    key={member.id}
                                    src={member.image}
                                    alt={`Member ${member.id}`}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-[#e98255]"
                                />
                            ))}
                        </div>
                        {/* center the grid */}
                        <div className="flex justify-center w-full gap-12 mb-8">
                            {members1.map((member) => (
                                <Image
                                    width={200}
                                    height={200}
                                    key={member.id}
                                    src={member.image}
                                    alt={`Member ${member.id}`}
                                    className=" w-24 h-24 rounded-full object-cover border-2 border-[#e98255]"
                                />
                            ))}
                        </div>
                        <div className="flex justify-center w-full gap-12 mb-8">
                            {members.map((member) => (
                                <Image
                                    width={200}
                                    height={200}
                                    key={member.id}
                                    src={member.image}
                                    alt={`Member ${member.id}`}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-[#e98255]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full">
                <div className="flex justify-center mt-8">
                    <div className="border rounded-3xl border-[#FEBDA2] bg-white flex scale-100 md:scale-150">
                        <input type="email" placeholder="Get into not usual club" className=" h-14 px-4 rounded-3xl active:border-none focus:outline-none" />
                        <button className="bg-[#FEBDA2] font-semibold h-14 px-4 rounded-3xl">Signup Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSubscriptionSection