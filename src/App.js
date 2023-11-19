import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
// Brands
import Brands from './pages/brands';
// Our Company
import History from './pages/about/history';
import Company from './pages/about/company';
// Discover
import BrandStory from './pages/discover/brand-story';
import Original from './pages/discover/original';
// Impact
import Sustainability from './pages/impact/sustainability';
import Social from './pages/impact/social';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/discover/brand-story" element={<BrandStory />} />
          <Route path="/discover/original" element={<Original />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/social" element={<Social />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
