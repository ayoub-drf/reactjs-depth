import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Index from "./ReactHookTypes/contextAPITypes/Index" Props
// import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";


createRoot(document.getElementById('root')!).render(
    // <Index> <App /> </Index>
    // <Theme> <App />  </Theme>
    <App />
    
)
