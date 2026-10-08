import Image from 'next/image';
import logo from '@/../public/logo-icon.png';
import Link from 'next/link';
import Navcategories from './Navcategories';
import NavDate from './NavDate';
import NavMarquee from './NavMarquee';

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between items-center mb-3 w-6xl mx-auto">
        <Link href={'/'}>
          <div className="flex items-center gap-3 mt-5 ">
            <div className="bg-green-700 rounded-md">
              <Image src={logo} alt="logo" width={40} height={40} />
            </div>

            <div>
              <h1 className="font-bold text-xl">বাজার দর</h1>
              <NavDate></NavDate>
            </div>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-5 ">
          <Link href={'/sign-in'}>
            <button className="btn btn-ghost">সাইন ইন</button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="btn btn-active btn-success">সাইন আপ</button>
          </Link>
        </div>
      </div>
      <div className=" border-b-1 border-gray-100 w-full "></div>
      <Navcategories></Navcategories>
      <NavMarquee></NavMarquee>
    </div>
  );
};

export default Navbar;
