import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/themeContext/themeProvider.jsx'
import SectionProvider from './context/sectionContext/sectionProvider.jsx'
import ModalProvider from './context/modalContext/modalProvider.jsx'
import './i18n';

const Tag = process.env.NODE_ENV === 'production' ? Fragment : StrictMode

createRoot(document.getElementById('root')).render(
  <Tag>
    <ThemeProvider>
      <SectionProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </SectionProvider>
    </ThemeProvider>
  </Tag>,
)
