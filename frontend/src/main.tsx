import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { base_path } from './environment'
import ALLRoutes from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import $ from "jquery";
import moment from "moment";
import DynamicTitle from './routes/dynamicTitle'
import 'flowbite';
import "@tabler/icons-webfont/dist/tabler-icons.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite/dist/flowbite.css";
import "./style/custom.css";
import "./style/style.css";
import FlowbiteProvider from './providers/flowbiteProvider'

const applyInitialTheme = () => {
  if (typeof window === 'undefined') return;

  const storedTheme = localStorage.getItem('themeSettings');
  if (storedTheme) {
    try {
      const parsedTheme = JSON.parse(storedTheme);
      if (parsedTheme['data-bs-theme']) {
        document.documentElement.setAttribute('data-bs-theme', parsedTheme['data-bs-theme']);
      }
    } catch {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
    return;
  }

  document.documentElement.setAttribute('data-bs-theme', 'dark');
};

// Ensure globals for jQuery plugins and moment consuming UMD builds
const globalJquery = ( ($ as any).default ?? $ ) as any
const globalMoment = ( (moment as any).default ?? moment ) as any

;(window as any).$ = globalJquery
;(window as any).jQuery = globalJquery
;(window as any).moment = globalMoment

// Load daterangepicker after globals are set (handles ESM/CJS interop)
await import('bootstrap-daterangepicker')

// Initialize Flowbite when the app starts
const FlowbiteInitializer = () => {
  useEffect(() => {
    // Force Flowbite to initialize
    if (typeof window !== 'undefined') {
      const initializeFlowbite = async () => {
        const { initFlowbite } = await import('flowbite');
        
        // Initial initialization
        initFlowbite();
        
        // Re-initialize after a short delay to ensure all components are mounted
        const timer = setTimeout(() => {
          initFlowbite();
          
          // One more initialization after components are definitely mounted
          const finalTimer = setTimeout(() => {
            initFlowbite();
          }, 300);
          
          return () => clearTimeout(finalTimer);
        }, 100);
        
        return () => clearTimeout(timer);
      };
      
      initializeFlowbite();
    }
  }, []);
  
  return null;
};

applyInitialTheme();

// Create a theme configuration if needed
const theme = {
  // Your theme configuration here
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <FlowbiteProvider theme={theme}>
          <FlowbiteInitializer />
          <ALLRoutes />
          <DynamicTitle />
        </FlowbiteProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
