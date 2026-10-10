import Image from 'next/image';
import logo from '@/../public/logo-icon.png';
import Link from 'next/link';
import Navcategories from './Navcategories';
import NavMarquee from './NavMarquee';
import CurrentDate from './Date';
import ProfileDropdown from './UserInfo';

const Navbar = () => {
  return (
    <div>
      <div className=" lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center flex justify-between items-center mb-3 lg:w-6xl md:w-3xl lg:mx-auto md:mx-auto w-sm mx-auto gap-5">
        <Link href={'/'}>
          <div className="flex items-center gap-3 mt-5 ">
            <div className="bg-green-700 rounded-md">
              <Image src={logo} alt="logo" width={40} height={40} />
            </div>

            <div>
              <h1 className="font-bold lg:text-xl md:text-lg text-sm">বাজার দর</h1>
              <CurrentDate></CurrentDate>
            </div>
          </div>
        </Link>
        <ProfileDropdown></ProfileDropdown>
      </div>
      <div className=" border-b-1 border-gray-100 w-full "></div>
      <Navcategories></Navcategories>
      <NavMarquee></NavMarquee>
    </div>
  );
};

export default Navbar;
