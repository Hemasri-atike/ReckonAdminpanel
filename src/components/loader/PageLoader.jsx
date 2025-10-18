// src/components/loader/PageLoader.jsx
const PageLoader = () => {
  return (
    <div className="px-5 w-full min-h-screen">
      <div className="w-full h-1 bg-blue-200 overflow-hidden">
        <div className="animate-pulse h-full w-1/3 bg-blue-600"></div>
      </div>
    </div>
  );
};

export default PageLoader;