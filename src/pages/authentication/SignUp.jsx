// src/pages/auth/SignUp.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import paths from '../../paths';

// Dummy base64-encoded transparent 92x92 PNG
const dummyLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAQAAAC2b/1oAAAASElEQVR42u3PAQ0AMAgAoJ36/z+0DhAQCg4BfxDwDwH/EOAfAv4h4B8C/iHgHwL+IeAfAv4h4B8C/iHgHwL+IeAfAv4h4B8C/gJ2X8jY0gAAAABJRU5ErkJggg==';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="mx-auto flex flex-col items-center w-full max-w-md">
      <Link to="/" className="mt-6 no-underline">
        <img src={dummyLogo} alt="logo" className="h-[92px] w-[92px]" />
      </Link>
      <h2 className="mt-4 text-4xl font-semibold text-gray-800">Sign Up</h2>
      <div className="mt-6 space-y-4 w-full">
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 font-medium"
        >
          <Icon icon="logos:google-icon" className="h-5 w-5" />
          Google
        </button>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 font-medium"
        >
          <Icon icon="logos:facebook" className="h-5 w-5" />
          Facebook
        </button>
      </div>

      <div className="my-6 w-full text-center text-gray-500">Or</div>

      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Ex- Jhon Doe"
            autoComplete="name"
            className="mt-3 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            autoFocus
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-6">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="mail@example.com"
            autoComplete="email"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-6">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={handleInputChange}
            placeholder="hello123"
            autoComplete="username"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-6">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={user.password}
              onChange={handleInputChange}
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              required
            />
            {user.password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <Icon
                  icon={showPassword ? 'mdi:eye' : 'mdi:eye-off'}
                  className="h-5 w-5 text-gray-500"
                />
              </button>
            )}
          </div>
        </div>

        <label className="mt-3 flex items-start">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded mt-1"
          />
          <span className="ml-2 text-sm text-gray-600">
            By creating an account you agree to the{' '}
            <Link to="#!" className="text-blue-600 underline">
              terms of use
            </Link>{' '}
            and our{' '}
            <Link to="#!" className="text-blue-600 underline">
              privacy policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="mt-3 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition font-medium"
        >
          Create account
        </button>
      </form>

      <p className="mt-4 pb-12 text-sm text-gray-600 text-center md:text-left">
        Already have an account?{' '}
        <Link to={paths.signin} className="text-blue-600 font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;