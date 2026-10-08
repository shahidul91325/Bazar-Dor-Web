'use client';
import Image from 'next/image';
import CurrentDate from '../Navbar/Date';
import banner from '@/../public/bazar-hero.png';

const HeroBanner = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="">
      <div className="w-full max-w-6xl mx-auto p-4">
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-[#e1f0e6] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content Area */}
          <div className="flex-1 space-y-5 text-left z-10">
            {/* Date Badge */}
            <div className="inline-block">
              <div className="bg-[#e2f3e8] text-[#1e8347] font-semibold text-sm px-4 py-1.5 rounded-full">
                <CurrentDate></CurrentDate>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#112519] tracking-tight leading-snug">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Subtitle / Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
              দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={scrollToProducts}
                className="bg-[#00a651] hover:bg-[#008d44] active:scale-95 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                সব পণ্য দেখুন
              </button>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="relative flex items-center justify-center shrink-0 w-64 md:w-80">
            {/* Basket & Fruits SVG Illustration */}
            <Image src={banner} alt="banner" width={400} height={400}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
