import React, { lazy, Suspense } from 'react';
import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import ThemeProvider from './context/themeContext/themeProvider.jsx';
import SectionProvider from './context/sectionContext/sectionProvider.jsx';
import ModalProvider from './context/modalContext/modalProvider.jsx';
import './i18n';
import Loading from './components/loading/loadingContainer';

const App = lazy(() => import('./App.jsx'));

const Tag = process.env.NODE_ENV === 'production' ? Fragment : StrictMode;

createRoot(document.getElementById('root')).render(
  <Tag>
    <ThemeProvider>
      <SectionProvider>
        <ModalProvider>
        <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </ModalProvider>
      </SectionProvider>
    </ThemeProvider>
  </Tag>,
);
