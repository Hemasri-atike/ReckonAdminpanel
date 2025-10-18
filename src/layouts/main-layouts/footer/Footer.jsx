import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <p className="mt-0.5 px-0 md:px-4 py-3 text-gray-500 text-sm font-medium text-center md:text-right tracking-wider">
        <Link
        to="https://themewagon.com/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-gray-500 hover:underline"
      >
      </Link>
    </p>
  );
};

export default Footer;