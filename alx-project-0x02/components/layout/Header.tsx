import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="text-xl font-bold">MyLogo</div>
      <nav className="flex gap-6">
        <Link href="/home" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;


import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <nav className="flex space-x-6">
        <Link href="/home" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/posts" className="hover:text-gray-300">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;


