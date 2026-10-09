import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className=" border-t-1 border-gray-200 w-full "></div>
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto p-4 bg-white h-20">
        <div className="lg:text-xl md:text-lg text-[8px] ">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>
        <div className="lg:text-xl md:text-lg text-[8px] ">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</div>
      </div>
    </div>
  );
};

export default Footer;
