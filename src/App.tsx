/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Applications from './pages/Applications';
import ProductPipeline from './pages/applications/ProductPipeline';
import LnpEngineering from './pages/applications/LnpEngineering';
import ProcessInnovation from './pages/applications/ProcessInnovation';
import TranslationalPlatform from './pages/applications/TranslationalPlatform';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = window.location;
  // This is a simple scroll-to-top on route change wrapper for React Router
  return null; 
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="technology" element={<Technology />} />
          <Route path="applications">
            <Route index element={<Applications />} />
            <Route path="pipeline" element={<ProductPipeline />} />
            <Route path="lnp-engineering" element={<LnpEngineering />} />
            <Route path="process-innovation" element={<ProcessInnovation />} />
            <Route path="translational-platform" element={<TranslationalPlatform />} />
          </Route>
          <Route path="news" element={<News />} />
          <Route path="company" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
