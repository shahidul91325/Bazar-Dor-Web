'use client';

import { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentDate = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
      });

      setDate(currentDate);
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <p className="lg:text-lg md:text-md text-[8px]">{date}</p>
    </div>
  );
};

export default CurrentDate;
