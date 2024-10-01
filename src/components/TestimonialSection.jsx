import Image from "next/image"


const TestimonialSection = ({
  testimonial = "",
  personName= "", 
  personImage ="",
  other
}) => {
  return (
    <div className="flex justify-center">
      {/* <div className={`"w-full py-12 px-6 md:px-40 container mt-1 md:mt-12 ${other && pt-52 md:pt-4 || ''}`}> */}
      <div className={`w-full py-12 px-6 md:px-40 container mt-1 md:mt-56 ${other && ` pt-96 md:pt-4` || 'pt-4'}`}>
        <div className="box flex-col justify-center bg-gradient-129 rounded-2xl py-12 px-4">
            <div className="flex justify-center">
                  <p className="desyrel text-center max-w-xl text-xl md:text-2xl md:max-w-4xl">
                      “ All issues you read are based on experiments and real work for clients - I either share case studies, documentation, or challenge the best copy around the globe.”
                  </p>
            </div>
              <div className="profile flex justify-center items-center gap-4 mt-12">
                    <div className="profile-image">
                        <Image width={50} height={50} src="/images/profile.png" alt="profile" className="rounded-full" />
                    </div>
                    <div className="profile-details">
                      <h3 className="text-2xl font-bold" id="harper-bold">Simon Verde</h3>
                        <p className="text-lg">CEO, Company</p>
                    </div>
              </div>
        </div>
    </div>
      </div>
  )
}

export default TestimonialSection