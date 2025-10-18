import { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import CareersPage from './pages/career/CareersPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/pages/career' element ={<CareersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;