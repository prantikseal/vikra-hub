import React from 'react';

const ProductCard = ({ title, subtitle, buttonText, color, children }) => (
  <div className={`rounded-3xl p-6 bg-${color}-200 flex flex-col justify-between border-2 border-${color}-500`}>
    <div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{subtitle}</p>
      {children}
    </div>
    <button className="bg-black text-white rounded-full py-2 px-4 mt-4 hover:bg-gray-800 transition-colors">
      {buttonText}
    </button>
  </div>
);

const ProductShowcase = () => {
  return (
    <div className=" flex justify-center my-10">
      <div className="container px-8">
        <div className="flex justify-between gap-8 py-4 w-full md:w-3/4 mx-auto">
          <div className="content-section max-w-lg">
            <h2 className="text-3xl md:text-6xl font-bold mb-4" id="harper-bold">Check out some of my other products too.</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. In porttitor sociis id arcu leo feugiat vitae elementum.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              title="Vikra's Cafe"
              subtitle="NEWSLETTER"
              buttonText="Check out now"
              color="yellow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-20 bg-white shadow-md transform -rotate-6"></div>
                <div className="w-16 h-20 bg-white shadow-md absolute"></div>
                <div className="w-16 h-20 bg-white shadow-md transform rotate-6"></div>
              </div>
            </ProductCard>
            <ProductCard
              title="Newsletter Cohort"
              subtitle="EBOOKS & DIGITAL PRODUCTS"
              buttonText="Check out now"
              color="green"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white h-24 rounded shadow-md"></div>
                <div className="bg-white h-24 rounded shadow-md"></div>
              </div>
            </ProductCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;