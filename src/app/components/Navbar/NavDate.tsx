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
      <p>{date}</p>
    </div>
  );
};

export default NavDate;
