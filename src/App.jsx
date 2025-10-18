import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-gray-500">Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default App;