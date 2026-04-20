import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Compare from './pages/Compare';
import './styles/main.css';

const CityGuide = lazy(() => import('./pages/CityGuide'));
const MyTrips = lazy(() => import('./pages/MyTrips'));

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="city/:cityId" element={
            <Suspense fallback={<div className="page-loading"><div className="page-loading-spinner" /></div>}>
              <CityGuide />
            </Suspense>
          } />
          <Route path="compare" element={<Compare />} />
          <Route path="trips" element={
            <Suspense fallback={<div className="page-loading"><div className="page-loading-spinner" /></div>}>
              <MyTrips />
            </Suspense>
          } />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
