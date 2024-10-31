import Image from "next/image"
import { useState } from "react"

const TestimonialSection = ({
  testimonial = "",
  personName = "",
  personImage = "",
  company = "",
  other,
  hoverImage = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    // Use clientX and clientY for viewport-relative coordinates
    setMousePos({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div className="flex justify-center relative">
      <div className={`w-full py-12 px-6 md:px-40 container mt-1 md:mt-56 ${other ? 'pt-96 md:pt-4' : 'pt-4'}`}>
        <div
          className="box flex-col justify-center bg-gradient-129 rounded-2xl py-12 px-4 relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex justify-center">
            <p className="desyrel text-center max-w-xl text-xl md:text-2xl md:max-w-4xl">
              {testimonial || `" All issues you read are based on experiments and real work for clients - I either share case studies, documentation, or challenge the best copy around the globe."`}
            </p>
          </div>
          <div className="profile flex justify-center items-center gap-4 mt-12">
            <div className="profile-image">
              <Image
                width={50}
                height={50}
                src={personImage || "/images/profile.png"}
                alt="profile"
                className="rounded-full"
              />
            </div>
            <div className="profile-details">
              <h3 className="text-2xl font-bold" id="harper-bold">
                {personName || "Simon Verde"}
              </h3>
              <p className="text-lg">
                {company || "CEO, Verde Media"}
              </p>
            </div>
          </div>

          {/* Tooltip Image */}
          {showTooltip && hoverImage && (
            <div
              className="fixed pointer-events-none z-10"
              style={{
                left: `${mousePos.x + 16}px`, // Offset from cursor
                top: `${mousePos.y - 120}px`, // Position above cursor
                transform: 'translateX(-50%)', // Center horizontally
              }}
            >
              <div className="p-2 bg-white rounded-lg shadow-lg">
                <Image
                  src={hoverImage}
                  width={500}
                  height={200}
                  alt="Tooltip"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection