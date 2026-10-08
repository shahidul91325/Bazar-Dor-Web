'use client';

import { useEffect, useState } from 'react';

const NavDate = () => {
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
      <p className="md:text-lg text-[8px]">{date}</p>
    </div>
  );
};

export default NavDate;
