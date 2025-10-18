import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import SignInImage from 'assets/images/auth/signin-image.png';
import SignUpImage from 'assets/images/auth/signup-image.png';

const AuthLayout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const pathname = location.pathname.split('/').pop();

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div
        className="px-4 sm:px-8 w-full lg:w-[450px] h-auto min-h-full bg-blue-50 overflow-y-auto"
      >
        {children}
      </div>
      <div className="flex-1 h-full hidden lg:flex items-center justify-center flex-col">
        <img
          src={pathname === 'signin' ? SignInImage : SignUpImage}
          alt={pathname === 'signin' ? 'Sign In' : 'Sign Up'}
          className="h-[55%]"
        />
      </div>
    </div>
  );
};

export default AuthLayout;