import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo.png';
import paths from 'routes/paths';

interface User {
  [key: string]: string;
}

const SignIn = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="mx-auto flex flex-col items-center w-full max-w-md">
      <Link to="/" className="mt-6 no-underline">
        <img src={Logo} alt="logo" className="h-[92px] w-[92px]" />
      </Link>
      <h2 className="mt-4 text-4xl font-semibold text-gray-800">Sign In</h2>
      <div className="mt-6 space-y-4 w-full">
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-500 flex items-center justify-center gap-2 font-medium"
        >
          <span className="inline-block h-5 w-5 bg-[url('logos:google-icon')] bg-cover"></span>
          Google
        </button>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-500 flex items-center justify-center gap-2 font-medium"
        >
          <span className="inline-block h-5 w-5 bg-[url('mage:facebook')] bg-cover"></span>
          Facebook
        </button>
      </div>

      <div className="my-6 w-full text-center text-gray-500">Or</div>

      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            className="mt-3 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            autoFocus
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
              autoComplete="current-password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              required
            />
            {user.password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <span
                  className={`inline-block h-5 w-5 bg-[url('${
                    showPassword ? 'mdi:visibility' : 'mdi:visibility-off'
                  }')] bg-cover text-gray-500`}
                ></span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <Link to={paths.resetPassword} className="text-sm font-semibold text-blue-600 hover:underline">
            Reset password?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-3 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition font-medium"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 pb-12 text-sm text-gray-600 text-center md:text-left">
        Don’t have account yet?{' '}
        <Link to={paths.signup} className="text-blue-600 font-semibold hover:underline">
          New Account
        </Link>
      </p>
    </div>
  );
};

export default SignIn;