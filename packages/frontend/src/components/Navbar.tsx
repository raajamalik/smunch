import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-10 top-0 backdrop-filter  backdrop-grayscale-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold text-gray-800 text-lg">
            <Image src="https://www.smunch.co/hubfs/Webflow/images/smunch_vertical_logo_main.svg" alt="Smunch home" width={180} height={0} />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/order" className="text-gray-800 hover:text-gray-900">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/review" className="text-gray-800 hover:text-gray-900">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
