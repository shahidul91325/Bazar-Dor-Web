import Image from 'next/image';
import logo from '@/../public/logo-icon.png';
import Link from 'next/link';
import Navcategories from './Navcategories';
import NavDate from './NavDate';
import NavMarquee from './NavMarquee';

const Navbar = () => {
  return (
    <div>
      <div className=" lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center flex justify-center items-center mb-3 lg:w-6xl mx-auto md:w-3xl lg:mx-auto md:mx-auto w-full gap-5">
        <Link href={'/'}>
          <div className="flex items-center gap-3 mt-5 ">
            <div className="bg-green-700 rounded-md">
              <Image src={logo} alt="logo" width={40} height={40} />
            </div>

            <div>
              <h1 className="font-bold lg:text-xl md:text-lg text-sm">বাজার দর</h1>
              <NavDate></NavDate>
            </div>
          </div>
        </Link>
        <div className="flex justify-center items-center lg:gap-5 gap-1 ">
          <Link href={'/sign-in'}>
            <button className="btn btn-ghost lg:text-xl md:text-lg text-sm">সাইন ইন</button>
          </Link>
          <Link href={'/sign-up'}>
            <button className="btn btn-active btn-success lg:text-xl md:text-lg text-sm">সাইন আপ</button>
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
