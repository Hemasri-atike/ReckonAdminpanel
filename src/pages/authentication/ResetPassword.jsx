import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom'; 
import Logo from 'assets/images/Logo.png';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="mx-auto bg-white shadow-lg rounded-lg flex flex-col items-center justify-center w-full max-w-md p-6 h-[600px]">
        <Link to="/" className="no-underline">
          <img src={Logo} alt="logo" className="h-[92px] w-[92px]" />
        </Link>
        <h3 className="mt-6 text-3xl font-semibold text-gray-800">Recover</h3>
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="mail@example.com"
              autoComplete="email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              autoFocus
              required
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Reset Your Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;